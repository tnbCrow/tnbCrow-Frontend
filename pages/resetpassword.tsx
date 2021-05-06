import Head from "next/head";
import { FormButton, FormCard, FormInput } from "@components/FormComponents";
import { Footer } from "@components/Footer";
import { Header } from "@components/Header";

import { Config } from "../Config";

export default function ResetPassword() {
  return (
    <>
      <Head>
        <title>{Config.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="py-52 bg-gray-100 flex justify-center items-center ">
        <FormCard>
          <dd className="text-xl">Reset Password</dd>
          <form
            action=""
            method="post"
            className="flex flex-col items-center w-full space-y-4 > *"
          >
            <FormInput
              label="Email Address"
              name="email"
              type="text"
              required
            />
            <FormButton type="submit"> Next</FormButton>
          </form>
        </FormCard>
      </div>
      <Footer />
    </>
  );
}
