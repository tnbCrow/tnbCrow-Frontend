import Head from "next/head"
import styles from "../styles/Home.module.css"

import { Config } from "../Config"

import { Card } from "@components/Card"
import { Footer } from "@components/Footer"
import { Header } from "@components/Header"
import { Table } from "@components/Table"

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

      <div>
        <main>
          <div className="pt-10 bg-gray-900 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
            <div className="mx-auto max-w-7xl lg:px-8">
              <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
                  <div className="lg:py-24">
                    <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                      <span className="block">Buy and Sell TNB in minutes</span>
                      <span className="block">Online using tnbCrow</span>
                    </h1>
                    <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                      With tnbCrow you can buy and sell TNB safely without the
                      risk of chargebacks. Truly secure payments.
                    </p>
                    {/* <div className="mt-10 sm:mt-12">
                      <form
                        action="#"
                        className="sm:max-w-xl sm:mx-auto lg:mx-0"
                      >
                        <div className="sm:flex">
                          <div className="min-w-0 flex-1">
                            <label htmlFor="email" className="sr-only">
                              Email address
                            </label>
                            <input
                              id="email"
                              type="email"
                              placeholder="Enter your email"
                              className="block w-full px-4 py-3 rounded-md border-0 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 focus:ring-offset-gray-900"
                            />
                          </div>
                          <div className="mt-3 sm:mt-0 sm:ml-3">
                            <button
                              type="submit"
                              className="block w-full py-3 px-4 rounded-md shadow bg-indigo-500 text-white font-medium hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 focus:ring-offset-gray-900"
                            >
                              Start free trial
                            </button>
                          </div>
                        </div>
                        <p className="mt-3 text-sm text-gray-300 sm:mt-4">
                          Start your free 14-day trial, no credit card
                          necessary. By providing your email, you agree to our{" "}
                          <a href="#" className="font-medium text-white">
                            terms or service
                          </a>
                          .
                        </p>
                      </form>
                    </div> */}
                  </div>
                </div>
                <div className="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
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
          {/* <section /> */}

          {/* Recent Trades */}
          <section className="py-10 bg-gray-300 bg-opacity-40">
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
    </div>
  )
}
