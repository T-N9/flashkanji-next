import React from "react";

/* Components */
import { Select, SelectItem } from "@nextui-org/react";
import Button from "../ui/button/Button";
import { QuizItem } from "../quiz_item/QuizItem";

/* Hook */
import useContainer from "./useContainer";

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
    quizData,
    isQuizReady,
    answeredCount,
    currentMark,
    isQuizSubmit,
    selectedMode,
    /* action */
    setSelectedChapter,
    setSelectedLevel,
    setStartLoading,
    setStopLoading,
    setLevel,
    setKanji,
    setSelectedMultiChapters,
    handleChapterData,
    handleQuizStart,
    handleQuizSubmit,
    handleQuizQuit,
    setQuizMode,
  } = useContainer();
  return (
    <section className="relative flex  min-h-screen flex-col items-center p-4">
      {!isQuizReady ? (
        <>
          <h1 className="text-4xl font-english text-center font-bold text-info">
            Let&apos;s practice with FlashQuiz!
          </h1>
          <p className="">今、漢字を練習しましょう。</p>
          <div className="mt-5 w-full flex flex-col justify-center items-center">
            <div className="flex gap-4 w-full md:w-fit">
              <div className="flex w-full md:w-36 min-w-36 select-box flex-col gap-6">
                <Select
                  items={[5, 4, 3, 2, 1]}
                  color="default"
                  size="sm"
                  className="drop-shadow"
                  label="Select Level"
                  defaultSelectedKeys={selectedLevel}
                  onSelectionChange={() => {
                    dispatch(setSelectedChapter(1));
                  }}
                >
                  {[5, 4, 3, 2, 1].map((level) => (
                    <SelectItem
                      key={level}
                      onClick={() => {
                        handleChapterData(level);
                        dispatch(setSelectedLevel(`N${level}`));
                        dispatch(setSelectedMultiChapters([]));
                        dispatch(setSelectedChapter(""));
                      }}
                      value={"N" + level.toString()}
                      isDisabled={level <= 2} // Assuming that levels 3 and above are disabled
                      isSelected={"N" + level === selectedLevel}
                    >
                      {"N" + level.toString()}
                    </SelectItem>
                  ))}
                </Select>
              </div>
              <div className="flex w-full md:w-36 min-w-36 select-box flex-col gap-6">
                <Select
                  items={noChapters}
                  color="default"
                  size="sm"
                  className="drop-shadow"
                  label="Select Chapter"
                  defaultSelectedKeys={[
                    noChapters[selectedChapter - 1]?.toString(),
                  ]}
                  selectedKeys={[selectedChapter.toString()]}
                >
                  {noChapters.map((item) => (
                    <SelectItem
                      key={item}
                      onClick={() => {
                        dispatch(setSelectedChapter(item));
                        dispatch(setSelectedMultiChapters([]));
                      }}
                      value={item.toString()}
                      isSelected={
                        item.toString() === selectedChapter.toString()
                      }
                      textValue={item.toString()}
                    >
                      {item}
                    </SelectItem>
                  ))}
                </Select>
              </div>
              <div className="flex w-full md:w-36 min-w-36 select-box flex-col gap-6">

                <Select
                  items={[
                    {
                      id: 1,
                      name: "Onyomi",
                    },
                    {
                      id: 2,
                      name: "Kunyomi",
                    },
                    {
                      id: 3,
                      name: "Meaning",
                    },
                  ]}
                  color="default"
                  size="sm"
                  className="drop-shadow"
                  label="Select Mode"
                  defaultSelectedKeys={selectedLevel}
                  onSelectionChange={() => {
                    dispatch(setSelectedChapter(1));
                  }}
                >
                  {[
                    {
                      id: 1,
                      name: "Onyomi",
                    },
                    {
                      id: 2,
                      name: "Kunyomi",
                    },
                    {
                      id: 3,
                      name: "Meaning",
                    },
                  ].map((item) => (
                    <SelectItem
                      key={item.id}
                      onClick={() => {
                        dispatch(setQuizMode(item.id));
                      }}
                      value={item.id.toString()}
                    >
                      {item.name}
                    </SelectItem>
                  ))}
                </Select>
              </div>
            </div>
            <Button
              onClick={() => handleQuizStart()}
              className="mt-5 mx-auto bg-gradient-radial text-2xl table"
              size="lg"
              disabled={isLoading || selectedLevel === ""}
            >
              Start
            </Button>
          </div>
        </>
      ) : (
        <div className="min-w-[1440px] mx-auto">
          <div className="mb-5 w-full flex justify-between items-center container font-english">
            <div>
              <h1 className="text-xl font-medium">
                Quiz on {selectedLevel && selectedLevel}{" "}
                {selectedChapter && `Chapter ${selectedChapter}`}
              </h1>
              <p>Character to Onyomi </p>
            </div>

            {isQuizSubmit && (
              <div className="text-xl text-gray-500">
                Score :{" "}
                <span className="font-medium text-info">{currentMark}</span> /{" "}
                {quizData.length}
              </div>
            )}
          </div>
          <div className="container mx-auto w-full lg:w-1/2">
            <div className="flex flex-col gap-4">
              {quizData?.map((item, index) => {
                return (
                  <QuizItem
                    key={index}
                    number={index}
                    isSubmitted={isQuizSubmit}
                    quizItem={item}
                  />
                );
              })}
            </div>

            {isQuizSubmit && (
              <div className="text-xl text-center font-english mt-5 text-gray-500">
                Score :{" "}
                <span className="font-medium text-info">{currentMark}</span> /{" "}
                {quizData.length}
              </div>
            )}
            <div className="my-5 flex gap-4 justify-center items-center">
              <Button
                onClick={() => handleQuizQuit()}
                variant="outlined"
                className=""
              >
                Quit
              </Button>
              <Button
                disabled={answeredCount !== quizData.length || isQuizSubmit}
                className="bg-gradient-radial"
                onClick={() => handleQuizSubmit()}
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
