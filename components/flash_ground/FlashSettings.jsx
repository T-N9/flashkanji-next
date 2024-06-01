import React from "react";

/* Icons */
import { BiShuffle } from "react-icons/bi";
import { GiCardRandom } from "react-icons/gi";
import { MdFlipCameraAndroid } from "react-icons/md";
import { IoCloseCircleSharp } from "react-icons/io5";
import { TbSitemap } from "react-icons/tb";

import {
  Select,
  SelectItem,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Switch,
  Input,
  Tooltip,
} from "@nextui-org/react";
import Button from "../ui/button/Button";
import { Button as NextButton } from "@nextui-org/react";

/* Hook */
import useContainer from "./useContainer";
import { setShuffleMode } from "@/store/flashGroundSlice";
import { setNoChapters } from "@/store/jukugoGroundSlice";

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
  } = useContainer();
  return (
    <section
      className={`container bg-gradient-orange-card z-10 border-2 border-orange-400 relative flex flex-col gap-3 justify-center items-center bg-white rounded-md shadow transform duration-300 
      ${isSettingOpen ? "visible opacity-100" : "invisible opacity-0"}
     w-full mx-auto max-w-screen-xl px-4 py-4 lg:px-8 lg:py-4 mb-4 ${
       isLoading && "select-none pointer-events-none"
     }`}
    >
      <div
        className={`w-full flex flex-col lg:flex-row justify-between gap-4 items-center transition-all duration-200 ease-in `}
      >
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
                dispatch(setSelectedMultiChapters([]));
                dispatch(setSelectedChapter(1));
              }}
            >
              {[5, 4, 3, 2, 1].map((level) => (
                <SelectItem
                  key={level}
                  onClick={() => {
                    fetchByLevelData(level);
                    dispatch(setSelectedLevel(`N${level}`));
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
              defaultSelectedKeys={[noChapters[selectedChapter - 1]?.toString()]}
              onSelectionChange={() => {
                dispatch(setSelectedMultiChapters([]));
              }}
              selectedKeys={[selectedChapter.toString()]}
            >
              {noChapters.map((item) => (
                <SelectItem
                  key={item}
                  onClick={() => {
                    fetchByChapterData(item, level);
                    dispatch(setSelectedChapter(item));
                  }}
                  value={item.toString()}
                  isSelected={item.toString() === selectedChapter.toString()}
                  textValue={item.toString()}
                >
                  {item}
                </SelectItem>
              ))}
            </Select>
          </div>
        </div>
        <div className="flex w-full justify-center items-center select-box gap-6 ">
          <div className="flex select-box flex-col gap-6">
            <Input
              onChange={(e) => {
                setTimeout(() => {
                  handleSearchInput(e.target.value);
                }, 500);
              }}
              size="sm"
              className="drop-shadow-md"
              label="Search Kanji"
            />
          </div>
          <Popover backdrop="opaque" placement="bottom" showArrow={true}>
            <PopoverTrigger>

                <NextButton
                  title="Select Multiple Chapters"
                  className="bg-gray-600 w-20 py-2 flex justify-center items-center text-white rounded-md text-xs"
                >
                  <TbSitemap size={20} />
                </NextButton>
            </PopoverTrigger>
            <PopoverContent className="p-4">
              <div className="grid grid-cols-5 gap-3 max-w-[300px]">
                {noChapters?.map((item) => {
                  const isSelected = selectedMultiChapters.includes(item);
                  return (
                    <button
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
                    </button>
                  );
                })}
              </div>

              <Button
                onClick={() =>
                  fetchByMultiChaptersData(selectedMultiChapters, level)
                }
                className="mt-3 mx-auto bg-orange-500 table"
              >
                Confirm
              </Button>
            </PopoverContent>
          </Popover>
        </div>
        <div className=" flex gap-2 items-center">
          <Tooltip className="font-primary-san" content="Shuffle" color="primary" placement="bottom">
            <NextButton
              onClick={() => shuffleNowData(kanji, kanji.length)}
              variant="bordered"
              className=" text-info rounded-full"
              title="Shuffle"
            >
              <BiShuffle size={20} />
            </NextButton>
          </Tooltip>
          <div className="flex min-w-20 flex-col gap-1 justify-center items-center">
            <p className="text-xs text-center">
              Shuffle Mode
            </p>
            <Switch
              color="primary"
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
          <Tooltip className="font-primary-san" content="Randomize" color="primary" placement="bottom">
            <NextButton
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
              <GiCardRandom size={20} color="white" />
            </NextButton>
          </Tooltip>
          <Tooltip className="font-primary-san" content="Flip All" color="primary" placement="bottom">
            <NextButton
              onClick={() => {
                dispatch(setIsFlippedMode());
              }}
              // variant="gradient"
              className="bg-dark rounded-full"
              title="Flip All"
            >
              <MdFlipCameraAndroid size={20} color="white" />
            </NextButton>
          </Tooltip>
        </div>
      </div>

      {/* <div className="absolute right-7 top-0 ">
        <Button
          onClick={() => dispatch(toggleSetting())}
          color="red"
          className="p-2 rounded-full"
        >
          <IoCloseCircleSharp size={20} />
        </Button>
      </div> */}
    </section>
  );
};
