import { Button } from '@components/Button'
import { Card } from '@components/Card'
import { Layout } from '@components/Layout'
import { FormEvent, ReactNode, useEffect, useState } from 'react'

export interface TradeHistory {
  date: string
  id: string
  role: 'BUYER' | 'SELLER'
  userId: string
  rate: number
  amount: number
  payment: 'string'
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
  const [search, setSearch] = useState('')

  const updateSearch = (e: FormEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value)
    if (page !== 1) {
      setPage(1)
    }
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
            value={search}
            onChange={updateSearch}
            placeholder="trans id, user, rate, amount, role"
            className="rounded-full border border-solid py-1 px-3 md:w-60 lg:w-1/2 xl:w-2/5 text-sm font-normal outline-none"
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
                  {(() => {
                    const filteredTrades = trades.filter(
                      (trade) =>
                        (Object.values(Role).find(
                          (role) =>
                            role.toLowerCase().startsWith(search) &&
                            trade.role.startsWith(search)
                        ) ||
                          Object.values(PaymentOptions).find(
                            (paymentOption) =>
                              paymentOption.toLowerCase().startsWith(search) &&
                              trade.paymentIn.startsWith(search)
                          )) ??
                        false
                    )
                    return (filteredTrades.length ? filteredTrades : trades)
                      .slice((page - 1) * limit, page * limit)
                      .map((trade, tradeIdx) => (
                        <tr
                          key={`trade-`}
                          className={` border-t border-span text-left bg-white  hover:bg-gray-50`}
                        >
                          <td className="px-6 py-4 whitespace-nowrap text-sm  ">
                            {new Date(trade.createdAt).toLocaleDateString()}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm  ">
                            {trade.transactionId}
                          </td>
                          <td
                            className={` px-6 py-4 whitespace-nowrap text-sm  uppercase ${
                              trade.role === Role.buyer
                                ? 'text-green-500'
                                : 'text-red-500'
                            } `}
                          >
                            {trade.role}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm  text-link ">
                            {trade.user}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm  flex items-center gap-1">
                            <span className="rounded-full bg-red-500 w-2 h-2" />{' '}
                            {`$${trade.rate / 10000}`}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm  ">
                            {trade.amount.toLocaleString()}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm  uppercase ">
                            {trade.paymentIn}
                          </td>
                        </tr>
                      ))
                  })()}
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
            {trades.length / 10 >= page ? 10 : trades.length % 10}
          </span>{' '}
          of <span className="font-bold">{trades.length}</span>
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
          {(() => {
            const buttons: ReactNode[] = []
            for (
              let n = page ?? page - 1;
              n <= (Math.ceil(trades.length / 10) < page ? page + 1 : page);
              n++
            ) {
              buttons.push(
                <button
                  className={`${
                    page === n ? 'border border-link text-link' : ''
                  } hover:border-2 border-link h-6 w-6`}
                >
                  {n}
                </button>
              )
            }
            return buttons
          })()}
          <Button
            type="text"
            disabled={page >= trades.length / limit}
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

export default function dashboard() {
  const trades = []

  for (let index = 0; index < 30; index++) {
    const rand = Math.random()
    trades.push({
      createdAt: new Date().toISOString(),
      transactionId: `tnbesc90002384-${index}i`,
      role: rand > 0.45 ? Role.seller : Role.buyer,
      user: 'Mr Sky',
      agent: 'Player-X',
      rate: 0.02,
      amount: 250000,
      paymentIn:
        rand <= 0.3
          ? PaymentOptions.btc
          : rand > 0.7
          ? PaymentOptions.payoneer
          : PaymentOptions.paypal,
    })
  }

  return (
    <>
      <Layout>
        <div className="font-mono py-12 px-12 grid bg-gray-100 md:grid-cols-4 md:grid-rows-5 grid-cols-1 gap-4">
          <div className="text-sm text-primary  md:row-start-1 md:row-span-5 flex flex-col space-y-4">
            <div className="bg-white p-6 shadow-md flex flex-col items-center space-y-4">
              <div className="text-center flex flex-col items-center w-full">
                <img
                  src="http://tinygraphs.com/labs/isogrids/hexa16/TNB Crow?theme=seascape&numcolors=4&size=220&fmt=svg"
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
              <Button fill>Wallet</Button>
              <Button fill type={'secondary'}>
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
          <div className=" md:row-start-1 md:row-span-1 md:col-start-2  md:col-span-3 sm:grid sm:grid-cols-3 flex flex-col gap-2 ">
            <Card title="200,000" subtitle="Bought" />
            <Card title="80,000" subtitle="Sold" />
            <Card title="$0.031" subtitle="Weighted Average" />
          </div>
          <div className="bg-white shadow-md md:row-start-2 md:row-span-4 md:col-start-2 md:col-span-3 items-center ">
            <TransactionTable trades={trades}></TransactionTable>
          </div>
        </div>
      </Layout>
    </>
  )
}
