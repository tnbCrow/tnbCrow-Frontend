import Head from "next/head"
import { Header } from "@components/Header"
import { Footer } from "@components/Footer"

import { Config } from "Config"

export const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>{Config.title}</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto"
        />
      </Head>

      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
