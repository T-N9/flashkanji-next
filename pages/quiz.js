import Head from "next/head";

/* Components */
import { Quiz_Ground } from "@/components/quiz_ground/Quiz_Ground";

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#8AB17D" />
        <meta
          name="title"
          content="FlashKanji - Learn Japanese Kanji with Interactive Flashcards"
        />
        <meta
          name="description"
          content="Master Japanese Kanji efficiently with FlashKanji's interactive flashcards. Boost your memorization skills and become proficient in reading and writing Kanji characters."
        />
        <meta
          name="keywords"
          content="learn Kanji, Japanese characters, FlashKanji, memorization, interactive flashcards, reading Kanji"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charSet=utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content="Te Nyain Moe Lwin" />
        <meta property="og:locale" content="en-US" />

        {/* <!-- Primary Meta Tags --> */}
        <title>FlashKanji - Learn Japanese Kanji with Interactive Flashcards</title>
        <meta
          name="title"
          content="FlashKanji - Learn Japanese Kanji with Interactive Flashcards"
        />
        <meta
          name="description"
          content="Master Japanese Kanji efficiently with FlashKanji's interactive flashcards. Boost your memorization skills and become proficient in reading and writing Kanji characters."
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.flashkanji.tenyain.com/" />
        <meta
          property="og:title"
          content="FlashKanji - Learn Japanese Kanji with Interactive Flashcards"
        />
        <meta
          property="og:description"
          content="Master Japanese Kanji efficiently with FlashKanji's interactive flashcards. Boost your memorization skills and become proficient in reading and writing Kanji characters."
        />
        <meta property="og:image" content="meta.png" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.flashkanji.tenyain.com/" />
        <meta
          property="twitter:title"
          content="FlashKanji - Learn Japanese Kanji with Interactive Flashcards"
        />
        <meta
          property="twitter:description"
          content="Hello there, I am Te Nyain Moe Lwin,
          a front-end developer who delivers fast and reliable websites. I care about your business values and targeted customers to meet your golden goals for tomorrow."
        />
        <meta property="twitter:image" content="meta.png" />
        <title>FlashKanji - Learn Japanese Kanji with Interactive Flashcards</title>
      </Head>
      <Quiz_Ground/>
    </>
  );
}
