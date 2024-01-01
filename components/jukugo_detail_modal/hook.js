import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleJukugoDetailModal, setJukugoDetail } from "@/store/generalSlice";

export const Hook = () => {
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
    setCurrentStrokeWord(jukugoDetail?.split("")[0]);
  }, [jukugoDetail]);

  console.log({ i:jukugoDetail?.split("")[0] });

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
