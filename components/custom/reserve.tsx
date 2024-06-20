"use client"

import { useState } from "react"
import { DCIReserveContract } from "@/dci-indexer/contracts/DCIReserve"
import { useWeb3Modal } from "@web3modal/wagmi/react"
import { useAccount, useReadContract } from "wagmi"

import { usePerformTransaction } from "@/hooks/usePerformTransaction"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { defaultChain } from "@/components/custom/web3-provider"

export default function Reserve() {
  const { isConnected } = useAccount()
  const { open } = useWeb3Modal()
  const { performTransaction, performingTransaction } = usePerformTransaction({
    chainId: defaultChain.id,
  })

  const ticketSizes = [
    50_000, 100_000, 150_000, 200_000, 250_000, 350_000, 500_000,
  ]
  const [chosenTicketSize, setChosenTicketSize] = useState<number>(
    ticketSizes[0]
  )

  const { data: available, refetch: refetchAvailable } = useReadContract({
    abi: DCIReserveContract.abi,
    address: DCIReserveContract.address,
    functionName: "available",
    chainId: defaultChain.id,
  })

  return (
    <div className="flex flex-col gap-3">
      {available !== undefined && (
        <span>
          {available.toString()} USD available for guaranteed allocation. Any
          surplus will be put onto the waitlist.
        </span>
      )}
      <Select
        onValueChange={(e) => setChosenTicketSize(Number(e))}
        value={chosenTicketSize.toString()}
      >
        <SelectTrigger className="max-w-[300px]">
          <SelectValue placeholder="Ticket size" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Ticket size</SelectLabel>
            {ticketSizes.map((ticketSize, i) => (
              <SelectItem key={i} value={ticketSize.toString()}>
                {ticketSize.toString()} USD (
                {tokensForTicketSize(ticketSize).toString()} sOPEN)
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      <Button
        className="max-w-[300px]"
        onClick={() => {
          if (!isConnected) {
            open()
            return
          }

          performTransaction({
            transaction: async () => {
              return {
                abi: DCIReserveContract.abi,
                address: DCIReserveContract.address,
                functionName: "reserve",
                args: [BigInt(chosenTicketSize)],
              }
            },
            onConfirmed: (receipt) => {
              refetchAvailable()
            },
          })
        }}
        disabled={performingTransaction}
      >
        {available === BigInt(0) ? "Reserve Waitlist" : "Reserve"}
      </Button>
    </div>
  )
}

export function tokensForTicketSize(ticketSize: number) {
  return Math.round(ticketSize * 1.1)
}
