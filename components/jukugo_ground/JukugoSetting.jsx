import useContainer from "./useContainer";

/* Compoents */
// import { Select, Option, Button, Switch } from "@material-tailwind/react";

import { Select, SelectItem, Switch, Tooltip } from "@nextui-org/react";
import { Button as NextButton } from "@nextui-org/react";

import { BiShuffle } from "react-icons/bi";
import { GiCardRandom } from "react-icons/gi";
import { MdFlipCameraAndroid } from "react-icons/md";

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
    isShowMeaning,

    shuffleNowData,
    fetchRandomJukugoByLevelData,
    setSelectedChapter,
    setSelectedLevel,
    fetchByLevelData,
    fetchByChapterData,
    setIsFlippedMode,
    toggleShowMeaning,
  } = useContainer();

  return (
    <section
      className={`container border-2 bg-gradient-orange-card border-orange-400 relative flex flex-col gap-3 justify-center items-center bg-white rounded-md shadow transform duration-300 
   w-full mx-auto max-w-screen-xl px-4 py-4 lg:px-8 lg:py-4 mb-4 ${isLoading && 'select-none pointer-events-none'}`}
    >
      <div
        className={`flex w-full lg:w-auto mx-auto flex-col lg:flex-row justify-center gap-4 items-center transition-all duration-200 ease-in `}
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
              onSelectionChange={() => {}}
            >
              {[5, 4, 3, 2, 1].map((level) => (
                <SelectItem
                  key={level}
                  onClick={() => {
                    fetchByLevelData(level);
                    dispatch(setSelectedLevel(`N${level}`));
                    dispatch(setSelectedChapter(1));
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
              onSelectionChange={() => {}}
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
        <div className="flex-1 flex justify-center items-center gap-2">
          <Tooltip
            className="font-primary-san"
            content="Shuffle"
            color="primary"
            placement="bottom"
          >
            <NextButton
              onClick={() => shuffleNowData(jukugo, jukugo.length)}
              variant="bordered"
              className=" text-info rounded-full"
              title="Shuffle"
            >
              <BiShuffle size={20} />
            </NextButton>
          </Tooltip>

          <Tooltip
            className="font-primary-san"
            content="Randomize"
            color="primary"
            placement="bottom"
          >
            <NextButton
              onClick={() => {
                fetchRandomJukugoByLevelData(20);
                dispatch(setSelectedChapter(""));
                dispatch(setSelectedLevel(""));
              }}
              variant="gradient"
              className="bg-gradient-radial rounded-full"
              title="Randomize"
            >
              <GiCardRandom size={20} color="white" />
            </NextButton>
          </Tooltip>
        </div>
        <div className="flex-1 flex justify-center items-center gap-2">
          <div className="flex flex-col gap-1 justify-center items-center">
            <p className="text-xs">Show Meaning</p>

            <Switch
              color="primary"
              onChange={() => {
                dispatch(toggleShowMeaning());
              }}
              checked={isShowMeaning}
            />
          </div>
          <Tooltip
            className="font-primary-san"
            content="Flip All"
            color="primary"
            placement="bottom"
          >
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
    </section>
  );
};
