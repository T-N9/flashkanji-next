import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleJukugoDetailModal, setJukugoDetail } from "@/store/generalSlice";

export const useContainer = () => {
  const dispatch = useDispatch();

  const handleOpen = (character) => {
    dispatch(toggleJukugoDetailModal());

    dispatch(setJukugoDetail(character));
  };

  const { isJukugoDetailModalOpen, jukugoDetail } = useSelector(
    (state) => state.generalReducer
  );
  const [currentStrokeWord, setCurrentStrokeWord] = useState("");

  useEffect(() => {
    if (jukugoDetail?.split("")[0] === "～") {
      setCurrentStrokeWord(jukugoDetail?.split("")[1]);
    } else {
      setCurrentStrokeWord(jukugoDetail?.split("")[0]);
    }
  }, [jukugoDetail]);

  // console.log({ i:jukugoDetail?.split("")[0] });

  return {
    isJukugoDetailModalOpen,
    jukugoDetail,
    dispatch,
    currentStrokeWord,

    /* action */
    handleOpen,
    setCurrentStrokeWord,
  };
};
