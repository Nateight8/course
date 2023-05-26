import { type NextPage } from "next";
import Head from "next/head";

import Featured from "~/components/featured/Featured";
import Professionals from "~/components/professionals/Professionals";
import Ideas from "~/components/ideas/Ideas";

const Home: NextPage = () => {
  // const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Dev By Nate | Transify Initiative</title>
        <meta name="description " content="" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main className="w-full bg-background">
        <Featured />
        <Ideas />
        <Professionals />
      </main>
    </>
  );
};

export default Home;
