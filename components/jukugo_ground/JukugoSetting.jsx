import Hook from "./hook";

/* Compoents */
import { Select, Option, Button } from "@material-tailwind/react";

import { BiShuffle } from "react-icons/bi";
import { GiCardRandom } from "react-icons/gi";

export const JukugoSetting = () => {
  const {
    jukugo,
    isLoading,
    isFlippedMode,
    isShuffledMode,
    selectedChapter,
    selectedLevel,
    noChapters,
    isPaginated,
    dispatch,
    level,

    shuffleNowData,
    fetchRandomJukugoByLevelData,
    setSelectedChapter,
    setSelectedLevel,
    fetchByLevelData,
    fetchByChapterData
  } = Hook();

  return (
    <section
      className={`container z-[5000] relative flex flex-col gap-3 justify-center items-center bg-white rounded-md shadow transform duration-300 
   w-full mx-auto max-w-screen-xl px-4 py-4 lg:px-8 lg:py-4 mb-4`}
    >
      <div
        className={`flex flex-col lg:flex-row justify-center gap-4 items-center transition-all duration-200 ease-in `}
      >
        <div className="flex gap-4 w-full md:w-fit">
          <div className="flex w-full md:w-36 min-w-36 select-box flex-col gap-6">
            <Select
              value={selectedLevel.toString()}
              color="blue"
              size="md"
              className="bg-white"
              label="Select Level"
              onChange={() =>{
                
              }}
            >
              {[5, 4, 3, 2, 1].map((level) => (
                <Option
                  key={level}
                  onClick={() => {
                    fetchByLevelData(level);
                    dispatch(setSelectedLevel(`N${level}`));
                    dispatch(setSelectedChapter(1));
                  }}
                  value={"N"+level.toString()}
                  disabled={level <= 2} // Assuming that levels 3 and above are disabled
                >
                  N{level}
                </Option>
              ))}
            </Select>
          </div>
          <div className="flex w-full md:w-36 min-w-36 select-box flex-col gap-6">
            <Select
              value={selectedChapter.toString()}
              color="blue"
              size="md"
              className="bg-white"
              label="Select Chapter"
              onChange={() =>{

              }}
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
            onClick={() => shuffleNowData(jukugo, jukugo.length)}
            variant="outlined"
            className="outline-info border-info text-info rounded-full"
            title="Shuffle"
          >
            <BiShuffle size={20} />
          </Button>

          <Button
            onClick={() => {
              fetchRandomJukugoByLevelData(20);
            }}
            variant="gradient"
            className="bg-gradient-radial rounded-full"
            title="Randomize"
          >
            <GiCardRandom size={20} />
          </Button>
        </div>
      </div>
    </section>
  );
};
