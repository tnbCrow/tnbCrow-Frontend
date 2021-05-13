import Head from "next/head";
import { Button } from "@components/Button";
import { Card } from "@components/Card";
import { Footer } from "@components/Footer";
import { Header } from "@components/Header";

import { Config } from "../Config";

export default function dashboard() {
  return (
    <>
      <Head>
        <title>{Config.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="py-12 px-12 grid bg-gray-100 grid-cols-4 grid-rows-5 gap-6">
        <div className="md:text-sm lg:text-base p-6 bg-white text-primary shadow-md row-start-1 row-span-5 col-start-1 col-span-1 flex flex-col space-y-4">
          <div className="text-center flex flex-col items-center w-full">
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

          <div className="h-full flex flex-col mt-2 justify-between">
            <div className="space-y-12 ">
              <div className="text-left space-y-2 flex flex-col">
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
        <div className=" row-start-1 row-span-1 col-start-2 col-span-3 grid grid-cols-3 gap-2 ">
          <Card title="200,000" subtitle="Bought" />
          <Card title="80,000" subtitle="Sold" />
          <Card title="$0.031" subtitle="Weighted Average" />
        </div>
        <div className="bg-white shadow-md p-8   row-start-2 row-span-4 col-start-2 col-span-3 items-center "></div>
      </div>
      <Footer />
    </>
  );
}
