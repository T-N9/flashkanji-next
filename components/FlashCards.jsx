import React, { useEffect, useState } from "react";

const FlashCard = ({ item }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    setIsFlipped(false);
  }, [item]);
  return (
    <div
      onClick={() => setIsFlipped((prev) => !prev)}
      className={`bg-white relative font-primary-serif text-black p-5 rounded-md card min-w-[150px] lg:min-w-[200px] shadow-md ${
        isFlipped && "flipped"
      }`}
    >
      <p className="text-7xl front absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {item.kanji_character}
      </p>
      <div className="back absolute w-full top-[30%] -left-[0%] -translate-x-1/2 -translate-y-1/2 flex flex-col gap-5 p-2 text-xl">
        <p className="text-amber-900 flex flex-wrap justify-center">
          {item.kunyomi?.split(",").map((i, index) => {
            return (
              <React.Fragment key={index}>
                <span>{i}</span>
                {index !== item.kunyomi?.split(",").length - 1 && ", "}
              </React.Fragment>
            );
          })}{" "}
        </p>
        <p className="text-green-700  flex flex-wrap justify-center">
          {item.onyomi?.split(",").map((i, index) => {
            return (
              <React.Fragment key={index}>
                <span>{i}</span>
                {index !== item?.onyomi.split(",").length - 1 && ","}
              </React.Fragment>
            );
          })}{" "}
        </p>
        <p>{item.meaning}</p>
      </div>
    </div>
  );
};

export default FlashCard;
