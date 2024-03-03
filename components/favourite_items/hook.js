import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserFavourite, getUserPractice } from "@/services/fetchers";
import { setKanjiPracticeData } from "@/store/flashGroundSlice";
import { setJukugoPracticeData } from "@/store/jukugoGroundSlice";

const hook = () => {
  const [kanjiItems, setKanjiItems] = useState(null);
  const [jukugoItems, setJukugoItems] = useState(null);

  const { userInfo } = useSelector((state) => state.generalReducer);
  const dispatch = useDispatch();

  const fetchUserPracticeKanji = async () => {
    try {
      let allData = await getUserPractice(userInfo?.id, "kanji");
      dispatch(setKanjiPracticeData(allData));
      console.log("fetching");
      // dispatch(setStopLoading());
    } catch (error) {
      // dispatch(setStopLoading());
    }
  };

  const fetchUserPracticeJukugo = async () => {
    try {
      let allData = await getUserPractice(userInfo?.id, "jukugo");
      dispatch(setJukugoPracticeData(allData));
      console.log("fetching");
      // dispatch(setStopLoading());
    } catch (error) {
      // dispatch(setStopLoading());
    }
  };

  const getFavouriteKanjis = async () => {
    try {
      const data = await getUserFavourite(userInfo?.id, "kanji");
      setKanjiItems(data);
      // console.log({data})
    } catch (error) {}
  };
  const getFavouriteJukugos = async () => {
    try {
      const data = await getUserFavourite(userInfo?.id, "jukugo");
      setJukugoItems(data);
      // console.log({data})
    } catch (error) {}
  };

  useEffect(() => {
    if (userInfo) {
      getFavouriteKanjis();
      getFavouriteJukugos();
    }
  }, [userInfo]);

  useEffect(() => {
    if (userInfo) {
      fetchUserPracticeKanji();
      fetchUserPracticeJukugo();
    }
  }, [kanjiItems]);

  return {
    kanjiItems,
    jukugoItems
  };
};

export default hook;
