import React from "react";

/* Components */
import {
  Select,
  Option,
  Button,
  Popover,
  PopoverHandler,
  PopoverContent,
  Input,
} from "@material-tailwind/react";

/* Hook */
import Hook from "./hook";

export const Quiz_Ground = () => {
  const {
    kanji,
    level,
    selectedChapter,
    selectedLevel,
    isLoading,
    selectedMultiChapters,
    noChapters,
    dispatch,
    /* action */
    setSelectedChapter,
    setSelectedLevel,
    setStartLoading,
    setStopLoading,
    setLevel,
    setKanji,
    setSelectedMultiChapters,
    handleQuizStart,
  } = Hook();
  return (
    <section className="relative flex bg-light min-h-screen flex-col items-center p-4">
      <h1 className="text-4xl font-bold text-info">
        Let's practice with FlashQuiz!
      </h1>
      <p className="">今、漢字を練習しましょう。</p>

      <div className="mt-5">
        <div className="flex gap-4 w-full md:w-fit">
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
                    dispatch(setSelectedLevel(`N${level}`));
                    dispatch(setSelectedMultiChapters([]));
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
                      dispatch(setSelectedChapter(item));
                      dispatch(setSelectedMultiChapters([]));
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
        <Button
          onClick={() => handleQuizStart()}
          className="mt-5 mx-auto bg-gradient-radial text-2xl table"
          size="lg"
        >
          Start
        </Button>
      </div>
    </section>
  );
};
