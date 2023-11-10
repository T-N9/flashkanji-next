import React from "react";

/* Icons */
import { BiShuffle } from "react-icons/bi";
import { GiCardRandom } from "react-icons/gi";

import { Select, Option, Button } from "@material-tailwind/react";

/* Hook */
import Hook from "./hook";

export const FlashSettings = () => {
  const {
    noChapters,
    kanji,
    level,
    selectedLevel,
    selectedChapter,
    dispatch,

    /* actions */
    setSelectedChapter,
    setSelectedLevel,
    shuffleNowData,
    shuffleAllData,
    fetchByChapterData,
    fetchByLevelData,
    getRandomData,
  } = Hook();
  return (
    <div className="mb-5 flex flex-col lg:flex-row justify-center gap-4">
      <div className="flex gap-4">
        <div className="flex w-full md:w-36 min-w-36 select-box flex-col gap-6">
          <Select
            value={selectedLevel}
            color="blue"
            size="md"
            className="bg-white"
            label="Select Level"
          >
            {[5, 4, 3, 2, 1].map((level) => (
              <Option
                key={level}
                onClick={() => {
                  fetchByLevelData(level);
                  dispatch(setSelectedLevel(`N${level}`));
                  dispatch(setSelectedChapter(""));
                }}
                value={level.toString()}
                disabled={level <= 3} // Assuming that levels 3 and above are disabled
              >
                N{level}
              </Option>
            ))}
          </Select>
        </div>
        <div className="flex w-full md:w-36 min-w-36 select-box flex-col gap-6">
          <Select
            value={selectedChapter}
            color="blue"
            size="md"
            className="bg-white"
            label="Select Chapter"
          >
            {noChapters?.map((item) => {
              return (
                <Option
                  onClick={() => {
                    fetchByChapterData(item, level);
                    dispatch(setSelectedChapter(item));
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
      </div>
      <div className="flex-1 flex gap-2">
        <Button
          onClick={() => shuffleNowData(kanji, kanji.length)}
          variant="outlined"
          className="outline-info border-info text-info rounded-full"
          title="Shuffle"
        >
          <BiShuffle size={20} />
        </Button>

        <Button
          onClick={() => shuffleAllData()}
          // variant="gradient"
          className="bg-info rounded-full"
        >
          Shuffle All
        </Button>

        <Button
          onClick={() => {
            getRandomData(10);
            dispatch(setSelectedChapter(""));
            dispatch(setSelectedLevel(""));
          }}
          variant="gradient"
          className="bg-gradient-radial rounded-full"
          title="Randomize"
        >
          <GiCardRandom size={20} />
        </Button>
      </div>
    </div>
  );
};
