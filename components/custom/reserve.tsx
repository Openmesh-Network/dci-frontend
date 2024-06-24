"use client"

import { useState } from "react"
import { DCIReserveContract } from "@/dci-indexer/contracts/DCIReserve"
import { useQueryClient } from "@tanstack/react-query"
import { useWeb3Modal } from "@web3modal/wagmi/react"
import { useAccount, useReadContract } from "wagmi"

import { usePerformTransaction } from "@/hooks/usePerformTransaction"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
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

import { ScrollArea } from "../ui/scroll-area"
import Disclaimer from "./disclaimer"

export default function Reserve() {
  const { isConnected } = useAccount()
  const { open } = useWeb3Modal()
  const { performTransaction, performingTransaction } = usePerformTransaction({
    chainId: defaultChain.id,
  })
  const queryClient = useQueryClient()

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

  const [disclaimerAccepted, setDisclaimerAccepted] = useState<boolean>(false)
  const [disclaimerOpen, setDisclaimerOpen] = useState<boolean>(false)

  return (
    <>
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
                  {ticketSize.toString()} USD ({tokensForTicketSize(ticketSize)}{" "}
                  sOPEN)
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <Button
          className="max-w-[300px]"
          onClick={() => {
            if (!disclaimerAccepted) {
              setDisclaimerOpen(true)
              return
            }

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
                queryClient.invalidateQueries({ queryKey: ["reserved"] })
                queryClient.invalidateQueries({ queryKey: ["waitlisted"] })
              },
            })
          }}
          disabled={performingTransaction}
        >
          {available === BigInt(0) ? "Reserve Waitlist" : "Reserve"}
        </Button>
      </div>
      <AlertDialog open={disclaimerOpen} onOpenChange={setDisclaimerOpen}>
        <AlertDialogTrigger />
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Disclaimer</AlertDialogTitle>
            <AlertDialogDescription>
              <div className="flex flex-col gap-y-2">
                <ScrollArea className="h-96">
                  <div className="flex flex-col gap-y-3 text-left">
                    <Disclaimer />
                  </div>
                </ScrollArea>
                <div className="items-top flex space-x-2">
                  <Checkbox
                    id="disclaimerAccepted"
                    checked={disclaimerAccepted}
                    onCheckedChange={(c) =>
                      c !== "indeterminate" && setDisclaimerAccepted(c)
                    }
                  />
                  <label
                    htmlFor="disclaimerAccepted"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Accept
                  </label>
                </div>
              </div>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setDisclaimerAccepted(false)}>
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={() => setDisclaimerOpen(false)}
              disabled={!disclaimerAccepted}
            >
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}

export function tokensForTicketSize(ticketSize: number) {
  return Math.round(ticketSize * (32.5 / 6.5))
}
