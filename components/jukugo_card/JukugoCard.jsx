import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Button } from "@material-tailwind/react";

/* Icons */
import { FaInfoCircle } from "react-icons/fa";

import { Hook } from "./hook";

const JukugoCard = ({ item, isSwiped = false }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const { isFlippedMode } = useSelector((state) => state.jukugoGroundReducer);

  const { handleOpen, isShowMeaning } = Hook();

  useEffect(() => {
    setIsFlipped(false);
  }, [item]);

  useEffect(() => {
    setIsFlipped(isFlippedMode);
  }, [isFlippedMode]);

  return (
    <div className="relative">
      <div
        onClick={() => setIsFlipped((prev) => !prev)}
        className={` ${isSwiped ? 'bg-white border-border_orange' : 'bg-gradient-orange-card border-border_orange border-opacity-50'} relative font-writing-1 text-black border-4 p-5 rounded-md card jukugo_card min-w-[150px] lg:min-w-[200px] ${
          isSwiped && "h-[200px]"
        } shadow-md ${isFlipped && "flipped"}`}
      >
        <p
          className={`${
            isSwiped ? "text-[2rem] md:text-[4rem]" : "text-2xl md:text-4xl"
          } front absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}
        >
          {item.jukugo_char}
        </p>
        <div
          className={`back absolute w-full ${
            !isShowMeaning ? "top-[40%]" : "top-[30%]"
          }  -left-[0%] -translate-x-1/2 -translate-y-1/2 flex flex-col gap-5 p-2 ${
            isSwiped ? "text-2xl md:text-[3rem]" : "text-xl"
          }`}
        >
          <p className="text-amber-900 flex flex-wrap justify-center">
            {item.hiragana}
          </p>
          {isShowMeaning && (
            <p className="text-success text-lg md:text-xl flex flex-wrap justify-center">
              {item.english_meaning}
            </p>
          )}
        </div>
      </div>

      {!isSwiped && (
        <div className="absolute -right-2 top-0">
          <Button
            onClick={() => handleOpen(item.jukugo_char)}
            size="sm"
            className="mt-2 mx-auto text-xs p-2 rounded-full bg-orange-700 table"
          >
            <FaInfoCircle size={20} />
          </Button>
        </div>
      )}
    </div>
  );
};

export default JukugoCard;
