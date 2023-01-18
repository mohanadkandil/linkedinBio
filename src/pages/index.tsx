import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const Home: NextPage = () => {
  const [bio, setBio] = useState("");
  const [text, setText] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const generateBio = async (): Promise<void> => {
    setIsGenerating(true);
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    });

    const data = await response.json();
    const { output } = data;
    setBio(output.text);
    setIsGenerating(false);
  };
  return (
    <>
      <Head>
        <title>LIBIO - LinkedInBIO</title>
        <meta name="description" content="Generate a LinkedIn bio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="relative flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#242628] to-[#272A2C]">
        <div className="my-10 text-center text-white">
          <h1 className="text-5xl font-bold">LinkedIn BioCraft</h1>
          <p className="mt-2 text-xl font-semibold">
            Write a small context about you, and bio crafter will generate the
            rest
          </p>
        </div>
        <div className="flex w-1/4 flex-col space-y-10">
          <textarea
            onChange={(e) => setText(e.target.value)}
            rows={4}
            className="w-full rounded-md border-gray-200 bg-[#3B3B3B] p-2 text-white shadow-sm focus:border-black focus:ring-black"
            placeholder={"e.g. jr frontend engineer."}
          ></textarea>
          <div className="flex justify-center">
            <button
              onClick={generateBio}
              className="rounded-md bg-white py-3 px-4 text-sm font-semibold hover:bg-white/90"
            >
              {isGenerating ? "Loading..." : "Generate Bio"}
            </button>
          </div>
          <div className="mt-12">
            {bio && (
              <div className="rounded-xl bg-white/10 p-5 text-white">{bio}</div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
