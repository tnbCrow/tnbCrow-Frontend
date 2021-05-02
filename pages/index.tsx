import Head from "next/head"
import styles from "../styles/Home.module.css"

import { Config } from "../Config"

import { Card } from "@components/Card"
import { Footer } from "@components/Footer"
import { Header } from "@components/Header"
import { Table } from "@components/Table"
import {FormButton} from '@components/FormComponents'
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
        <div className="relative landing_hero flex flex-col justify-center py-10 bg-gray-900 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
          <img src="/hand_and_phones.png" className='absolute hidden lg:block -mt-36 right-0' alt=""/>
            <div className='w-full lg:w-1/2 flex flex-col px-10 lg:pl-20 justify-center min-h-full'>
              <h1 className="mt-4 text-4xl tracking-tight font-normal text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-5xl">
                <span className="block">Buy and Sell TNB in minutes</span>
                <span className="block">Online using tnbCrow</span>
              </h1>
              <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                With tnbCrow you can buy and sell TNB safely without the
                risk of chargebacks. Truly secure payments.
              </p>
            </div>
            <div className='px-10 lg:pl-20 w-full lg:w-2/5 mt-5 flex flex-col justify-center'>
              <div className='flex flex-row w-full bg-white rounded-md'>
                <select className='px-4 py-3 rounded-l-md grid w-1/3'>
                  <option value="">I'm <span className='font-extrabold text-black'>Selling</span></option>
                  <option value="">I'm <span className='font-extrabold text-black'>Buying</span></option>
                </select>
                <div className='border-l-2 m-2 '></div>
                <input className='text-center w-2/3  bg-white rounded-r-md text-black' placeholder='Amount'/>
              </div>
              <div className='flex flex-row w-full mt-5 bg-white rounded-md'>
                <select className='px-4 py-3 rounded-l-md grid w-3/5'>
                  <option value="">Transaction <span className='font-extrabold text-black'>Type</span></option>
                  <option value="">I'm Buying</option>
                  <option value="">I'm Buying</option>
                </select>
                <div className='border-l-2 m-2 '></div>
                <select className='px-4 py-3 rounded-r-md grid w-2/3'>
                  <option value="">Payment Method</option>
                  <option value="">Cash<span className='font-extrabold text-black'></span></option>
                  <option value="">Card<span className='font-extrabold text-black'></span></option>
                </select>
              </div>
              <div className='w-full lg:w-2/5 mt-5'>

                <FormButton>Get started now</FormButton>
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
            <div className="relative -m-y-12">
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
