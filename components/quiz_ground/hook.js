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
  const dispatch = useDispatch();

  const {
    kanji,
    level,
    selectedChapter,
    selectedLevel,
    isLoading,
    selectedMultiChapters,
  } = useSelector((state) => state.quizGroundReducer);

  const handleQuizStart = () => {

    console.log("working")
    if (selectedChapter !== "") {
      fetchQuiz_charOn_chapter_level(selectedChapter, level);
    } else if (selectedLevel !== "") {
      fetchQuiz_charOn_level(level);
    }
  };

  return {
    kanji,
    level,
    selectedChapter,
    selectedLevel,
    isLoading,
    selectedMultiChapters,
    noChapters,
    dispatch,

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

    handleQuizStart
  };
};

export default Hook;
