import { type NextPage } from "next";
import Head from "next/head";
import { Layout } from "~/Components/Components";
import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";
import Button from "~/Components/Buttons/Button";
const Help: NextPage = () => {
 
  return (
    <>
      <Head>
        <title>Help - Streamify </title>
        <meta
          name="description"
          content="Official Streamify Help Center where you can find tips and tutorials on using Streamify and other answers to frequently asked questions."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
    </>
  );
};

export default Help;
