import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  randomData,
  fetchAll,
  fetchByChapter,
  fetchByLevel,
  shuffleAll,
} from "@/services/fetchers";

import {
  setSelectedChapter,
  setSelectedLevel,
  setStartLoading,
  setStopLoading,
  setLevel,
  setKanji,
  setSelectedMultiChapters,
} from "@/store/flashGroundSlice";
import { toggleFlashModal } from "@/store/generalSlice";

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
  } = useSelector((state) => state.flashGroundReducer);

  const fetchAllData = async () => {
    dispatch(setStartLoading());
    try {
      let allData = await fetchAll();
      dispatch(setKanji(allData));
      dispatch(setStopLoading());
    } catch (error) {
      // Handle errors if needed
      dispatch(setStopLoading());
    }
  };
  useEffect(() => {
    fetchAllData();
  }, []);

  const shuffleNowData = async (data, count) => {
    const shuffledKanji = data.slice();
    for (let i = shuffledKanji.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledKanji[i], shuffledKanji[j]] = [
        shuffledKanji[j],
        shuffledKanji[i],
      ];
    }
    dispatch(setKanji(shuffledKanji.slice(0, count)));
  };

  const shuffleAllData = async () => {
    dispatch(setStartLoading());
    try {
      let allData = await shuffleAll();
      dispatch(setKanji(allData));
      dispatch(setStopLoading());
    } catch (error) {
      // Handle errors if needed
      dispatch(setStopLoading());
    }
  };

  const fetchByChapterData = async (chapter, level) => {
    dispatch(setStartLoading());
    try {
      if (chapter > 0) {
        let allData = await fetchByChapter(chapter, level);
        dispatch(setKanji(allData));
        dispatch(setStopLoading());
      } else {
        fetchAllData();
        dispatch(setStopLoading());
      }
    } catch (error) {
      // Handle errors if needed
    }
  };

  const fetchByLevelData = async (level) => {
    dispatch(setStartLoading());
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

    try {
      let allData = await fetchByLevel(level);
      dispatch(setKanji(allData));
      dispatch(setStopLoading());
    } catch (error) {
      // Handle errors if needed
      dispatch(setStopLoading());
    }

    dispatch(setStopLoading());
  };

  const getRandomData = async (count) => {
    dispatch(setStartLoading());
    try {
      let allData = await randomData(count);
      dispatch(setKanji(allData));
      dispatch(setStopLoading());
    } catch (error) {
      // Handle errors if needed
      dispatch(setStopLoading());
    }
  };

  const handleIncludedChapterClick = (item) => {
    // Check if the item is already selected
    const isSelected = selectedMultiChapters.includes(item);

    dispatch(
      setSelectedMultiChapters(
        isSelected
          ? selectedMultiChapters.filter(
              (selectedItem) => selectedItem !== item
            )
          : [...selectedMultiChapters, item]
      )
    );
  };
  
  return {
    n4NoChapters,
    n5NoChapters,
    noChapters,
    kanji,
    isLoading,
    level,
    selectedLevel,
    selectedChapter,
    dispatch,
    selectedMultiChapters,

    /* actions */
    setLevel,
    setNoChapters,
    setSelectedChapter,
    setSelectedLevel,
    shuffleNowData,
    shuffleAllData,
    fetchByChapterData,
    fetchByLevelData,
    getRandomData,
    toggleFlashModal,
    handleIncludedChapterClick,
  };
};

export default Hook;
