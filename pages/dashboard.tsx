import Head from "next/head";
import { Footer } from "@components/Footer";
import { Header } from "@components/Header";
import { Card } from "@components/Card";

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
        <div className="bg-white shadow-md p-24 row-start-1 row-span-5 col-start-1 col-span-1 items-center "></div>
        <div className="h-32  row-start-1 row-span-1 col-start-2 col-span-3 flex items-center gap-4 ">
          <div className="bg-white shadow-md p-8 h-32 items-center  w-full"></div>
          <div className="bg-white shadow-md p-8 h-32 items-center  w-full"></div>
          <div className="bg-white shadow-md p-8 h-32 items-center  w-full"></div>
        </div>
        <div className="bg-white shadow-md p-8   row-start-2 row-span-4 col-start-2 col-span-3 items-center "></div>
      </div>
      <Footer />
    </>
  );
}
