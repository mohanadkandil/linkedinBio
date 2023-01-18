import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
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

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(bio)
      .then(
        toast("Bio copied to clipboard", {
          icon: "✂️",
        })
      )
      .catch((err: string) => {
        toast(`Error copying bio to clipboard ${err}`, { icon: "🚨" });
      });
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
        <div className="my-10 text-center">
          <h1 className="text-5xl font-bold text-white">LinkedIn BioCraft</h1>
          <p className="mt-2 text-xl font-medium text-white/60">
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
          <Toaster
            position="top-center"
            reverseOrder={false}
            toastOptions={{ duration: 2000 }}
          />
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
              <div
                className="cursor-copy rounded-xl bg-white/10 p-5 text-white"
                onClick={copyToClipboard}
              >
                <p>{bio}</p>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
