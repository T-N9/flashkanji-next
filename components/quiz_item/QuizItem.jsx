import React from "react";

/* Components */
import { Checkbox } from "@material-tailwind/react";

/* Hook */
import Hook from "./hook";

export const QuizItem = ({ quizItem, number, isSubmitted }) => {
  const {
    currentAnswer,
    isAnswered,

    /* actions */
    setCurrentAnswer,
    setIsAnswered,
    handleIsAnswered,
  } = Hook(quizItem.correct_option);

  return (
    <div className="p-5 relative bg-white rounded-md flex flex-col md:flex-row justify-center items-center gap-4">
      <span className="absolute top-5 left-5 w-10 h-10 text-white flex justify-center items-center bg-gray-400 rounded-full">
        {number + 1}
      </span>
      <div className=" flex-1 flex justify-center items-center">
        <h1 className="text-9xl">{quizItem?.kanji_character}</h1>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-1 gap-3 flex-1 w-full option-item">
        {quizItem?.options.map((option, index) => {
          let optionItem = option.split(",").map((i, index) => {
            return (
              <div className="" key={index}>
                <span>{i}</span>
                {index !== option?.split(",").length - 1 && ","}
              </div>
            );
          });
          return (
            <div
              key={index}
              onClick={() => {
                handleIsAnswered();
                setCurrentAnswer(index);
                setIsAnswered(true);
              }}
              className={`${
                isSubmitted &&
                currentAnswer === index &&
                index === quizItem?.correct_option &&
                "border-green-400"
              } ${
                isSubmitted &&
                currentAnswer === index &&
                index !== quizItem?.correct_option &&
                "border-red-300"
              } ${isSubmitted && "pointer-events-none cursor-not-allowed"} ${
                isSubmitted && currentAnswer !== index && "opacity-60"
              } border-2 border-solid bg-white p-2 shadow text-2xl cursor-pointer`}
            >
              <Checkbox
                checked={currentAnswer === index}
                id={`${option + index + quizItem?.kanji_character}`}
                label={optionItem}
                ripple={true}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
