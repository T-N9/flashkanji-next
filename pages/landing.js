import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@material-tailwind/react";
import FlashCard from "@/components/flash_card/FlashCard";
import { FlashDetailModal } from "@/components/flash_detail_modal/FlashDetailModal";

import { randomData } from "@/services/fetchers";
import KanjiStrokeViewer from "@/components/kanji_stroke_viewer/KanjiStrokeViewer";

export default function Landing() {
  const [exampleKanji, setExampleKanji] = useState([]);

  const fetchKanjiExample = async () => {
    try {
      let exampleData = await randomData(3);
      setExampleKanji(exampleData);
      console.log(exampleData);
    } catch (error) {}
  };

  useEffect(() => {
    fetchKanjiExample();
    console.log({ exampleKanji });
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-14 lg:py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-10 px-10 md:gap-16 lg:grid-cols-2">
              <div className="space-y-4">
                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  Master Kanji with{" "}
                  <span className="text-orange-600">
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
                    <Button className="bg-orange-600">Start Learning</Button>
                  </Link>
                </div>
              </div>
              <div>
                <img
                  alt="jukugo"
                  className="mx-auto shadow-md border-4 border-border_orange aspect-[1/1] overflow-hidden rounded-xl object-cover"
                  height="500"
                  src="assets/hero-2.jpg"
                  width="500"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-14 lg:py-16">
          <div className="container mx-auto space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Flashcards
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Learn with Interactive{" "}
                  <span className="text-orange-600">Flashcards</span>
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Our flashcards provide a fun and interactive way to learn and
                  review kanji. Flip the card to see the meaning, pronunciation,
                  Kunyomi and Onyomi. We also provide an all-in-one package of
                  information such as stroke order, jukugo and related
                  information for each Kanji.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid gap-1">
                <h3 className="text-lg font-bold text-orange-600">
                  Interactive Learning
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Flip the card to learn the meaning, pronunciation, and example
                  sentences.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold text-orange-600">
                  Track Your Progress
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Mark cards as "learned" or "need more practice" to track your
                  progress.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold text-orange-600">
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
              <div className="mx-auto grid items-start gap-4 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-3xl lg:grid-cols-3 grid-cols-2">
                {exampleKanji?.map((kanji, index) => {
                  return <FlashCard key={index} item={kanji} />;
                })}
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-14 lg:py-16 bg-orange-50 dark:bg-gray-800">
          <div className="container mx-auto grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                Orders
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Understand{" "}
                <span className="text-orange-600">Stroke Orders</span>
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
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-10 px-10 md:gap-16 lg:grid-cols-2">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Jukugo
                </div>
                <h2 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  <span className="text-orange-600">Jukugo Mastery</span>:
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
                    <Button className="bg-orange-600">Start Learning</Button>
                  </Link>
                </div>
              </div>
              <div>
                <img
                  alt="jukugo"
                  className="mx-auto shadow-md border-4 border-border_orange aspect-[1/1] overflow-hidden rounded-xl object-cover"
                  height="500"
                  src="assets/hero-2.jpg"
                  width="500"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full bg-orange-50 py-12 md:py-14 lg:py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex gap-10 px-10 md:gap-16 flex-col-reverse lg:flex-row">
              <div className="flex-1">
                <img
                  alt="quiz"
                  className="mx-auto shadow-md border-4 border-border_orange aspect-[1/1] overflow-hidden rounded-xl object-cover"
                  height="500"
                  src="assets/hero-3.jpg"
                  width="500"
                />
              </div>
              <div className="space-y-4 flex-1">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Quiz
                </div>
                <h2 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  <span className="text-orange-600">Quiz Quest</span>: Test Your
                  Kanji Knowledge!
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Challenge yourself with our interactive quizzes. Reinforce
                  Kanji skills, enhance recall, and track your progress in an
                  engaging, fun-filled learning experience! 🀄🤔
                </p>
                <div className="space-x-4">
                  <Link className="" href="/quiz">
                    <Button className="bg-orange-600">Start Quiz</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-14 lg:py-16 bg-gray-100 dark:bg-gray-800">
          <div className="container mx-auto grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Contribute to{" "}
                <span className="text-orange-600">FlashKanji</span>
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
                    Explore and contribute to our GitHub repositories: Check out
                    our projects that fuels this Kanji learning website
                  </h2>
                  <a
                    href="https://github.com/T-N9/flashkanji-next"
                    target="_blank"
                  >
                    <Button color="orange" variant="outlined" size="sm">
                      FlashKanji NextJS
                    </Button>
                  </a>

                  <a
                    href="https://github.com/T-N9/flashkanji-php"
                    target="_blank"
                  >
                    <Button color="orange" variant="outlined" size="sm">
                      FlashKanji PHP API
                    </Button>
                  </a>
                </div>
                <div className="mx-auto flex flex-col gap-3 w-full p-4 sm:p-8">
                  <p>
                    We extend our gratitude to the following projects and APIs
                    that enhance your learning experience:
                  </p>
                  <a href="https://github.com/KanjiVG/kanjivg" target="_blank">
                    <Button color="orange" variant="outlined" size="sm">
                      Kanjivg
                    </Button>
                  </a>

                  <a
                    href="https://github.com/onlyskin/kanjiapi.dev"
                    target="_blank"
                  >
                    <Button color="orange" variant="outlined" size="sm">
                      Kanjiapi.dev
                    </Button>
                  </a>
                </div>
                <div className="mx-auto flex flex-col gap-3 w-full p-4 sm:p-8">
                  <p className="">
                    Together, let's build a community dedicated to making Kanji
                    learning accessible and enjoyable for everyone! 🀄🌐
                  </p>
                  <a href="mailto:tenyainmoelwin@gmail.com" target="_blank">
                    <Button color="orange" variant="outlined" size="sm">
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
  );
}
