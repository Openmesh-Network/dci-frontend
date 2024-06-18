"use client"

import { useEffect, useState } from "react"
import { useWeb3Modal } from "@web3modal/wagmi/react"
import axios from "axios"
import { useAccount, useWalletClient } from "wagmi"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"

export default function Metadata() {
  const { address, isConnected } = useAccount()
  const { open } = useWeb3Modal()
  const { data: walletClient } = useWalletClient()
  const { toast } = useToast()

  const [email, setEmail] = useState<string>("")

  const [busy, setBusy] = useState<boolean>(false)

  useEffect(() => {
    const getEmail = async () => {
      if (!address) {
        return
      }

      const userData = await axios
        .get(`/indexer/user/${address}`)
        .then((response) => response.data)
      setEmail(userData.metadata.email)
    }

    getEmail().catch(console.error)
  }, [address])

  return (
    <div className="flex flex-col gap-3">
      <Input
        className="max-w-[300px]"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <Button
        className="max-w-[300px]"
        onClick={async () => {
          if (!isConnected) {
            open()
            return
          }

          if (!walletClient) {
            toast({
              title: "Error",
              description: "Please try reconnecting your wallet.",
              variant: "destructive",
            })
            return
          }

          setBusy(true)
          const metadata = JSON.stringify({
            email: email,
          })
          const signature = await walletClient
            .signMessage({
              message: `DCI metadata: ${metadata}`,
            })
            .catch(console.error)
          if (!signature) {
            toast({
              title: "Error",
              description: "Signature rejected.",
              variant: "destructive",
            })
            setBusy(false)
            return
          }

          await axios
            .post("/indexer/setMetadata", {
              account: address,
              metadata: metadata,
              signature: signature,
            })
            .catch((err) => {
              toast({
                title: "Error",
                description: err,
                variant: "destructive",
              })
            })
          toast({
            title: "Success",
            description: "Email updated successfully.",
            variant: "success",
          })
          setBusy(false)
        }}
        disabled={busy}
      >
        Update email
      </Button>
    </div>
  )
}
