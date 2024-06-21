"use client"

import Link from "next/link"

export default function Timeline() {
  const items = [
    {
      date: "June 10-11",
      description: "Proof of Talk",
      href: "https://www.proofoftalk.io/",
    },
    {
      date: "July 12-14",
      description: "EthGlobal Brussels",
      href: "https://ethglobal.com/events/brussels",
    },
    {
      date: "September 18-19",
      description: "Token2049",
      href: "https://www.asia.token2049.com/",
    },
    {
      date: "October 30-31",
      description: "SmartCon",
      href: "https://smartcon.chain.link/home",
    },
    {
      date: "November 2024",
      description: "ODI Hack NYC",
    },
  ]

  return (
    <div>
      <ol className="items-center justify-center md:flex w-full">
        {items.map((item, i) => (
          <li key={i} className="relative mb-6 md:mb-0 grow">
            <div className="flex items-center">
              <div className="z-10 flex size-6 shrink-0 items-center justify-center rounded-full bg-blue-100 ring-0 ring-white dark:bg-blue-900 dark:ring-gray-900 md:ring-8">
                <svg
                  className="size-2.5 text-blue-800 dark:text-blue-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </div>
              <div className="flex h-0.5 w-full bg-gray-200 dark:bg-gray-700"></div>
            </div>
            <div className="mt-3 md:pe-8">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {item.date}
              </h3>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                {item.href ? (
                  <Link href={item.href} target="_blank">
                    {item.description}
                  </Link>
                ) : (
                  item.description
                )}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}
