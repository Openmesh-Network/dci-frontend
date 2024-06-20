import React from "react"
import Image from "next/image"
import NextLink from "next/link"
import OpenmeshLogo from "@/public/logo.svg"
import Mechanics from "@/public/mechanics.png"
import OpenmeshFull from "@/public/OpenmeshFull.svg"

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
            alt="Openmesh logo"
            src={OpenmeshFull}
            width={300}
            height={50}
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
          In collaboration with the largest data centres in the world to
          accelerate web3 & DePIN industry. Fund $6m worth of bare metal to
          generate US$100 million equivalent of public cloud resource
          equivalence via Xnodes and distribute to the web3 ecosystem for free
          in the next 6-12 months
        </Text>
        <Text>
          For the convenience of Aethir Checker Node buyers, we have prepared a
          single source of truth with all the key information regarding Aethir’s
          Checker node license sale. Warning: Aethir’s token has NOT launched,
          and any token circulating on exchanges allegedly representing Aethir
          is a scam.
        </Text>
        <Text>
          Our token generation event is scheduled for Q2 2024. The only reliable
          sources of information regarding Aethir’s token launch are Aethir’s
          official website and social media channels.
        </Text>
        <Subtitle>Disclaimer</Subtitle>
        <span className="italic">Openmesh isn’t a private company</span>
        <Title>Basics</Title>
        <Text>
          - Outcomes and Ecosystem Development Goals and KPIs
          <br />
          - Use Cases, Innovation, and Enabling
          <br />
          - The Bigger Picture
          <br />
          - Basic Steps, How to Participate (Buyer Journey Diagrams), Ticket
          Sizes, Displaying the Invoices, Wallet Address, Claiming Process,
          Important Dates
          <br />
          - Full Details of the Bare Metal Provider, API Docs, Including Their
          Management
          <br />
          - Finance, Funds Distribution, Uptime Guarantees, Bare Metal Providers
          Support, and Their Commitments
          <br />
          - Any Legal Disclaimers from the Bare Metal Providers (Expectation
          Management and Risk Mitigation Related Information for Bare Metal and
          Openmesh)
          <br />- Service Design Blueprint: How the Whole Process Works
          (Technical Details on How It Connects and Works Together, Including
          Description Behind Process)
        </Text>
        <Title>Main stakeholders</Title>
        <div className="flex w-full flex-wrap items-center pt-5">
          <Stakeholder
            logo={OpenmeshLogo}
            description="Leading DePIN projects"
          />
          <Stakeholder
            logo={OpenmeshLogo}
            description="Leading DePIN projects"
          />
          <Stakeholder
            logo={OpenmeshLogo}
            description="Leading DePIN projects"
          />
          <Stakeholder
            logo={OpenmeshLogo}
            description="Leading DePIN projects"
          />
        </div>
        <Title>Openmesh achievements</Title>
        <div className="flex w-full flex-wrap items-center gap-5 pt-5 md:gap-x-16">
          <Achievement
            title="170+"
            description="Free Lessons, Active Projects"
          />
          <Achievement
            title="170+"
            description="Free Lessons, Active Projects"
          />
          <Achievement
            title="170+"
            description="Free Lessons, Active Projects"
          />
          <Achievement
            title="170+"
            description="Free Lessons, Active Projects"
          />
          <Achievement
            title="170+"
            description="Free Lessons, Active Projects"
          />
          <Achievement
            title="170+"
            description="Free Lessons, Active Projects"
          />
          <Achievement
            title="170+"
            description="Free Lessons, Active Projects"
          />
          <Achievement
            title="170+"
            description="Free Lessons, Active Projects"
          />
        </div>
        <Title>Openmesh partners</Title>
        <div className="flex w-full flex-wrap items-center gap-x-10 gap-y-5 pt-5 md:gap-x-28">
          <Partner src={OpenmeshLogo} />
          <Partner src={OpenmeshLogo} />
          <Partner src={OpenmeshLogo} />
          <Partner src={OpenmeshLogo} />
          <Partner src={OpenmeshLogo} />
          <Partner src={OpenmeshLogo} />
          <Partner src={OpenmeshLogo} />
          <Partner src={OpenmeshLogo} />
          <Partner src={OpenmeshLogo} />
          <Partner src={OpenmeshLogo} />
          <Partner src={OpenmeshLogo} />
          <Partner src={OpenmeshLogo} />
          <Partner src={OpenmeshLogo} />
          <Partner src={OpenmeshLogo} />
          <Partner src={OpenmeshLogo} />
          <Partner src={OpenmeshLogo} />
          <Partner src={OpenmeshLogo} />
          <Partner src={OpenmeshLogo} />
        </div>
        <Title>Important links</Title>
        <Text>
          - <Link href={"https://www.google.com/search?q=todo"}>Litepaper</Link>
          <br />- <Link href={"https://openmesh.network/"}>Website</Link>
          <br />- <Link href={"https://docs.openmesh.network/"}>Docs</Link>
          <br />-{" "}
          <Link href={"https://github.com/Openmesh-Network"}>Github</Link>
          <br />-{" "}
          <Link
            href={
              "https://github.com/Plopmenz/openmesh-smart-contracts/tree/main/audits/Cyberscope"
            }
          >
            Smart contracts audits
          </Link>
          <br />-{" "}
          <Link href={"https://www.google.com/search?q=todo"}>Roadmap</Link>
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

function Title({ children }: { children: any }) {
  return <span className="pt-12 text-3xl font-bold">{children}</span>
}

function Subtitle({ children }: { children: any }) {
  return <span className="pt-6 text-xl font-bold">{children}</span>
}

function Text({ children }: { children: any }) {
  return <span>{children}</span>
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
    <div className="flex grow flex-col items-center">
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

function Link({ href, children }: { href: string; children: any }) {
  return (
    <NextLink className="text-blue-500" href={href} target="_blank">
      {children}
    </NextLink>
  )
}
