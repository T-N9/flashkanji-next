import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchJukugo_all,
  fetchJukugo_byLevel,
  fetchRandomJukugo_byLevel,
  fetchJukugo_byLevelChapter,
  getUserPractice,
} from "@/services/fetchers";

import {
  setJukugo,
  setIsFlippedMode,
  setShuffleMode,
  setStartLoading,
  setStopLoading,
  setSelectedChapter,
  setSelectedLevel,
  setNoChapters,
  setIsPaginated,
  setLevel,
  toggleShowMeaning,
} from "@/store/jukugoGroundSlice";

import { setJukugoPracticeData } from "@/store/jukugoGroundSlice";

const useContainer = () => {
  const dispatch = useDispatch();

  const {
    jukugo,
    isLoading,
    isFlippedMode,
    isShuffledMode,
    selectedChapter,
    selectedLevel,
    noChapters,
    isPaginated,
    level,
    isShowMeaning,
  } = useSelector((state) => state.jukugoGroundReducer);

  const { isJukugoModalOpen, userInfo } = useSelector(
    (state) => state.generalReducer
  );

  const n5NoChapters = Array.from({ length: 11 }, (_, index) => index + 1);
  const n4NoChapters = Array.from({ length: 20 }, (_, index) => index + 1);
  const n3NoChapters = Array.from({ length: 42 }, (_, index) => index + 1);

  const fetchAllJukugoData = async () => {
    try {
      let allData = await fetchJukugo_all();
      dispatch(setJukugo(allData));
    } catch (error) {
      console.log("error happened.");
    }
  };

  const fetchJukugoByLevelData = async (level) => {
    try {
      let allData = await fetchJukugo_byLevel(level);
      dispatch(setJukugo(allData));
    } catch (error) {
      console.log("error happened.");
    }
  };

  const fetchRandomJukugoByLevelData = async (count) => {
    dispatch(setStartLoading());
    try {
      let allData = await fetchRandomJukugo_byLevel(count);
      dispatch(setJukugo(allData));
      dispatch(setStopLoading());
    } catch (error) {
      console.log("error happened.");
      dispatch(setStopLoading());
    }
  };

  const shuffleNowData = async (data, count) => {
    const shuffledJukugo = data.slice();
    for (let i = shuffledJukugo.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledJukugo[i], shuffledJukugo[j]] = [
        shuffledJukugo[j],
        shuffledJukugo[i],
      ];
    }
    dispatch(setJukugo(shuffledJukugo.slice(0, count)));
  };

  const fetchByChapterData = async (chapter, level) => {
    dispatch(setStartLoading());
    // dispatch(setShuffleMode(false));
    dispatch(setIsPaginated(true));
    try {
      if (chapter > 0) {
        let allData = await fetchJukugo_byLevelChapter(chapter, level);
        dispatch(setJukugo(allData));
        dispatch(setStopLoading());
      } else {
        fetchAllData();
        dispatch(setStopLoading());
      }
    } catch (error) {}
  };

  const fetchByLevelData = async (level) => {
    // dispatch(setShuffleMode(false));
    dispatch(setIsPaginated(true));
    switch (level) {
      case 5:
        dispatch(setNoChapters(n5NoChapters));
        dispatch(setLevel(5));
        fetchByChapterData(1, 5);
        setSelectedChapter(1);
        break;
      case 4:
        dispatch(setNoChapters(n4NoChapters));
        dispatch(setLevel(4));
        fetchByChapterData(1, 4);
        setSelectedChapter(1);
        break;
      case 3:
        dispatch(setNoChapters(n3NoChapters));
        dispatch(setLevel(3));
        fetchByChapterData(1, 3);
        setSelectedChapter(1);
        break;
      default:
        break;
    }
  };

  const fetchUserPracticeJukugo = async () => {
    try {
      let allData = await getUserPractice(userInfo?.id, "jukugo");
      dispatch(setJukugoPracticeData(allData));
      // console.log("fetching");
      // dispatch(setStopLoading());
    } catch (error) {
      // dispatch(setStopLoading());
    }
  };

  useEffect(() => {
    userInfo && fetchUserPracticeJukugo();
  }, [userInfo, isJukugoModalOpen, selectedChapter, selectedLevel]);

  useEffect(() => {
    fetchByChapterData(selectedChapter, level);
  }, []);

  return {
    jukugo,
    isLoading,
    isFlippedMode,
    isShuffledMode,
    selectedChapter,
    selectedLevel,
    noChapters,
    isPaginated,
    dispatch,
    level,
    isShowMeaning,

    shuffleNowData,
    fetchRandomJukugoByLevelData,
    setSelectedChapter,
    setSelectedLevel,
    fetchByLevelData,
    fetchByChapterData,
    setIsFlippedMode,
    toggleShowMeaning,
  };
};

export default useContainer;
