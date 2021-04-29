import Head from "next/head"
import styles from "../styles/Home.module.css"

import { Config } from "../Config"

import { Card } from "@components/Card"
import { Footer } from "@components/Footer"
import { Header } from "@components/Header"
import { Table } from "@components/Table"

const Data = [
  { title: "2M", subtitle: "Total Coins Escrowed" },
  { title: "$0.038", subtitle: "Last 20 Trades" },
  { title: "$80,000", subtitle: "Transactions Escrowed" },
]
const trades = [
  {
    transactionId: "tnbesc900023840-2i",
    buyer: "*********",
    seller: "*********",
    rate: "$0.035",
    amount: "30,000",
    createdAt: "2 days ago",
  },
  {
    transactionId: "tnbesc900023840-2i",
    buyer: "*********",
    seller: "*********",
    rate: "$0.035",
    amount: "30,000",
    createdAt: "2 days ago",
  },
  // More trades...
]

export default function Home() {
  return (
    <div>
      <Head>
        <title>{Config.title}</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto"
        />
      </Head>

      <Header />

      <main>
        <div className="py-10 bg-gray-900 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
          <div className="mx-auto max-w-7xl lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8">
              <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
                <div className="lg:py-24">
                  <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                    <span className="block">Buy and Sell TNB</span>
                    <span className="block">Online using tnbCrow</span>
                  </h1>
                  <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                    With tnbCrow you can buy and sell TNB safely without the
                    risk of chargebacks. Truly secure payments.
                  </p>
                </div>
              </div>
              <div className="mt-12 lg:m-0 lg:relative">
                <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                  {/* Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ */}
                  {/* <img
                      className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                      src="./banner.png"
                      alt=""
                    /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Coins / Weighted Average Rate / Total Trades */}
        <div className="bg-gray-100 pt-12 sm:pt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Trusted by people from over 80 countries.
              </h2>
            </div>
            <div className="max-w-xl mx-auto text-center py-6">
              <h2 className="text-lg text-gray-900">
                Everyday tnbCrow aims to provide the most valuable service to
                the community, and it is through the contributions and
                participation of the community that we are able to showcase the
                statistics for escrow.
              </h2>
            </div>
          </div>
          <div className="mt-10 pb-4 sm:pb-8">
            <div className="relative -m-12">
              <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto">
                  <dl className="rounded-lg space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:space-x-2 lg:space-x-5 xl:space-x-20">
                    {Data.map((data) => {
                      return <Card {...data} />
                    })}
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Recent Trades */}
        <section className="pt-20 pb-10 bg-blue-900 bg-opacity-40">
          <div className="max-w-2xl lg:max-w-6xl mx-auto">
            <Table trades={trades} />
          </div>
        </section>
        {/* How it Works */}
        {/* Why TNB? */}
        {/* Start Trading Now */}
      </main>

      <Footer />
    </div>
  )
}
