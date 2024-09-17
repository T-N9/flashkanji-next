import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { useState, useEffect } from "react";
import Button from "@/components/ui/button/Button";
import FlashCard from "@/components/flash_card/FlashCard";
import { FlashDetailModal } from "@/components/flash_detail_modal/FlashDetailModal";
import { randomData } from "@/services/fetchers";
import KanjiStrokeViewer from "@/components/kanji_stroke_viewer/KanjiStrokeViewer";

export default function Landing() {
  const [exampleKanji, setExampleKanji] = useState([]);

  const fetchKanjiExample = async () => {
    try {
      let exampleData = await randomData(4);
      setExampleKanji(exampleData);
      // console.log(exampleData);
    } catch (error) {}
  };

  useEffect(() => {
    fetchKanjiExample();
    // console.log({ exampleKanji });
  }, []);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#E19A63" />
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
        <title>
          FlashKanji - Learn Japanese Kanji with Interactive Flashcards
        </title>
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
        <meta
          property="twitter:url"
          content="https://www.flashkanji.tenyain.com/"
        />
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
        <title>
          FlashKanji - Learn Japanese Kanji with Interactive Flashcards
        </title>
      </Head>
      <div className="flex flex-col min-h-screen">
        <main className="flex-1">
          <section className="w-full py-12 md:py-14 lg:py-16">
            <div className="max-w-[1280px] mx-auto px-4 md:px-6">
              <div className="grid gap-10 md:gap-16 lg:grid-cols-2">
                <div className="space-y-4 flex flex-col justify-center">
                  <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                    Master Kanji with{" "}
                    <span className="text-orange-500">
                      <span className="outlined_title tracking-wide">
                        FlashKanji
                      </span>
                      <br /> フラッシュ漢字
                    </span>
                  </h1>
                  <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                    Discover Kanji interactively at FlashKanji. Use flashcards,
                    learn Jukugo, and master stroke order. Start your Japanese
                    adventure now! 🀄🖌️
                  </p>
                  <div className="space-x-4">
                    <Link className="" href="/kanji">
                      <Button >Start Learning</Button>
                    </Link>
                  </div>
                </div>
                <div className="flex justify-center lg:justify-end">
                  <Image
                    alt="jukugo"
                    className=" shadow-md image-card border-4 border-border_orange aspect-[1/1] overflow-hidden rounded-xl object-cover"
                    height="500"
                    src="/assets/hero-1.jpg"
                    width="500"
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-14 lg:py-16">
            <div className="max-w-[1280px] mx-auto space-y-12 px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                    Flashcards
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Learn with Interactive{" "}
                    <span className="text-orange-500">Flashcards</span>
                  </h2>
                  <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Our flashcards provide a fun and interactive way to learn
                    and review kanji. Flip the card to see the meaning,
                    pronunciation, Kunyomi and Onyomi. We also provide an
                    all-in-one package of information such as stroke order,
                    jukugo and related information for each Kanji.
                  </p>
                </div>
              </div>
              <div className="mx-auto text-center grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
                <div className="grid gap-1">
                  <h3 className="text-lg font-bold text-orange-500">
                    Interactive Learning
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Flip the card to learn the meaning, pronunciation, and
                    example sentences.
                  </p>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-lg font-bold text-orange-500">
                    Track Your Progress
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Mark cards as &quot;learned&quot; or &quot;need more practice&quot; to track
                    your progress.
                  </p>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-lg font-bold text-orange-500">
                    Personalized Learning
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Customize your learning by selecting the kanji you want to
                    focus on.
                  </p>
                </div>
              </div>

              <div>
                <div className="table mb-4 mx-auto rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Example kanjis
                </div>
                <div className="mx-auto grid items-start gap-4 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-4 grid-cols-2">
                  {exampleKanji?.map((kanji, index) => {
                    return <FlashCard key={index} item={kanji}/>;
                  })}
                </div>
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-14 lg:py-16 bg-orange-50 dark:bg-gray-800">
            <div className="max-w-[1280px] mx-auto grid items-center justify-center gap-4 px-4 text-center md:px-6">
              <div className="space-y-3">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Orders
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Understand{" "}
                  <span className="text-orange-500">Stroke Orders</span>
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Learn the correct stroke order for each kanji in one touch
                </p>
              </div>
              <div className="mx-auto w-full max-w-sm space-y-2">
                <KanjiStrokeViewer kanji={"普"} isSearch={true} />
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-14 lg:py-16">
            <div className="max-w-[1280px] mx-auto px-4 md:px-6">
              <div className="grid gap-10 md:gap-16 lg:grid-cols-2">
                <div className="space-y-4">
                  <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                    Jukugo
                  </div>
                  <h2 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                    <span className="text-orange-500">Jukugo Mastery</span>:
                    Explore, Learn, Excel!
                  </h2>
                  <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                    Explore the rich world of Jukugo effortlessly with our
                    Flashcards feature. Master compound Kanji words in a snap,
                    making your Japanese language journey both enjoyable and
                    efficient. 🀄🎓
                  </p>
                  <div className="space-x-4">
                    <Link className="" href="/jukugo">
                      <Button>Start Learning</Button>
                    </Link>
                  </div>
                </div>
                <div className="flex justify-center lg:justify-end">
                  <Image
                    alt="jukugo"
                    className="shadow-md image-card border-4 border-border_orange aspect-[1/1] overflow-hidden rounded-xl object-cover"
                    height="500"
                    src="/assets/hero-2.jpg"
                    width="500"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="w-full bg-orange-50 py-12 md:py-14 lg:py-16">
            <div className="max-w-[1280px] mx-auto px-4 md:px-6">
              <div className="flex gap-10 md:gap-16 flex-col-reverse lg:flex-row">
                <div className="flex flex-1 justify-center lg:justify-start">
                  <Image
                    alt="quiz"
                    className=" shadow-md image-card border-4 border-border_orange aspect-[1/1] overflow-hidden rounded-xl object-cover"
                    height="500"
                    src="/assets/hero-3.jpg"
                    width="500"
                  />
                </div>
                <div className="space-y-4 flex-1">
                  <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                    Quiz
                  </div>
                  <h2 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                    <span className="text-orange-500">Quiz Quest</span>: Test
                    Your Kanji Knowledge!
                  </h2>
                  <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                    Challenge yourself with our interactive quizzes. Reinforce
                    Kanji skills, enhance recall, and track your progress in an
                    engaging, fun-filled learning experience! 🀄🤔
                  </p>
                  <div className="space-x-4">
                    <Link className="" href="/quiz">
                      <Button >Start Quiz</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-14 lg:py-16 dark:bg-gray-800">
            <div className="max-w-[1280px] mx-auto grid items-center justify-center gap-4 px-4 text-center md:px-6">
              <div className="space-y-3">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Contribute to{" "}
                  <span className="text-orange-500">FlashKanji</span>
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Join us in shaping the future of Kanji learning! Our project
                  thrives on collaboration and open-source contributions.
                </p>
              </div>
              <div className="divide-y rounded-lg border-2">
                <div className="grid w-full grid-cols-1 items-stretch justify-center divide-x md:grid-cols-2 lg:grid-cols-3">
                  <div className="mx-auto flex flex-col gap-3 w-full p-4 sm:p-8">
                    <h2>
                      Explore and contribute to our GitHub repositories: Check
                      out our projects that fuels this Kanji learning website
                    </h2>
                    <a
                      href="https://github.com/T-N9/flashkanji-next"
                      target="_blank"
                    >
                      <Button color="primary" variant="bordered">
                        FlashKanji NextJS
                      </Button>
                    </a>

                    <a
                      href="https://github.com/T-N9/flashkanji-php"
                      target="_blank"
                    >
                      <Button color="primary" variant="bordered">
                        FlashKanji PHP API
                      </Button>
                    </a>
                  </div>
                  <div className="mx-auto flex flex-col gap-3 w-full p-4 sm:p-8">
                    <p>
                      We extend our gratitude to the following projects and APIs
                      that enhance your learning experience:
                    </p>
                    <a
                      href="https://github.com/KanjiVG/kanjivg"
                      target="_blank"
                    >
                      <Button color="primary" variant="bordered">
                        Kanjivg
                      </Button>
                    </a>

                    <a
                      href="https://github.com/onlyskin/kanjiapi.dev"
                      target="_blank"
                    >
                      <Button color="primary" variant="bordered">
                        Kanjiapi.dev
                      </Button>
                    </a>
                    <a
                      href="https://github.com/jcsirot/kanji.gif"
                      target="_blank"
                    >
                      <Button color="primary" variant="bordered">
                        KanjiGIF
                      </Button>
                    </a>
                  </div>
                  <div className="mx-auto flex flex-col gap-3 w-full p-4 sm:p-8">
                    <p className="">
                      Together, let&apos;s build a community dedicated to making
                      Kanji learning accessible and enjoyable for everyone! 🀄🌐
                    </p>
                    <a href="mailto:tenyainmoelwin@gmail.com" target="_blank">
                      <Button color="primary" variant="bordered">
                        Contact Us
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <FlashDetailModal />
      </div>
    </>
  );
}
