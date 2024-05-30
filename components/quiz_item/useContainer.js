import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import {
  increaseMark,
  decreaseMark,
  increaseAnsweredCount,
} from "@/store/quizGroundSlice";

const useContainer = (rightAnswer) => {
  const [currentAnswer, setCurrentAnswer] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [markOfItem, setMarkOfItem] = useState(0);

  const dispatch = useDispatch();

  const { currentMark } = useSelector((state) => state.quizGroundReducer);

  useEffect(() => {
    if (currentAnswer == rightAnswer && markOfItem === 0) {
      // console.log("right");
      dispatch(increaseMark());
      setMarkOfItem((prev) => prev + 1);
    } else if (markOfItem === 1 && currentMark > 0 && currentAnswer !== rightAnswer) {
      // console.log("wrong");
      dispatch(decreaseMark());
      setMarkOfItem((prev) => prev -1);
    }
  }, [currentAnswer]);

  // console.log({ currentMark, currentAnswer, rightAnswer, markOfItem})

  const handleIsAnswered = () => {
    if (!isAnswered) {
      dispatch(increaseAnsweredCount());
    }
  };

  return {
    currentAnswer,
    isAnswered,

    /* actions */
    setCurrentAnswer,
    setIsAnswered,
    handleIsAnswered,
  };
};

export default useContainer;
