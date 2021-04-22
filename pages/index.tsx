import Head from "next/head"
import styles from "../styles/Home.module.css"

import { Config } from "../Config"

import { Card } from "@components/Card"
import { Footer } from "@components/Footer"
import { Header } from "@components/Header"

export default function Home() {
  return (
    <div>
      <Head>
        <title>{Config.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className={styles.container}>
        <main className={styles.main}>
          {/* Buy/Sell TNB */}
          <section>
            <div>
              <p>Buy and Sell TNB in minutes</p>
              <p>Online using tnbCrow</p>
            </div>
            <div>
              <p>
                With tnbCrow you can buy and sell TNB safely without the risk of
                chargebacks. Truly secure payments.
              </p>
            </div>

            <div>I'm Selling</div>
            <div>Transaction Type</div>
            <div>Get Started Now</div>
          </section>

          {/* Coins / Weighted Average Rate / Total Trades */}
          {/* <section /> */}

          {/* Recent Trades */}

          {/* How it Works */}

          {/* Why TNB? */}

          {/* Start Trading Now */}

          <div className={styles.grid}>
            <Card
              link="https://nextjs.org/docs"
              title="Documentation &rarr;"
              description="Find in-depth information about Next.js features and API."
            />

            <Card
              link="https://nextjs.org/learn"
              title="Learn &rarr;"
              description="Learn about Next.js in an interactive course with quizzes!"
            />

            <Card
              link="https://github.com/vercel/next.js/tree/master/examples"
              title="Examples &rarr;"
              description="Discover and deploy boilerplate example Next.js projects."
            />

            <Card
              link="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              title="Deploy &rarr;"
              description="Instantly deploy your Next.js site to a public URL with Vercel."
            />
          </div>
        </main>

        <Footer />
      </div>
    </div>
  )
}
