"use client"

import Link from "next/link"
import { ColumnDef } from "@tanstack/react-table"
import { useWeb3Modal } from "@web3modal/wagmi/react"
import { formatUnits, Hex, parseUnits } from "viem"
import { useAccount } from "wagmi"

import { Button } from "@/components/ui/button"
import { defaultChain } from "@/components/custom/web3-provider"

import { DataTable } from "../ui/data-table"

export interface Ticket {
  provider: string
  ticketId: Hex
  ticketSize: bigint
  ticketCurrency: {
    symbol: string
    decimals: number
  }
  tokensReward: bigint
  bonus: string
  tx?: Hex
}

export default function Tickets() {
  const { isConnected } = useAccount()
  const { open } = useWeb3Modal()

  const tickets: Ticket[] = [
    {
      provider: "Vultr",
      ticketId:
        "0x0a65181f0595e7bb22b17e8e6a11b87f51e80e9b8eecb7434a295af0e949f956",
      ticketSize: parseUnits("50000", 6),
      ticketCurrency: {
        symbol: "USDC",
        decimals: 6,
      },
      tokensReward: parseUnits("55000", 18),
      bonus: "XX",
    },
    {
      provider: "Vultr",
      ticketId:
        "0x0a65181f0595e7bb22b17e8e6a11b87f51e80e9b8eecb7434a295af0e949f956",
      ticketSize: parseUnits("50000", 6),
      ticketCurrency: {
        symbol: "USDT",
        decimals: 6,
      },
      tokensReward: parseUnits("55000", 18),
      bonus: "XX",
    },
    {
      provider: "Vultr",
      ticketId:
        "0x0a65181f0595e7bb22b17e8e6a11b87f51e80e9b8eecb7434a295af0e949f956",
      ticketSize: parseUnits("50000", 6),
      ticketCurrency: {
        symbol: "USDC",
        decimals: 6,
      },
      tokensReward: parseUnits("55000", 18),
      bonus: "XX",
    },
    {
      provider: "Vultr",
      ticketId:
        "0x0a65181f0595e7bb22b17e8e6a11b87f51e80e9b8eecb7434a295af0e949f956",
      ticketSize: parseUnits("50000", 6),
      ticketCurrency: {
        symbol: "USDT",
        decimals: 6,
      },
      tokensReward: parseUnits("55000", 18),
      bonus: "XX",
    },
    {
      provider: "Vultr",
      ticketId:
        "0x0a65181f0595e7bb22b17e8e6a11b87f51e80e9b8eecb7434a295af0e949f956",
      ticketSize: parseUnits("50000", 6),
      ticketCurrency: {
        symbol: "USDT",
        decimals: 6,
      },
      tokensReward: parseUnits("55000", 18),
      bonus: "XX",
      tx: "0xdbd886e2dc2d17b31e1c132bb32536e3681d4433de96f4fa42bcf9547bac3d8d",
    },
  ]

  const columns: ColumnDef<Ticket>[] = [
    {
      accessorKey: "provider",
      header: "Provider",
    },
    {
      accessorKey: "ticketId",
      header: "Ticket ID",
      cell: ({ row }) => {
        const ticketId = row.original.ticketId
        return `${ticketId.substring(0, 6)}...${ticketId.substring(ticketId.length - 4)}`
      },
    },
    {
      accessorKey: "ticketSize",
      header: "Ticket Size",
      cell: ({ row }) => {
        const ticketSize = row.original.ticketSize
        const ticketCurrency = row.original.ticketCurrency
        let color = "bg-gray-200"
        switch (ticketCurrency.symbol) {
          case "USDT":
            color = "bg-green-200"
            break
          case "USDC":
            color = "bg-blue-200"
            break
        }
        return (
          <span
            className={`${color} rounded-md p-2`}
          >{`${formatUnits(ticketSize, ticketCurrency.decimals)} ${ticketCurrency.symbol}`}</span>
        )
      },
    },
    {
      accessorKey: "tokensReward",
      header: "sOPEN",
      cell: ({ row }) => {
        const tokensReward = row.original.tokensReward
        return formatUnits(tokensReward, 18)
      },
    },
    {
      accessorKey: "bonus",
      header: "Bonus",
    },
    {
      header: "Actions",
      cell: ({ row }) => {
        const ticketId = row.original.ticketId
        const tx = row.original.tx
        return (
          <Button
            onClick={() => {
              if (!isConnected) {
                open()
                return
              }

              alert("There is no smart contract yet")
            }}
            className="bg-blue-600 hover:bg-blue-700"
            disabled={tx !== undefined}
          >
            Whitelist
          </Button>
        )
      },
    },
    {
      accessorKey: "tx",
      header: "Tx",
      cell: ({ row }) => {
        const tx = row.original.tx
        if (!tx) {
          return "-"
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

  return <DataTable columns={columns} data={tickets} />
}
