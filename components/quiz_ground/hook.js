import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchQuiz_charOn_chapter_level,
  fetchQuiz_charOn_level,
  fetchQuiz_charOn_rand,
} from "@/services/fetchers";

import {
  setSelectedChapter,
  setSelectedLevel,
  setStartLoading,
  setStopLoading,
  setLevel,
  setKanji,
  setSelectedMultiChapters,
} from "@/store/quizGroundSlice";

const Hook = () => {
  const n5NoChapters = Array.from({ length: 11 }, (_, index) => index + 1);
  const n4NoChapters = Array.from({ length: 20 }, (_, index) => index + 1);

  const [noChapters, setNoChapters] = useState(n5NoChapters);
  const [quizData, setQuizData] = useState([]);
  const [isQuizReady, setIsQuizReady] = useState(false);
  const [ isQuizSubmit, setIsQuizSubmit ]= useState(false);
  const dispatch = useDispatch();

  const {
    kanji,
    level,
    selectedChapter,
    selectedLevel,
    isLoading,
    selectedMultiChapters,
    answeredCount,
    currentMark
  } = useSelector((state) => state.quizGroundReducer);

  const handleChapterData = (level) => {
    switch (level) {
      case 5:
        setNoChapters(n5NoChapters);
        dispatch(setLevel(5));
        break;
      case 4:
        setNoChapters(n4NoChapters);
        dispatch(setLevel(4));
        break;
      default:
        break;
    }
  };

  const handleQuizStart = async () => {
    dispatch(setStartLoading());

    if (selectedChapter !== "") {
      let currentData = await fetchQuiz_charOn_chapter_level(
        selectedChapter,
        level
      );

      setQuizData(currentData);
      dispatch(setStopLoading());
      setIsQuizReady(true);
    } else if (selectedLevel !== "") {
      let currentData = await fetchQuiz_charOn_level(level);
      setQuizData(currentData);
      dispatch(setStopLoading());
      setIsQuizReady(true);
    }
  };

  const handleQuizSubmit = () => {
    if(answeredCount === 10) {
      setIsQuizSubmit(true);
    }
  }

  return {
    kanji,
    level,
    selectedChapter,
    selectedLevel,
    isLoading,
    selectedMultiChapters,
    noChapters,
    dispatch,

    quizData,
    isQuizReady,
    answeredCount,
    currentMark,
    isQuizSubmit,

    /* action */
    setSelectedChapter,
    setSelectedLevel,
    setStartLoading,
    setStopLoading,
    setLevel,
    setKanji,
    setSelectedMultiChapters,
    fetchQuiz_charOn_chapter_level,
    fetchQuiz_charOn_level,
    fetchQuiz_charOn_rand,
    handleChapterData,
    handleQuizStart,
    handleQuizSubmit
  };
};

export default Hook;
