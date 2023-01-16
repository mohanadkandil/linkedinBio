import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>LIBIO - LinkedInBIO</title>
        <meta name="description" content="Generate a LinkedIn bio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#e0eafc] to-[#cfdef3]">
        <div className="w-1/4">
          <textarea
            rows={4}
            className="my-5 w-full rounded-md border-gray-200 p-2 shadow-sm focus:border-black focus:ring-black"
            placeholder={"e.g. a jr frontend engineer."}
          ></textarea>
          <button
            onClick={() => null}
            className="rounded-md bg-black py-3 px-4 text-sm font-semibold hover:bg-black/80"
          >
            Generate
          </button>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
