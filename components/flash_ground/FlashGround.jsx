import React from "react";

/* Components */
import FlashCard from "@/components/FlashCards";
import { FlashSettings } from "./FlashSettings";

/* Hook */
import Hook from "./hook";

export default function FlashGround() {
  const {
    n4NoChapters,
    n5NoChapters,
    noChapters,
    kanji,
    isLoading,
    level,
    selectedLevel,
    selectedChapter,

    /* actions */
    setLevel,
    setNoChapters,
    setSelectedChapter,
    setSelectedLevel,
    shuffleNowData,
    shuffleAllData,
    fetchByChapterData,
    fetchByLevelData,
    getRandomData,
  } = Hook();

  return (
    <section className={`flex bg-light min-h-screen flex-col items-center p-4`}>
      <FlashSettings />
      {isLoading ? (
        <p>Loading</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {kanji?.map((item, index) => (
            <FlashCard key={index} item={item} />
          ))}
        </div>
      )}
    </section>
  );
}
