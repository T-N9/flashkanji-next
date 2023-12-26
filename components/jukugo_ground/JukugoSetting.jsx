import Hook from "./hook";

/* Compoents */
import { Button } from "@material-tailwind/react";

import { BiShuffle } from "react-icons/bi";
import { GiCardRandom } from "react-icons/gi";

export const JukugoSetting = () => {
  const { shuffleNowData, jukugo, fetchRandomJukugoByLevelData } = Hook();

  return (
    <section
      className={`container z-[5000] relative flex flex-col gap-3 justify-center items-center bg-white rounded-md shadow transform duration-300 
   w-full mx-auto max-w-screen-xl px-4 py-4 lg:px-8 lg:py-4 mb-4`}
    >
      <div
        className={`flex flex-col lg:flex-row justify-center gap-4 items-center transition-all duration-200 ease-in `}
      >
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
