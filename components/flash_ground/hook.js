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
  shuffleByLevels,
  getUserPractice,
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
  setIsPaginated,
  setShuffleMode,
  setShuffledData,
  setKanjiPracticeData,
} from "@/store/flashGroundSlice";
import {
  toggleFlashModal,
  toggleSetting,
  toggleJukugoModal,
} from "@/store/generalSlice";

const Hook = () => {
  const n5NoChapters = Array.from({ length: 11 }, (_, index) => index + 1);
  const n4NoChapters = Array.from({ length: 20 }, (_, index) => index + 1);
  const n3NoChapters = Array.from({ length: 42 }, (_, index) => index + 1);

  const [isIgnite, setIsIgnite] = useState(true);
  const dispatch = useDispatch();

  const {
    kanji,
    level,
    selectedChapter,
    selectedLevel,
    isLoading,
    isFlippedMode,
    selectedMultiChapters,
    searchValue,
    noChapters,
    isPaginated,
    shuffledData,
    isShuffledMode,
  } = useSelector((state) => state.flashGroundReducer);

  const { isSettingOpen, userInfo, isFlashModalOpen } = useSelector(
    (state) => state.generalReducer
  );

  const fetchAllData = async () => {
    dispatch(setStartLoading());
    dispatch(setShuffleMode(false));
    try {
      let allData = await fetchAll();
      dispatch(setKanji(allData));
      dispatch(setStopLoading());
    } catch (error) {
      dispatch(setStopLoading());
    }
  };

  const fetchUserPracticeKanji = async () => {
    if (userInfo) {
      const getUserPracticeKanji = await getUserPractice(userInfo?.id, "kanji");

      dispatch(setKanjiPracticeData(getUserPracticeKanji));
      // console.log({ getUserPracticeKanji });
    }
  };

  useEffect(() => {
    if(!isFlashModalOpen){
      fetchUserPracticeKanji();
    }

  },[isFlashModalOpen])

  useEffect(() => {
    fetchUserPracticeKanji();
  }, [userInfo, kanji]);

  useEffect(() => {
    fetchByChapterData(selectedChapter, level);

    setTimeout(() => {
      setIsIgnite(false);
    }, 3000);
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
    isFlippedMode && dispatch(setIsFlippedMode());
    dispatch(setKanji(shuffledKanji.slice(0, count)));
  };

  const shuffleByLevelsData = async (levels) => {
    dispatch(setStartLoading());
    dispatch(setIsPaginated(true));
    dispatch(setShuffleMode(true));
    try {
      let allData = await shuffleByLevels(levels);
      dispatch(setKanji(allData?.data.slice(0, 10)));
      dispatch(setShuffledData(allData?.data));
      dispatch(setSelectedChapter(1));
      dispatch(
        setNoChapters(
          Array.from({ length: allData?.pages }, (_, index) => index + 1)
        )
      );
      dispatch(setStopLoading());
    } catch (error) {
      dispatch(setStopLoading());
    }
  };

  const shuffleAllData = async () => {
    dispatch(setStartLoading());
    dispatch(setShuffleMode(false));
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
    dispatch(setShuffleMode(false));
    dispatch(setIsPaginated(true));
    try {
      if (chapter > 0) {
        let allData = await fetchByChapter(chapter, level);
        dispatch(setKanji(allData));
        dispatch(setStopLoading());
        // console.log({ chapter, level });
      } else {
        fetchAllData();
        dispatch(setStopLoading());
      }
    } catch (error) {}
  };

  const fetchByLevelData = async (level) => {
    dispatch(setShuffleMode(false));
    dispatch(setIsPaginated(true));
    switch (level) {
      case 5:
        dispatch(setNoChapters(n5NoChapters));
        dispatch(setLevel(5));
        dispatch(setSelectedChapter(1));
        fetchByChapterData(1, 5);
        break;
      case 4:
        dispatch(setNoChapters(n4NoChapters));
        dispatch(setLevel(4));
        dispatch(setSelectedChapter(1));
        fetchByChapterData(1, 4);
        break;
      case 3:
        dispatch(setNoChapters(n3NoChapters));
        dispatch(setLevel(3));
        dispatch(setSelectedChapter(1));
        fetchByChapterData(1, 3);
        break;
      default:
        break;
    }
  };

  const fetchByMultiChaptersData = async (chapters, level) => {
    dispatch(setStartLoading());
    dispatch(setShuffleMode(false));
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
    dispatch(setShuffleMode(false));
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
    dispatch(setIsPaginated(false));
    dispatch(setShuffleMode(false));

    if (value.length >= 2) {
      dispatch(setStartLoading());
      dispatch(setShuffleMode(false));
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
      fetchByChapterData(1, level);
      dispatch(setIsPaginated(true));
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
    shuffledData,
    isShuffledMode,
    isIgnite,

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
    setKanji,
    toggleFlashModal,
    handleIncludedChapterClick,
    setSelectedMultiChapters,
    fetchByMultiChaptersData,
    handleSearchInput,
    toggleSetting,
    setIsFlippedMode,
    shuffleByLevelsData,
    setIsPaginated,
    toggleJukugoModal,
  };
};

export default Hook;
