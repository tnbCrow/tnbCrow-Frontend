import { Layout } from "@components/Layout"

import { Card } from "@components/Card"
import { TradesTable } from "@components/TradesTable"
import { HowItWorksStep, Steps } from "@components/HowItWorks"

const MockData = {
  amountEscrowed: 18127,
  totalNumberOfCoins: 657500,
  totalNumberOfTransactions: 19,
  weightedAverage: 275,
  lastRate: 310,
  updatedAt: "2021-05-05T02:10:24.838236Z",
}

export default function Home({
  statistics: {
    amountEscrowed,
    totalNumberOfCoins,
    totalNumberOfTransactions,
    weightedAverage,
    lastRate,
    updatedAt,
  },
  trades,
}) {
  return (
    <>
      <Layout>
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
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
          <div className="py-4 md:py-8">
            <div className="relative -m-y-12">
              <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto">
                  <dl className="rounded-lg space-y-10 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-10">
                    <Card
                      title={`$${amountEscrowed.toLocaleString()}`}
                      subtitle="Transaction Amount"
                    />
                    <Card
                      title={totalNumberOfCoins.toLocaleString()}
                      subtitle="Total number of coins"
                    />
                    <Card
                      title={totalNumberOfTransactions.toLocaleString()}
                      subtitle="Number of Transactions"
                    />
                    <Card
                      title={`$${weightedAverage / 10000}`}
                      subtitle="Weighted Average"
                    />
                    <Card title={`$${lastRate / 10000}`} subtitle="Last Rate" />
                    <Card
                      title={new Date(updatedAt).toLocaleString("en", {
                        year: "2-digit",
                        month: "2-digit",
                        day: "2-digit",
                        hour: "numeric",
                      })}
                      subtitle="Last Trade"
                    />
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Recent Trades */}
        <section className="pt-20 pb-10 bg-blue-900 bg-opacity-40">
          <div className="max-w-2xl lg:max-w-6xl mx-auto">
            <TradesTable trades={trades} />
          </div>
        </section>

        {/* How it Works */}
        <section className="py-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl pb-4">
              How it Works
            </h2>
            <p className="pb-8">
              in 5 easy steps, you are done trading either you are a buyer or
              seller
            </p>
          </div>

          <div className="max-w-6xl mx-auto text-center">
            <div className="py-4 md:px-8 grid grid-cols-2 md:grid-cols-5">
              <HowItWorksStep step={Steps.AgreeToTerms} />
              <HowItWorksStep step={Steps.SellerSubmitsPayment} />
              <HowItWorksStep step={Steps.BuyerMakesPayment} />
              <HowItWorksStep step={Steps.SellerApproval} />
              <HowItWorksStep step={Steps.Release} />
            </div>
          </div>

          <div className="py-10">
            <div className="max-w-4xl mx-auto justify-center flex">
              <div className="">
                <button className="px-8 py-2 bg-gray-900  text-white rounded-full border-black p-1">
                  Get Started now
                </button>
                <div className="py-4">
                  <p>LEARN MORE ABOUT TNB</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

const transformStatistics = (data) => {
  return {
    amountEscrowed: data?.total_transactions ?? MockData.amountEscrowed,
    totalNumberOfCoins: data?.total_coins ?? MockData.totalNumberOfCoins,
    totalNumberOfTransactions:
      data?.total_escrows ?? MockData.totalNumberOfTransactions,
    weightedAverage: data?.weighted_rate ?? MockData.weightedAverage,
    lastRate: data?.last_rate ?? MockData.lastRate,
    updatedAt: data?.updated_at ?? MockData.updatedAt,
  }
}

const transformTrades = (data) => {
  return data.map((entry) => {
    return {
      agent: entry?.agent,
      amount: entry?.amount,
      rate: entry?.rate,
      createdAt: entry.created_at,
    }
  })
}

const fetchStatistics = async () => {
  const res = await fetch(
    `https://tnbcrow.pythonanywhere.com/statistics?format=json`
  )
  const response = await res.json()
  return transformStatistics(response?.results[0])
}

const fetchTrades = async () => {
  const res = await fetch(
    `https://tnbcrow.pythonanywhere.com/recent-trades?ordering=-created_at`
  )
  const response = await res.json()
  return transformTrades(response?.results)
}

export async function getServerSideProps() {
  const statistics = await fetchStatistics()
  const trades = await fetchTrades()

  return {
    props: {
      statistics,
      trades,
    },
  }
}
