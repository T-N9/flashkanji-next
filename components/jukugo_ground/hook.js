import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchJukugo_all, fetchJukugo_byLevel,fetchRandomJukugo_byLevel } from "@/services/fetchers";

import {
  setJukugo,
  setIsFlippedMode,
  setShuffleMode,
  setStartLoading,
  setStopLoading,
} from "@/store/jukugoGroundSlice";


const Hook = () => {
  const dispatch = useDispatch();

  const {
    jukugo,
    isLoading,
    isFlippedMode,
    isShuffledMode,
  } = useSelector((state) => state.jukugoGroundReducer);

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

  const fetchRandomJukugoByLevelData = async(count) => {
    try {
      let allData = await fetchRandomJukugo_byLevel(count);
      dispatch(setJukugo(allData));
    } catch (error) {
      console.log("error happened.");
    }
  }

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

  useEffect(() => {
    // fetchAllJukugoData();
    fetchJukugoByLevelData(3);
  }, []);
  return {
    jukugo,
    shuffleNowData,
    fetchRandomJukugoByLevelData
  };
};

export default Hook;
