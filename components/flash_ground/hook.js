import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  randomData,
  fetchAll,
  fetchByChapter,
  fetchByLevel,
  shuffleAll,
  fetchByMultiChapters,
  fetchBySearchValue,
} from "@/services/fetchers";

import {
  setSelectedChapter,
  setSelectedLevel,
  setStartLoading,
  setStopLoading,
  setLevel,
  setKanji,
  setSelectedMultiChapters,
  setSearchValue,
  setIsFlippedMode,
  setNoChapters,
  setIsPaginated
} from "@/store/flashGroundSlice";
import { toggleFlashModal, toggleSetting } from "@/store/generalSlice";

const Hook = () => {
  const n5NoChapters = Array.from({ length: 11 }, (_, index) => index + 1);
  const n4NoChapters = Array.from({ length: 20 }, (_, index) => index + 1);

  // const [noChapters, setNoChapters] = useState(n5NoChapters);
  const dispatch = useDispatch();

  const {
    kanji,
    level,
    selectedChapter,
    selectedLevel,
    isLoading,
    selectedMultiChapters,
    searchValue,
    noChapters,
    isPaginated
  } = useSelector((state) => state.flashGroundReducer);

  const { isSettingOpen } = useSelector((state) => state.generalReducer);

  const fetchAllData = async () => {
    dispatch(setStartLoading());
    try {
      let allData = await fetchAll();
      dispatch(setKanji(allData));
      dispatch(setStopLoading());
    } catch (error) {
      dispatch(setStopLoading());
    }
  };
  useEffect(() => {
    fetchByChapterData(1, 5);
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
    dispatch(setIsPaginated(true));
    try {
      let allData = await shuffleAll();
      dispatch(setKanji(allData));
      dispatch(setStopLoading());
    } catch (error) {
      dispatch(setStopLoading());
    }
  };

  const fetchByChapterData = async (chapter, level) => {
    dispatch(setStartLoading());
    dispatch(setIsPaginated(true));
    try {
      if (chapter > 0) {
        let allData = await fetchByChapter(chapter, level);
        dispatch(setKanji(allData));
        dispatch(setStopLoading());
      } else {
        fetchAllData();
        dispatch(setStopLoading());
      }
    } catch (error) {}
  };

  const fetchByLevelData = async (level) => {
    dispatch(setStartLoading());
    dispatch(setIsPaginated(true));
    switch (level) {
      case 5:
        dispatch(setNoChapters(n5NoChapters));
        dispatch(setLevel(5));
        fetchByChapterData(1,5);
        setSelectedChapter(1);
        break;
      case 4:
        dispatch(setNoChapters(n4NoChapters));
        dispatch(setLevel(4));
        fetchByChapterData(1,4);
        setSelectedChapter(1);
        break;
      default:
        break;
    }

    // try {
    //   let allData = await fetchByLevel(level);
    //   dispatch(setKanji(allData));
    //   dispatch(setStopLoading());
    // } catch (error) {
    //   dispatch(setStopLoading());
    // }

    dispatch(setStopLoading());
  };

  const fetchByMultiChaptersData = async (chapters, level) => {
    dispatch(setStartLoading());
    dispatch(setIsPaginated(false));
    const chapterString = chapters.toString();
    try {
      let allData = await fetchByMultiChapters(chapterString, level);
      dispatch(setKanji(allData));
      dispatch(setSelectedChapter(""));
      dispatch(setStopLoading());
    } catch (error) {
      dispatch(setStopLoading());
    }
  };

  const getRandomData = async (count) => {
    dispatch(setStartLoading());
    dispatch(setIsPaginated(false));
    try {
      let allData = await randomData(count);
      dispatch(setKanji(allData));
      dispatch(setStopLoading());
    } catch (error) {
      dispatch(setStopLoading());
    }
  };

  const handleIncludedChapterClick = (item) => {
    // Check if the item is already selected
    const isSelected = selectedMultiChapters.includes(item);
    dispatch(setIsPaginated(false));
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

  const handleSearchInput = async (value) => {
    dispatch(setSearchValue(value));

    if (value.length >= 2) {
      dispatch(setStartLoading());
      fetchBySearchValue(value)
        .then((allData) => {
          dispatch(setKanji(allData));
          dispatch(setSelectedChapter(1));
          dispatch(setStopLoading());
        })
        .catch((error) => {
          dispatch(setStopLoading());
        });
    }

    if (value === "") {
      fetchAllData();
    }
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
    isSettingOpen,
    isPaginated,

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
    setSelectedMultiChapters,
    fetchByMultiChaptersData,
    handleSearchInput,
    toggleSetting,
    setIsFlippedMode,
  };
};

export default Hook;
