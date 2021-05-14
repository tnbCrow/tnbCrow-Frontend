import { Button } from "@components/Button";
import { Card } from "@components/Card";
import { Layout } from "@components/Layout";
import { useEffect, useState } from "react";

export interface TradeHistory {
  date: string;
  id: string;
  role: "BUYER" | "SELLER";
  userId: string;
  rate: number;
  amount: number;
  payment: "string";
}

enum Role {
  buyer = "buyer",
  seller = "seller",
}

export const TransactionTable = ({ trades = [], className = "" }) => {
  const [page, setPage] = useState(1);

  return (
    <div
      className={`text-primary flex flex-col h-full justify-between ${className}}`}
    >
      <div>
        <div className="px-6 py-4 flex justify-between items-center ">
          <h3>Transaction History</h3>
          <input
            type="text"
            placeholder="trans id, user, rate, amount, role"
            className="rounded-full border border-solid py-1 px-3 md:w-60 lg:w-1/2 xl:w-2/5 text-sm font-normal outline-none"
          />
        </div>

        <div className="overflow-x-auto ">
          <div className="align-middle inline-block min-w-full ">
            <div className="overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-200 ">
                  <tr className="text-left border-t border-b border-gray-300">
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
                  {trades.map((trade, tradeIdx) => (
                    <tr
                      key={`trade-`}
                      className={` border-t border-b text-left bg-white `}
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
                            ? "text-green-500"
                            : "text-red-500"
                        } `}
                      >
                        {trade.role}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm  text-link ">
                        {trade.user}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm  flex items-center gap-1">
                        <span className="rounded-full bg-red-500 w-2 h-2" />{" "}
                        {`$${trade.rate / 10000}`}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm  ">
                        {trade.amount.toLocaleString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm  uppercase ">
                        {trade.paymentIn}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t px-6 py-4 flex justify-between items-center text-sm">
        <span>
          Showing <b>10</b> of <b>{trades.length}</b>
        </span>
        <span>
          Previous <b>10</b> of <b>Next</b>
        </span>
      </div>
    </div>
  );
};

export default function dashboard() {
  const trades = [
    {
      createdAt: new Date().toISOString(),
      transactionId: "tnbesc900023840-2i",
      role: Role.buyer,
      user: "Mr Sky",
      agent: "Player-X",
      rate: 0.02,
      amount: 250000,
      paymentIn: "btc",
    },
    {
      createdAt: new Date().toISOString(),
      transactionId: "tnbesc900023840-2i",
      role: Role.seller,
      user: "Mr Sky",
      agent: "Player-X",
      rate: 0.02,
      amount: 250000,
      paymentIn: "btc",
    },
    {
      createdAt: new Date().toISOString(),
      transactionId: "tnbesc900023840-2i",
      role: Role.seller,
      user: "Mr Sky",
      agent: "Player-X",
      rate: 0.02,
      amount: 250000,
      paymentIn: "btc",
    },
    {
      createdAt: new Date().toISOString(),
      transactionId: "tnbesc900023840-2i",
      role: Role.buyer,
      user: "Mr Sky",
      agent: "Player-X",
      rate: 0.02,
      amount: 250000,
      paymentIn: "btc",
    },
    {
      createdAt: new Date().toISOString(),
      transactionId: "tnbesc900023840-2i",
      role: Role.buyer,
      user: "Mr Sky",
      agent: "Player-X",
      rate: 0.02,
      amount: 250000,
      paymentIn: "btc",
    },
    {
      createdAt: new Date().toISOString(),
      transactionId: "tnbesc900023840-2i",
      role: Role.buyer,
      user: "Mr Sky",
      agent: "Player-X",
      rate: 0.02,
      amount: 250000,
      paymentIn: "btc",
    },
    {
      createdAt: new Date().toISOString(),
      transactionId: "tnbesc900023840-2i",
      role: Role.buyer,
      user: "Mr Sky",
      agent: "Player-X",
      rate: 0.02,
      amount: 250000,
      paymentIn: "btc",
    },
    {
      createdAt: new Date().toISOString(),
      transactionId: "tnbesc900023840-2i",
      role: Role.buyer,
      user: "Mr Sky",
      agent: "Player-X",
      rate: 0.02,
      amount: 250000,
      paymentIn: "btc",
    },
    {
      createdAt: new Date().toISOString(),
      transactionId: "tnbesc900023840-2i",
      role: Role.buyer,
      user: "Mr Sky",
      agent: "Player-X",
      rate: 0.02,
      amount: 250000,
      paymentIn: "btc",
    },
    {
      createdAt: new Date().toISOString(),
      transactionId: "tnbesc900023840-2i",
      role: Role.buyer,
      user: "Mr Sky",
      agent: "Player-X",
      rate: 0.02,
      amount: 250000,
      paymentIn: "btc",
    },
  ];

  return (
    <>
      <Layout>
        <div className="font-mono py-12 px-12 grid bg-gray-100 md:grid-cols-4 md:grid-rows-5 grid-cols-1 gap-4">
          <div className="text-sm p-6 bg-white text-primary shadow-md md:row-start-1 md:row-span-5 flex flex-col space-y-4">
            <div className="text-center flex flex-col  items-center w-full">
              <img
                src="http://tinygraphs.com/labs/isogrids/hexa16/TNB Crow?theme=seascape&numcolors=4&size=220&fmt=svg"
                alt="Avatar"
                className="rounded-full border-primary border-2 p-1 w-20"
              />
              <span>
                <b>Bill Lakes</b>
              </span>
            </div>
            <span className="text-center">
              Trustworthy, fast, reliable. no scam.
            </span>
            <Button>Wallet</Button>

            <div className="h-full flex flex-col justify-between">
              <div className="md:space-y-8 md:mt-8 flex md:flex-col justify-around flex-row mb-4">
                <div className="text-left space-y-1 flex flex-col m sm:w-auto w-28">
                  <h4>
                    <b>Verification</b>
                  </h4>
                  <span>
                    Phone number <b>verified</b>
                  </span>
                  <span>
                    Email <b>Verified</b>
                  </span>
                </div>

                <div className="text-left space-y-2 flex flex-col">
                  <h4>
                    <b>Info</b>
                  </h4>
                  <span>
                    Endorsed by <b>50 people</b>
                  </span>
                  <span>
                    <b>200</b> Trades
                  </span>
                  <span>
                    Trade Volume: <b>$10,000</b>
                  </span>
                  <span>
                    Blocked by <b>10 people</b>
                  </span>
                  <span>
                    Has blocked <b>4 people</b>
                  </span>
                  <span>
                    Joined <b>10 months</b> ago
                  </span>
                </div>
              </div>

              <Button type={"secondary"}>Edit Profile</Button>
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
  );
}
