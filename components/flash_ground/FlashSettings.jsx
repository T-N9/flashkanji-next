import React from "react";

/* Icons */
import { BiShuffle } from "react-icons/bi";
import { GiCardRandom } from "react-icons/gi";
import { MdFlipCameraAndroid } from "react-icons/md";
import { IoCloseCircleSharp } from "react-icons/io5";

import {
  Select,
  Option,
  Button,
  Popover,
  PopoverHandler,
  PopoverContent,
  Input,
  Switch,
} from "@material-tailwind/react";

/* Hook */
import Hook from "./hook";
import { setShuffleMode } from "@/store/flashGroundSlice";

export const FlashSettings = () => {
  const {
    noChapters,
    kanji,
    level,
    selectedLevel,
    selectedChapter,
    dispatch,
    selectedMultiChapters,
    isSettingOpen,
    isShuffledMode,
    isLoading,

    /* actions */
    setSelectedChapter,
    setSelectedLevel,
    shuffleNowData,
    shuffleAllData,
    fetchByChapterData,
    fetchByLevelData,
    getRandomData,
    handleIncludedChapterClick,
    setSelectedMultiChapters,
    fetchByMultiChaptersData,
    handleSearchInput,
    setIsFlippedMode,
    toggleSetting,
    shuffleByLevelsData,
    setIsPaginated,
  } = Hook();
  return (
    <section
      className={`container z-[5000] relative flex flex-col gap-3 justify-center items-center bg-white rounded-md shadow transform duration-300 
      ${isSettingOpen ? "visible opacity-100" : "invisible opacity-0"}
     w-full mx-auto max-w-screen-xl px-4 py-4 lg:px-8 lg:py-4 mb-4 ${
       isLoading && "select-none pointer-events-none"
     }`}
    >
      <div className="flex w-full select-box flex-col gap-6">
        <Input
          onChange={(e) => {
            setTimeout(() => {
              handleSearchInput(e.target.value);
            }, 500);
          }}
          color="blue"
          className="bg-white"
          label="Search"
        />
      </div>
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
              onChange={() => {
                dispatch(setSelectedMultiChapters([]));
                dispatch(setSelectedChapter(1));
              }}
            >
              {[5, 4, 3, 2, 1].map((level) => (
                <Option
                  key={level}
                  onClick={() => {
                    fetchByLevelData(level);
                    dispatch(setSelectedLevel(`N${level}`));
                  }}
                  value={'N'+level.toString()}
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
              onChange={() => {
                dispatch(setSelectedMultiChapters([]));
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
        <div className="flex w-full md:w-36 min-w-36 select-box flex-col gap-6">
          <Popover
            animate={{
              mount: { scale: 1, y: 0 },
              unmount: { scale: 0, y: 25 },
            }}
            placement="bottom"
          >
            <PopoverHandler>
              <Button className="px-3">Custom</Button>
            </PopoverHandler>
            <PopoverContent className="bg-gray-50 z-[5500]">
              <div className="grid grid-cols-5 gap-3 max-w-[300px]">
                {noChapters?.map((item) => {
                  const isSelected = selectedMultiChapters.includes(item);
                  return (
                    <Button
                      onClick={() => handleIncludedChapterClick(item)}
                      key={item}
                      value={item.toString()}
                      className={`${
                        isSelected
                          ? "bg-gradient-radial text-white"
                          : "bg-gray-300 text-gray-800"
                      } rounded-full p-0 w-12 h-12 text-lg shadow-none`}
                    >
                      {item}
                    </Button>
                  );
                })}
              </div>
              <Button
                onClick={() =>
                  fetchByMultiChaptersData(selectedMultiChapters, level)
                }
                className="mt-3 mx-auto table"
              >
                Confirm
              </Button>
            </PopoverContent>
          </Popover>
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
          <div className="flex flex-col gap-1 justify-center items-center">
            <p className="text-xs">
              Shuffle Mode : {isShuffledMode ? "ON" : "OFF"}
            </p>
            <Switch
              color="indigo"
              onChange={() => {
                if (isShuffledMode) {
                  dispatch(setShuffleMode(false));
                  dispatch(setIsPaginated(true));
                  fetchByChapterData(1, level);
                  dispatch(setSelectedChapter(1));
                } else {
                  shuffleByLevelsData(level);
                  dispatch(setSelectedMultiChapters([]));
                }
              }}
              checked={isShuffledMode}
            />
          </div>
          <Button
            onClick={() => {
              getRandomData(10);
              dispatch(setSelectedChapter(""));
              dispatch(setSelectedLevel(""));
              dispatch(setSelectedMultiChapters([]));
            }}
            variant="gradient"
            className="bg-gradient-radial rounded-full"
            title="Randomize"
          >
            <GiCardRandom size={20} />
          </Button>
          <Button
            onClick={() => {
              dispatch(setIsFlippedMode());
            }}
            variant="gradient"
            className="bg-primary rounded-full"
            title="Flip All"
          >
            <MdFlipCameraAndroid size={20} />
          </Button>
        </div>
      </div>

      <div className="absolute right-7 top-0 ">
        <Button
          onClick={() => dispatch(toggleSetting())}
          color="red"
          className="p-2 rounded-full"
        >
          <IoCloseCircleSharp size={20} />
        </Button>
      </div>
    </section>
  );
};
