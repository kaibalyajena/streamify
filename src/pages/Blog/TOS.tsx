import { type NextPage } from "next";
import Head from "next/head";
import { Content, Layout } from "~/Components/Components";
const TOS: NextPage = () => {
  

  return (
    <>
      <Head>
        <title>Terms and conditions - Streamify</title>
        <meta
          name="description"
          content="By accessing our website, you are agreeing to be bound by these
              terms of service, and agree that you are responsible for
              compliance with any applicable local laws."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout closeSidebar={true}>
        <div className="mt-4">
          <div className="mx-auto max-w-2xl text-center ">
            <p className="text-base font-semibold leading-7 text-primary-600">
              Current as of{" "}
              {new Date().toLocaleDateString("en-US", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}
            </p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Terms and conditions{" "}
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              By accessing our website, you are agreeing to be bound by these
              terms of service, and agree that you are responsible for
              compliance with any applicable local laws.
            </p>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default TOS;
