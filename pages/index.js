import { useState, useEffect } from "react";
import FlashCard from "@/components/FlashCards";

import {
  randomData,
  fetchAll,
  fetchByChapter,
  shuffleAll,
} from "@/services/fetchers";

import { Select, Option, Button } from "@material-tailwind/react";

export default function Home() {
  const [kanji, setKanji] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const n5NoChapters = Array.from({ length: 11 }, (_, index) => index + 1);

  const fetchAllData = async () => {
    setIsLoading(true);
    try {
      let allData = await fetchAll();
      setKanji(allData);
      setIsLoading(false);
    } catch (error) {
      // Handle errors if needed
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchAllData();
  }, []);

  const shuffleNowData = async (data, count) => {
    const shuffledKanji = data.slice();
    for (let i = shuffledKanji.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledKanji[i], shuffledKanji[j]] = [
        shuffledKanji[j],
        shuffledKanji[i],
      ];
    }
    setKanji(shuffledKanji.slice(0, count));
  };

  const shuffleAllData = async () => {
    setIsLoading(true);
    try {
      let allData = await shuffleAll();
      setKanji(allData);
      setIsLoading(false);
    } catch (error) {
      // Handle errors if needed
      setIsLoading(false);
    }
  };

  const fetchByChapterData = async (chapter) => {
    setIsLoading(true);
    try {
      if (chapter > 0) {
        let allData = await fetchByChapter(chapter);
        setKanji(allData);
        setIsLoading(false);
      } else {
        fetchAllData();
        setIsLoading(false);
      }
    } catch (error) {
      // Handle errors if needed
    }
  };

  const getRandomData = async (count) => {
    setIsLoading(true);
    try {
      let allData = await randomData(count);
      setKanji(allData);
      setIsLoading(false);
    } catch (error) {
      // Handle errors if needed
      setIsLoading(false);
    }
  };

  return (
    <section className={`flex bg-light min-h-screen flex-col items-center p-4`}>
      <div className="mb-5 flex flex-col lg:flex-row justify-center gap-4">
        <div className="flex w-full md:w-36 min-w-36 select-box flex-col gap-6">
          <Select size="md" className="bg-white" label="Select Chapter">
            {n5NoChapters.map((item) => {
              return (
                <Option
                  onClick={() => {
                    fetchByChapterData(item);
                  }}
                  key={item}
                  value={item.toString()}
                >
                  {item}
                </Option>
              );
            })}
          </Select>
        </div>
        <div className="flex-1 flex gap-2">
          <Button
            onClick={() => shuffleNowData(kanji, kanji.length)}
            variant="outlined"
            className="outline-info border-info text-info rounded-full"
          >
            Shuffle
          </Button>

          <Button
            onClick={() => shuffleAllData(kanjiData, kanjiData?.length)}
            // variant="gradient"
            className="bg-info rounded-full"
          >
            Shuffle All
          </Button>

          <Button
            onClick={() => getRandomData(10)}
            variant="gradient"
            className="bg-gradient-radial rounded-full"
          >
            Randomize
          </Button>
        </div>
      </div>
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
