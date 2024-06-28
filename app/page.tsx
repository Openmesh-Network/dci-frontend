import React from "react"
import Image from "next/image"
import aiven from "@/public/aiven.svg"
import aragon from "@/public/aragon.png"
import chainlink from "@/public/chainlink.svg"
import digitalocean from "@/public/digitalocean.svg"
import equinix from "@/public/equinix.svg"
import fantom from "@/public/fantom.png"
import HeaderBackground from "@/public/HeaderBackground.png"
import hivelocityFull from "@/public/hivelocity-full.svg"
import hivelocity from "@/public/hivelocity.svg"
import OpenmeshLogo from "@/public/logo.svg"
import Mechanics from "@/public/mechanics.png"
import mongodb from "@/public/mongodb.svg"
import OpenmeshFull from "@/public/OpenmeshFull.png"
import polygon from "@/public/polygon.png"
import singularitynet from "@/public/singularitynet.svg"
import snowflake from "@/public/snowflake.svg"
import validationcloud from "@/public/validationcloud.png"
import vultr from "@/public/vultr.svg"

import { Link, ListItem, Subtitle, Text, Title } from "@/components/base"
import Disclaimer from "@/components/custom/disclaimer"
import Reserved from "@/components/custom/reserved"
import Tickets from "@/components/custom/tickets"
import Timeline from "@/components/custom/timeline"

export default function IndexPage() {
  return (
    <>
      <div className="absolute inset-x-0 top-0 -z-50 h-[500px] bg-black flex place-content-center overflow-hidden">
        <Image
          className="object-none w-full"
          alt="Header background"
          src={HeaderBackground}
          height={500}
        />
      </div>
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
        <Subtitle>1. Whitelisting Phase: July 1st - 5th</Subtitle>
        <Text>
          <ListItem>
            <strong>Visit the DCI Main Page:</strong> Go to
            dci.openmesh.network.
          </ListItem>
          <ListItem>
            <strong>Select Ticket Size and Whitelist:</strong> Choose the
            available ticket size and sign the transaction to whitelist yourself
            using the Ethereum network.
          </ListItem>
          <ListItem>
            <strong>Supported ERC20 Assets:</strong> Only USDT, USDC, DAI, and
            ETH are accepted for whitelisting. Payment is not made during this
            step. You can only participate with the amount you have whitelisted.
            You will receive sOPEN tokens in the same wallet used for
            whitelisting.
          </ListItem>
          <ListItem>
            <strong>Account Activation and KYC:</strong> Within 24-48 hours
            after whitelisting, you will be guided to activate your account and
            complete your KYC with the bare metal provider.
          </ListItem>
          <ListItem>
            <strong>Sign Side Letter Agreement:</strong> Receive and sign the
            side letter agreement with the bare metal provider, removing all
            liability from your end.
          </ListItem>
        </Text>
        <Subtitle>2. Payment and Confirmation Phase: July 6th - 7th</Subtitle>
        <Text>
          <ListItem>
            <strong>
              Receive Invoice and Choose Payment Method (July 6th):
            </strong>{" "}
            After completing the preparation steps, you will receive an invoice
            from the bare metal provider. Inform the Openmesh team of your
            preferred payment method (bank transfer, crypto transfer, or card).
          </ListItem>
          <ListItem>
            <strong>Complete the Transaction (July 7th):</strong> Finalize your
            transaction. Your transaction confirmation will be displayed on
            dci.openmesh.network.
          </ListItem>
        </Text>
        <Subtitle>
          3. Post-Participation and minting Phase: July 8th, 2024 - July 7th,
          2025
        </Subtitle>
        <Text>
          <ListItem>
            <strong>Mint sOPEN Tokens:</strong> After DCI participation
            completion, you will receive sOPEN vested over 12 months. You can
            claim all vested tokens at any time, however each claim will incur a
            gas fee. Any sOPEN you obtain can be converted into OPEN 1:1 after
            TGE.
          </ListItem>
        </Text>
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
        <Title>Steps to Participate in the DCI</Title>
        <Text>
          <strong>1. Visit the DCI Main Page:</strong> Go to
          dci.openmesh.network
          <br />
          <strong>
            2. Select Ticket Size and Whitelist (July 1st -5th):
          </strong>{" "}
          Choose the available ticket size and sign the transaction to whitelist
          yourself. You must use the Ethereum network for whitelisting.
          <br />
          <strong>3. Supported ERC20 Assets(July 1st -5th):</strong> Only the
          following ERC20 assets are accepted: USDT, USDC, DAI, and ETH. Payment
          is not made during this step. You can only participate with the amount
          you have whitelisted. You will receive sOPEN tokens in the same wallet
          used for whitelisting.
          <br />
          <strong>4. Account Activation and KYC (July 1st -5th):</strong> Within
          24-48 hours after reserving your spot/whitelisting, you will be guided
          to activate your account and complete your KYC with the bare metal
          provider.
          <br />
          <strong>5. Sign Side Letter Agreement(July 1st -5th):</strong> You
          will receive a side letter agreement to sign with the bare metal
          provider, removing all liability from your end.
          <br />
          <strong>
            6. Receive Invoice and Choose Payment Method(July 6th):
          </strong>{" "}
          After completing the above steps, you will receive an invoice from the
          bare metal provider. Inform the Openmesh team of your preferred
          payment method (bank transfer, crypto transfer, or card).
          <br />
          <strong>7. Initial Asset Transfer(July 7th):</strong> When prompted to
          send assets, start by sending a smaller amount. Confirm with the bare
          metal provider to ensure the transfer is working correctly.
          <br />
          <strong>8. Complete the Transaction(July 7th):</strong> Finalize your
          transaction. Your transaction confirmation will be displayed on
          dci.openmesh.network
          <br />
          <strong>
            9. Wait for DCI Participation Completion(July 7th):
          </strong>{" "}
          Wait up to 24 hours for the completion of your DCI participation.
          <br />
          <strong>
            10. Mint sOPEN Tokens(July 7th 2024 - July 7th 2025):
          </strong>{" "}
          After DCI participation completion, you will receive sOPEN vested over
          12 months. You can claim all vested tokens at any time, however each
          claim will incur a gas fee. Any sOPEN you obtain can be converted into
          OPEN 1:1 after TGE.
        </Text>
        <Title>Main stakeholders</Title>
        <div className="flex w-full flex-wrap items-center pt-5">
          <Stakeholder logo={OpenmeshLogo} description="Openmesh" />
          <Stakeholder logo={hivelocity} description="Hivelocity" />
          <Stakeholder logo={vultr} description="Vultr" />
          <Stakeholder logo={equinix} description="Equinix" />
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
          <Partner src={singularitynet} />
          <Partner src={vultr} />
          <Partner src={snowflake} />
          <Partner src={aiven} />
          <Partner src={polygon} />
          <Partner src={chainlink} />
          <Partner src={aragon} />
          <Partner src={mongodb} />
          <Partner src={validationcloud} />
          <Partner src={digitalocean} />
          <Partner src={hivelocityFull} />
          <Partner src={fantom} />
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
        <Title>Whitelist</Title>
        <Tickets />
        <Title>Your tickets</Title>
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
