"use client"

import type { Reserved, Waitlisted } from "@/dci-indexer/types/reserve"
import { reviver } from "@/dci-indexer/utils/json"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { useAccount } from "wagmi"

import { tokensForTicketSize } from "./reserve"

export default function Reserved() {
  const { address } = useAccount()

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

  const { data: waitlisted } = useQuery({
    queryKey: ["waitlisted"],
    queryFn: () => {
      return axios
        .get("/indexer/waitlisted")
        .then((res) => res.data)
        .then((res) => JSON.parse(JSON.stringify(res), reviver) as Waitlisted[])
    },
    refetchInterval: 5 * 1000,
  })

  if (!address) {
    return (
      <span>You need to connect your wallet to see your reserved amount.</span>
    )
  }

  const reservedAmountByAddress =
    reserved?.reduce((prev, cur) => {
      if (cur.account.toLowerCase() === address.toLowerCase()) {
        return prev + cur.amount
      }
      return prev
    }, BigInt(0)) ?? BigInt(0)
  const reservedTokensByAddress =
    reserved?.reduce((prev, cur) => {
      if (cur.account.toLowerCase() === address.toLowerCase()) {
        return prev + tokensForTicketSize(Number(cur.amount))
      }
      return prev
    }, 0) ?? 0

  const waitlistedAmountByAddress =
    waitlisted?.reduce((prev, cur) => {
      if (cur.account.toLowerCase() === address.toLowerCase()) {
        return prev + cur.amount
      }
      return prev
    }, BigInt(0)) ?? BigInt(0)
  const waitlistedTokensByAddress =
    waitlisted?.reduce((prev, cur) => {
      if (cur.account.toLowerCase() === address.toLowerCase()) {
        return prev + tokensForTicketSize(Number(cur.amount))
      }
      return prev
    }, 0) ?? 0

  return (
    <div className="flex flex-col gap-3">
      <span>Reserved: {reservedAmountByAddress.toString()} USD</span>
      <span>Waitlisted: {waitlistedAmountByAddress.toString()} USD</span>
    </div>
  )
}
