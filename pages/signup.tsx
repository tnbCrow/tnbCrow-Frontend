import Head from "next/head";
import Link from "next/link";

import { FormButton, FormCard, FormInput } from "@components/FormComponents";
import { Footer } from "@components/Footer";
import { Header } from "@components/Header";

import { Config } from "../Config";

export default function Signup() {
  return (
    <>
      <Head>
        <title>{Config.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="py-36 bg-gray-100 flex justify-center items-center ">
        <FormCard>
          <dd className="text-xl">Sign Up</dd>
          <form
            action=""
            method="post"
            className="flex flex-col items-center items-center w-full space-y-4 > *"
          >
            <FormInput label="Email" name="email" type="text" required />
            <FormInput
              label="Password"
              name="password"
              type="password"
              required
            />
            <FormInput
              label="Re-Enter Password"
              name="verifyPassword"
              type="password"
              required
            />
            <FormButton type="submit">Login</FormButton>
          </form>
          <p className="text-sm text-gray-400">
            By registering you agree to tnbCrow's{" "}
            <a className="text-gray-900 hover:underline">
              Terms of Using the TnbCrow Platform
            </a>{" "}
            and <a className="text-gray-900 hover:underline">Privacy Policy</a>
          </p>
          <Link href="/login">
            <a className="text-sm text-gray-900 hover:underline">
              Already have an account? Log in
            </a>
          </Link>
        </FormCard>
      </div>
      <Footer />
    </>
  );
}
