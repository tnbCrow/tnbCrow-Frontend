import { FormEvent, ReactNode, useEffect, useState } from 'react'
import { Button } from '@components/Button'
import { Card } from '@components/Card'
import { Layout } from '@components/Layout'
import { OpenTradesTable } from '@components/OpenTradesTable'

export interface Trade {
  created_at: string
  uuid: string
  buyer: string
  seller: string
  agent: string
  rate: number
  amount: number
  payment: PaymentOptions
}

enum Role {
  buyer = 'buyer',
  seller = 'seller',
}

enum PaymentOptions {
  btc = 'btc',
  paypal = 'paypal',
  payoneer = 'payoneer',
}

export const TransactionTable = ({ trades = [], className = '' }) => {
  const limit = 10
  const [page, setPage] = useState(1)
  const [filteredTrades, setFilteredTrades] = useState(trades)
  const currentUser = 'Anon'

  const handleSearch = (e: FormEvent<HTMLInputElement>) => {
    if (page !== 1) {
      setPage(1)
    }

    const search = e.currentTarget.value.toLowerCase()
    const filtered = search
      ? trades.filter((trade) => {
          const role = trade.buyer === currentUser ? 'seller' : 'buyer'
          const tradingUser = role === 'buyer' ? trade.buyer : trade.seller

          return (
            (Object.values(PaymentOptions).find(
              (paymentOption) =>
                paymentOption.toLowerCase().startsWith(search) &&
                trade.payment.toLowerCase().startsWith(search)
            ) ||
              tradingUser.toLowerCase().includes(search) ||
              role.startsWith(search) ||
              new Date(trade.created_at)
                .toLocaleDateString()
                .includes(search) ||
              trade.uuid.includes(search)) ??
            false
          )
        })
      : []

    setFilteredTrades(() => (filtered.length ? filtered : trades))
  }

  const pagination = () => {
    const buttons: ReactNode[] = []
    const lastPage = Math.ceil(filteredTrades.length / limit)

    let components: number[] = []
    if (lastPage <= 4) {
      components = Array.from(Array(lastPage).keys()).map((n) => n + 1)
    } else if (lastPage > 4 && page < 3) {
      components = [1, 2, 3, lastPage]
    } else if (page >= lastPage - 1) {
      components = [1, lastPage - 2, lastPage - 1, lastPage]
    } else {
      components = [1, page - 1, page, page + 1, lastPage]
    }

    components.reduce((alt, pageNum) => {
      if (alt + 1 !== pageNum) {
        buttons.push(
          <span key={`button-${pageNum}`} className="-mx-1s">
            ...
          </span>
        )
      }
      buttons.push(
        <button
          key={pageNum}
          className={`${
            page === pageNum ? 'border border-link text-link' : ''
          } hover:border-2 border-link h-6 w-6`}
          onClick={() => setPage(pageNum)}
        >
          {pageNum}
        </button>
      )
      return pageNum
    }, 0)

    return buttons
  }

  return (
    <div
      className={`text-primary flex flex-col h-full justify-between ${className}}`}
    >
      <div>
        <div className="px-6 py-4 flex justify-between items-center ">
          <h3>Transaction History</h3>
          <input
            type="text"
            onChange={handleSearch}
            placeholder="trans id, user, rate, amount, role"
            className="rounded-full border border-solid py-1 px-3 md:w-60 lg:w-1/2 xl:w-2/5 text-sm font-normal outline-none focus:border-link"
          />
        </div>

        <div className="overflow-x-auto ">
          <div className="align-middle inline-block min-w-full ">
            <div className="overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-200 ">
                  <tr className="text-left border-t border-span border-gray-300">
                    <th
                      scope="col"
                      className="px-6 py-2 text-gray-900 text-xs font-medium  uppercase tracking-wider"
                    >
                      Date
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-2 text-gray-900 text-xs font-medium  uppercase tracking-wider"
                    >
                      Transaction ID
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-2 text-gray-900 text-xs font-medium  uppercase tracking-wider"
                    >
                      Role
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-2 text-gray-900 text-xs font-medium  uppercase tracking-wider"
                    >
                      User
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-2 text-gray-900 text-xs font-medium  uppercase tracking-wider"
                    >
                      Rate
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-2 text-gray-900 text-xs font-medium  uppercase tracking-wider"
                    >
                      Amount
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-2 text-gray-900 text-xs font-medium  uppercase tracking-wider"
                    >
                      Payment
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {(() =>
                    filteredTrades
                      .slice((page - 1) * limit, page * limit)
                      .map((trade) => {
                        const role = trade.buyer === 'Anon' ? 'seller' : 'buyer'
                        const tradeWith =
                          trade.buyer === 'Anon' ? trade.seller : trade.buyer

                        return (
                          <tr
                            key={`trade-${trade.uuid}`}
                            className={` border-t border-span text-left bg-white  hover:bg-gray-50`}
                          >
                            <td className="px-6 py-4 whitespace-nowrap text-sm  ">
                              {new Date(trade.created_at).toLocaleDateString()}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm  ">
                              {trade.uuid}
                            </td>
                            <td
                              className={`px-6 py-4 whitespace-nowrap text-sm uppercase ${
                                role === 'buyer'
                                  ? 'text-green-500'
                                  : 'text-red-500'
                              } `}
                            >
                              {role}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm  text-link ">
                              {tradeWith}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm  flex items-center gap-1">
                              <span className="rounded-full bg-red-500 w-2 h-2" />{' '}
                              {`$${trade.rate / 10000}`}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm  ">
                              {trade.amount.toLocaleString()}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm  uppercase ">
                              {trade.payment}
                            </td>
                          </tr>
                        )
                      }))()}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t px-6 py-4 flex justify-between items-center text-sm">
        <span>
          Showing{' '}
          <span className="font-bold">
            {(page - 1) * limit + 1} - {page * limit}
          </span>{' '}
          of <span className="font-bold">{filteredTrades.length}</span>
        </span>
        <div className="flex justify-center items-center gap-2">
          <Button
            type="text"
            disabled={page === 1}
            onClick={() => {
              setPage((prev) => prev - 1)
            }}
          >
            Previous
          </Button>
          {pagination()}
          <Button
            type="text"
            disabled={page >= filteredTrades.length / limit}
            onClick={() => {
              setPage((prev) => prev + 1)
            }}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}

export default function dashboard({ trades }) {
  return (
    <>
      <Layout>
        <div className="font-mono py-12 px-12 grid bg-gray-100 md:grid-cols-4 md:grid-rows-5 grid-cols-1 gap-4">
          <div className="text-sm text-primary  md:row-start-1 md:row-span-5 flex flex-col space-y-4">
            <div className="bg-white p-6 shadow-md flex flex-col items-center space-y-4">
              <div className="text-center flex flex-col items-center w-full">
                <img
                  src="https://tinygraphs.com/labs/isogrids/hexa16/TNB Crow?theme=seascape&numcolors=4&size=220&fmt=svg"
                  alt="Avatar"
                  className="rounded-full border-primary border-2 p-1 w-20"
                />
                <span>
                  <span className="font-bold">Bill Lakes</span>
                </span>
              </div>
              <span className="text-center">
                Trustworthy, fast, reliable. no scam.
              </span>
              <Button icon={<img src="/assets/Wallet.svg" />} fill>
                Wallet
              </Button>
              <Button
                icon={<img src="/assets/EditProfile.svg" />}
                fill
                type={'secondary'}
              >
                Edit Profile
              </Button>
            </div>

            <div className="text-left  bg-white shadow-md flex flex-col ">
              <h4 className="px-6 border-b py-4 font-bold">Verification</h4>
              <div className="p-6 space-y-3 flex flex-col">
                <span>
                  Phone number <span className="font-bold">verified</span>
                </span>
                <span>
                  Email <span className="font-bold">Verified</span>
                </span>
              </div>
            </div>

            <div className="text-left  bg-white shadow-md flex flex-col ">
              <h4 className="px-6 border-b py-4 font-bold">Info</h4>
              <div className="p-6 space-y-3 flex flex-col">
                <span>
                  Endorsed by <span className="font-bold">50 people</span>
                </span>
                <span>
                  <span className="font-bold">200</span> Trades
                </span>
                <span>
                  Trade Volume: <span className="font-bold">$10,000</span>
                </span>
                <span>
                  Blocked by <span className="font-bold">10 people</span>
                </span>
                <span>
                  Has blocked <span className="font-bold">4 people</span>
                </span>
                <span>
                  Joined <span className="font-bold">10 months</span> ago
                </span>
              </div>
            </div>
          </div>
          {
            // condition - check if this user is the one logged in
            true ? (
              <>
                <div className=" md:row-start-1 md:row-span-1 md:col-start-2  md:col-span-3 sm:grid sm:grid-cols-3 flex flex-col gap-2 ">
                  <Card title="200,000" subtitle="Bought" />
                  <Card title="80,000" subtitle="Sold" />
                  <Card title="$0.031" subtitle="Weighted Average" />
                </div>
                <div className="bg-white shadow-md md:row-start-2 md:row-span-4 md:col-start-2 md:col-span-3 items-center ">
                  <TransactionTable trades={trades}></TransactionTable>
                </div>
              </>
            ) : (
              <div className="md:col-span-3 bg-white shadow-md">
                <OpenTradesTable />
              </div>
            )
          }
        </div>
      </Layout>
    </>
  )
}

export async function getStaticProps(context) {
  const trades: Trade[] = []
  for (let index = 0; index < 50; index++) {
    const rand = Math.random()

    trades.push({
      created_at: new Date().toISOString(),
      uuid: `ce38264b-8155-${index}`,
      buyer: rand > 0.5 ? 'Anon' : rand < 0.2 ? 'MrSky' : 'Hussu',
      seller: rand <= 0.5 ? 'Anon' : rand > 7 ? 'MrSky' : 'Hussu',
      agent: 'Agent-X',
      rate: 234,
      amount: 250000,
      payment:
        rand <= 0.3
          ? PaymentOptions.btc
          : rand > 0.7
          ? PaymentOptions.payoneer
          : PaymentOptions.paypal,
    })
  }
  return {
    props: {
      trades,
    }, // will be passed to the page component as props
  }
}
