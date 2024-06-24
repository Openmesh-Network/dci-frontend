import React from "react"
import Image from "next/image"
import aiven from "@/public/aiven.svg"
import chainlink from "@/public/chainlink.svg"
import equinix from "@/public/equinix.svg"
import fantom from "@/public/fantom.png"
import hivelocityFull from "@/public/hivelocity-full.svg"
import hivelocity from "@/public/hivelocity.svg"
import OpenmeshLogo from "@/public/logo.svg"
import Mechanics from "@/public/mechanics.png"
import OpenmeshFull from "@/public/OpenmeshFull.png"
import polygon from "@/public/polygon.png"
import singularitynet from "@/public/singularitynet.svg"
import snowflake from "@/public/snowflake.svg"
import vultr from "@/public/vultr.svg"

import { Link, ListItem, Subtitle, Text, Title } from "@/components/base"
import Disclaimer from "@/components/custom/disclaimer"
import Reserve from "@/components/custom/reserve"
import Reserved from "@/components/custom/reserved"
import Timeline from "@/components/custom/timeline"

export default function IndexPage() {
  return (
    <>
      <div className="absolute inset-x-0 top-0 -z-50 h-[500px] bg-black"></div>
      <section className="container grid items-center gap-6 py-10 pb-8">
        <div className="ml-12 flex w-full flex-col items-start gap-2">
          <div className="pt-6" />
          <Image
            className="h-[50px] w-[225px] md:h-[66px] md:w-[300px]"
            alt="Openmesh logo"
            src={OpenmeshFull}
            height={66}
            width={300}
          />
          <div className="pt-6" />
          <h1 className="whitespace-break-spaces text-4xl text-secondary md:text-6xl">
            Decentralized Cloud <br className="hidden sm:inline" />
            Initiative (DCI) 2024
          </h1>
          <div className="pt-36" />
        </div>
        <Subtitle>Important dates</Subtitle>
        <Timeline />
        <Title>About Decentralized Cloud Initiative 2024</Title>
        <Text>
          Openmesh launches its ambitious decentralized cloud initiative with
          the announcement of Xnode One in Paris on June 13th. Xnode One is a
          decentralized virtual machine capable of building and managing various
          web2 and web3 applications. Currently, over 60% of all web3
          infrastructure is hosted by private cloud providers, which contradicts
          the decentralized nature of the web3 industry. Openmesh aims to change
          that.
        </Text>
        <Text>
          To support this transformation, Openmesh will collaborate with
          selected Decentralized Cloud Initiative supporters to raise $6.4
          million. These funds will pay for bare metal server bills, generating
          an equivalent of US$100 million in public cloud resources to support
          and accelerate the Web3 ecosystem in 2024. Approximately 33,000 Xnodes
          will be distributed to the community for free, with major
          distributions beginning at Proof of Talk and continuing through
          Istanbul Blockchain Week, Eth Toronto, and Token 2049.
        </Text>
        <Text>
          The Decentralized Cloud Initiative 2024 aims to transform data and IT
          infrastructure by providing $100 million worth of public cloud
          equivalence over the next 12 months. This initiative supports both
          Web3 and Web2 by offering Xnodes deployed on high-performance
          decentralized virtual machines (DVMs) linked to Non Fungible Tokens
          (NFTs), without KYC requirements. Through community funding and
          partnerships with bare metal providers, Openmesh will create and
          distribute these decentralized virtual machines, empowering developers
          and organizations globally and laying the foundation for a
          decentralized cloud.
        </Text>
        <Text>
          Our main goal is to accelerate the Web3 space by democratizing access
          to decentralized cloud infrastructure, reducing costs, and enabling
          secure, scalable, and efficient data services for developers and
          organizations worldwide. The Decentralized Cloud Initiative 2024 aims
          to empower the Web3 community with the tools and resources needed to
          drive innovation and foster growth in a decentralized digital
          ecosystem.
        </Text>
        <Subtitle>Disclaimer</Subtitle>
        <Disclaimer />
        <Title>Basic steps</Title>
        <Text>
          <ListItem>
            Select a ticket size and reserve the respective amount.
          </ListItem>
          <ListItem>
            You must use the Ethereum network to reserve (which will incur a gas
            fee) and can only send following ERC20 assets (USDT, USDC, DAI and
            ETH) to the bare metal provider.
          </ListItem>
          <ListItem>You only can send the amount you have reserved.</ListItem>
          <ListItem>
            You will receive sOPEN tokens in the wallet you used to reserve.
          </ListItem>
          <ListItem>
            Contact the appropriate bare metal provider based on your ticket to
            complete your KYC. The bare metal provider will provide you with an
            invoice, a wallet address and a point of contact to clarify any
            questions you have.
          </ListItem>
          <ListItem>
            Once you have completed the KYC, wait for 24-48 hours for this to be
            shown on the website.
          </ListItem>
          <ListItem>
            Connect your wallet to see if your KYC was successful. You can
            connect your wallet and you will see if your KYC is successful.
          </ListItem>
          <ListItem>
            Wait for the period where you can send your assets to the bare metal
            provider. You will see a timer on the website.
          </ListItem>
          <ListItem>
            When the timer is indicated for you to send assets, try sending a
            smaller amount and confirm with the bare metal provider to ensure
            everything is working fine.
          </ListItem>
          <ListItem>
            Once the DCI participation is completed, you will be able to receive
            sOPEN vested over 12 months. Any sOPEN you get you can swap in to
            OPEN in a 1:1 ratio.
          </ListItem>
        </Text>
        <Title>Main stakeholders</Title>
        <div className="flex w-full flex-wrap items-center pt-5">
          <Stakeholder
            logo={OpenmeshLogo}
            description="Leading DePIN projects"
          />
          <Stakeholder logo={hivelocity} description="Leading DePIN projects" />
        </div>
        <Title>New kind of global network</Title>
        <Text>
          The Openmesh Network is designed to collect, store, process, stream,
          and provide data connectivity for anyone, anywhere, anytime.
        </Text>
        <Subtitle>
          Decentralized IaaS, PaaS & SaaS, the possibilities are endless.
        </Subtitle>
        <div className="flex w-full flex-wrap items-center gap-5 pt-5 md:gap-x-16">
          <Achievement
            title="8x"
            description="Compatibility: Easy integration and customization with other systems."
          />
          <Achievement
            title="6x"
            description="Cost Saving: Lowers overall expenses, no extra fees."
          />
          <Achievement
            title="27x"
            description="Speed for Build: Speeds up development and deployment."
          />
        </div>
        <Title>Openmesh partners</Title>
        <div className="flex w-full flex-wrap items-center gap-x-10 gap-y-5 pt-5 md:gap-x-28">
          <Partner src={equinix} />
          <Partner src={snowflake} />
          <Partner src={polygon} />
          <Partner src={vultr} />
          <Partner src={singularitynet} />
          <Partner src={aiven} />
          <Partner src={hivelocityFull} />
        </div>
        <Title>Important links</Title>
        <Text>
          <ListItem>
            <Link href={"https://openmesh.network/"}>Litepaper</Link>
          </ListItem>
          <ListItem>
            <Link href={"https://openmesh.network/"}>Website</Link>
          </ListItem>
          <ListItem>
            <Link href={"https://docs.openmesh.network/"}>Docs</Link>
          </ListItem>
          <ListItem>
            <Link href={"https://github.com/Openmesh-Network"}>Github</Link>
          </ListItem>
          <ListItem>
            <Link
              href={
                "https://github.com/Plopmenz/openmesh-smart-contracts/tree/main/audits/Cyberscope"
              }
            >
              Smart contracts audits
            </Link>
          </ListItem>
          <ListItem>
            <Link href={"https://openmesh.network/"}>Roadmap</Link>
          </ListItem>
        </Text>
        <Title>Mechanics</Title>
        <Image alt="Mechanics" src={Mechanics} />
        <Title>Reserve</Title>
        <Reserve />
        <Title>Reserved</Title>
        <Reserved />
      </section>
    </>
  )
}

function Stakeholder({
  logo,
  description,
}: {
  logo: any
  description: string
}) {
  return (
    <div className="flex grow flex-col items-center gap-y-3 p-5">
      <Image alt="Organization logo" src={logo} height={55} />
      <Text>{description}</Text>
    </div>
  )
}

function Achievement({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <div className="flex grow flex-col items-start basis-96">
      <span className="text-5xl font-semibold">{title}</span>
      <Text>{description}</Text>
    </div>
  )
}

function Partner({ src }: { src: any }) {
  return (
    <div className="flex grow flex-col items-center">
      <Image alt="Organization logo" src={src} height={60} />
    </div>
  )
}
