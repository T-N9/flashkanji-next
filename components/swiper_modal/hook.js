import React from 'react';
import { useSelector } from "react-redux";

export const Hook = () => {

    const {
        kanji,
        level,
        selectedChapter,
        selectedLevel,
        isLoading
      } = useSelector((state) => state.flashGroundReducer);

  return {
    kanji,
    isLoading
  }
}
