"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { DCIReserveContract } from "@/dci-indexer/contracts/DCIReserve"
import type { Reserved } from "@/dci-indexer/types/reserve"
import { reviver } from "@/dci-indexer/utils/json"
import { useQuery, useQueryClient } from "@tanstack/react-query"
import { ColumnDef } from "@tanstack/react-table"
import { useWeb3Modal } from "@web3modal/wagmi/react"
import axios from "axios"
import { Hex } from "viem"
import { useAccount } from "wagmi"

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
import { DataTable } from "@/components/ui/data-table"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import Disclaimer from "@/components/custom/disclaimer"
import { defaultChain } from "@/components/custom/web3-provider"

export interface Ticket {
  provider: string
  ticketSize: number
  ticketsReserved?: number
  numberOfTickets: number
  sOPEN: number
  bonus: string
  action?: any
  tx?: Hex
  className?: string
}

export default function Tickets() {
  const { address, isConnected } = useAccount()
  const { open } = useWeb3Modal()
  const { performTransaction, performingTransaction } = usePerformTransaction({
    chainId: defaultChain.id,
  })
  const queryClient = useQueryClient()
  const { data: reserved } = useQuery({
    queryKey: ["reserved"],
    queryFn: () => {
      return axios
        .get("/indexer/reserved")
        .then((res) => res.data)
        .then((res) => JSON.parse(JSON.stringify(res), reviver) as Reserved[])
    },
    refetchInterval: 5 * 1000,
  })
  const reservedTicket =
    !reserved || !address
      ? undefined
      : reserved.some(
          (ticket) => ticket.account.toLowerCase() === address.toLowerCase()
        )

  const [disclaimerAccepted, setDisclaimerAccepted] = useState<boolean>(false)
  const [disclaimerOpen, setDisclaimerOpen] = useState<boolean>(false)

  const [rawTickets, setRawTickets] = useState<Ticket[]>([
    {
      provider: "Hivelocity",
      ticketSize: 10000,
      numberOfTickets: 5,
      sOPEN: 48387,
      bonus: "0.00%",
    },
    {
      provider: "Hivelocity",
      ticketSize: 25000,
      numberOfTickets: 5,
      sOPEN: 130500,
      bonus: "6.00%",
    },
    {
      provider: "Hivelocity",
      ticketSize: 50000,
      numberOfTickets: 10,
      sOPEN: 281972,
      bonus: "12.60%",
    },
    {
      provider: "Hivelocity",
      ticketSize: 100000,
      numberOfTickets: 12,
      sOPEN: 622093,
      bonus: "21.75%",
    },
    {
      provider: "Hivelocity",
      ticketSize: 250000,
      numberOfTickets: 10,
      sOPEN: 1602896,
      bonus: "24.75%",
    },
    {
      provider: "Hivelocity",
      ticketSize: 500000,
      numberOfTickets: 4,
      sOPEN: 3421547,
      bonus: "31.54%",
    },
  ])

  useEffect(() => {
    if (!reserved) {
      return
    }

    const newTickets = rawTickets.map((ticket) => {
      return {
        ...ticket,
        ticketsReserved: reserved.filter(
          (r) => r.amount === BigInt(ticket.ticketSize)
        ).length,
        tx: reserved.findLast((r) => r.amount === BigInt(ticket.ticketSize))
          ?.transactionHash,
      }
    })
    setRawTickets(newTickets)
  }, [reserved])

  const tickets = rawTickets.concat([
    // {
    //   provider: "Total",
    //   ticketSize: "-" as any,
    //   ticketsReserved: rawTickets.reduce(
    //     (prev, cur) => prev + (cur.ticketsReserved ?? 0),
    //     0
    //   ),
    //   numberOfTickets: rawTickets.reduce(
    //     (prev, cur) => prev + cur.numberOfTickets,
    //     0
    //   ),
    //   sOPEN: rawTickets.reduce(
    //     (prev, cur) => prev + cur.sOPEN * cur.numberOfTickets,
    //     0
    //   ),
    //   bonus: "-",
    //   action: <span className="font-bold">-</span>,
    //   className: "font-bold",
    // },
  ])

  const columns: ColumnDef<Ticket>[] = [
    {
      header: "Provider",
      cell: ({ row }) => (
        <span className={row.original.className}>{row.original.provider}</span>
      ),
    },
    {
      header: "Ticket Size*",
      cell: ({ row }) => (
        <span className={row.original.className}>
          ${row.original.ticketSize.toLocaleString("en-US")}
        </span>
      ),
    },
    // {
    //   header: "Number of Tickets",
    //   cell: ({ row }) => (
    //     <span className={row.original.className}>
    //       {row.original.numberOfTickets}
    //     </span>
    //   ),
    // },
    {
      header: "Total sOPEN pool**",
      cell: ({ row }) => (
        <span className={row.original.className}>
          {(row.original.sOPEN * row.original.numberOfTickets).toLocaleString(
            "en-US"
          )}
        </span>
      ),
    },
    {
      header: "sOPEN per ticket",
      cell: ({ row }) => (
        <span className={row.original.className}>
          {row.original.sOPEN.toLocaleString("en-US")}
        </span>
      ),
    },
    {
      header: "Bonus",
      cell: ({ row }) => (
        <span className={row.original.className ?? "text-green-700"}>
          {row.original.bonus}
        </span>
      ),
    },
    {
      header: "Actions",
      cell: ({ row }) => {
        return (
          row.original.action ?? (
            <Button
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
                      args: [BigInt(row.original.ticketSize)],
                    }
                  },
                  onConfirmed: (receipt) => {
                    queryClient.invalidateQueries({ queryKey: ["reserved"] })
                    queryClient.invalidateQueries({ queryKey: ["waitlisted"] })
                  },
                })
              }}
              className="bg-blue-600 hover:bg-blue-700"
              disabled={
                row.original.ticketsReserved === undefined ||
                row.original.ticketsReserved >= row.original.numberOfTickets ||
                reservedTicket ||
                performingTransaction
              }
            >
              Whitelist
            </Button>
          )
        )
      },
    },
    {
      header: "Tx",
      cell: ({ row }) => {
        const tx = row.original.tx
        if (!tx) {
          return <span className={row.original.className}>-</span>
        }
        return (
          <Link
            className="text-blue-500"
            href={`${defaultChain.blockExplorers.default.url}/tx/${tx}`}
            target="_blank"
          >{`${tx.substring(0, 6)}...${tx.substring(tx.length - 4)}`}</Link>
        )
      },
    },
  ]

  return (
    <>
      <ScrollArea className="w-full whitespace-nowrap rounded-md border">
        <DataTable columns={columns} data={tickets} />
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      <span>* USD, USDT, USDC, ETH, and bank transfer accepted.</span>
      <span>** The total pool of sOPEN allocated for every ticket size.</span>
      <span>You can only reserve one ticket per address.</span>
      <AlertDialog open={disclaimerOpen} onOpenChange={setDisclaimerOpen}>
        <AlertDialogTrigger />
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Disclaimer</AlertDialogTitle>
            <AlertDialogDescription>
              <div className="flex flex-col gap-y-2">
                <ScrollArea className="h-96">
                  <div className="flex flex-col gap-y-3 pr-3 text-left md:pr-4">
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
