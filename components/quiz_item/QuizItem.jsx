import React from "react";

/* Components */
import { Checkbox, Card, CardBody, cn } from "@nextui-org/react";

/* Hook */
import useContainer from "./useContainer";

export const QuizItem = ({ quizItem, number, isSubmitted }) => {
  const {
    currentAnswer,
    isAnswered,

    /* actions */
    setCurrentAnswer,
    setIsAnswered,
    handleIsAnswered,
  } = useContainer(quizItem.correct_option);

  return (
    <Card>
      <CardBody>
        <div className="flex gap-4 flex-col lg:flex-row">
          <span className="absolute top-5 left-5 w-10 h-10 text-white flex justify-center items-center bg-gray-400 rounded-full">
            {number + 1}
          </span>
          <div className=" flex-1 flex justify-center items-center">
            <h1 className="text-9xl">{quizItem?.kanji_character}</h1>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-1 gap-10 flex-1 w-full option-item p-4">
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
                <div key={index}>
                  <Checkbox
                    
                    onClick={() => {
                      handleIsAnswered();
                      setCurrentAnswer(index);
                      setIsAnswered(true);
                    }}
                    aria-label={optionItem}
                    classNames={{
                      base: cn(
                        "inline-flex w-full max-w-md bg-content1 border-default shadow border-2 border-gray-200",
                        "hover:bg-content2 items-center justify-start",
                        "cursor-pointer rounded-lg gap-2 p-4 border-2 border-transparent",
                        ` ${currentAnswer === index && "border-primary"} ${
                          isSubmitted &&
                          currentAnswer === index &&
                          index === quizItem?.correct_option &&
                          "border-green-400"
                        } ${
                          isSubmitted &&
                          currentAnswer === index &&
                          index !== quizItem?.correct_option &&
                          "border-red-300"
                        }
                                          
                                          ${
                                            isSubmitted &&
                                            index ===
                                              quizItem?.correct_option &&
                                            "border-green-400"
                                          }
                            
                                          ${
                                            isSubmitted &&
                                            "pointer-events-none cursor-not-allowed"
                                          } ${
                          isSubmitted && currentAnswer !== index && "opacity-60"
                        } border-2 border-solid bg-white p-2 shadow text-2xl cursor-pointer`
                      ),
                      label: "w-full",
                    }}
                    isSelected={currentAnswer === index}
                    color="default"
                  >
                    <div className="w-full flex justify-between gap-2">
                      <div className="flex flex-wrap items-end gap-1">
                        {optionItem}
                      </div>
                    </div>
                  </Checkbox>
                </div>
              );
            })}
          </div>
        </div>
      </CardBody>
    </Card>
  );
};
