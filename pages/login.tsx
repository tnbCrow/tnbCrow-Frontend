import Head from "next/head"
import { Footer } from "@components/Footer"
import { Header } from "@components/Header"

import { Config } from "../Config"

export default function Login() {
  return (
    <>
      <Head>
        <title>{Config.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div>login</div>
      <Footer />
    </>
  )
}
