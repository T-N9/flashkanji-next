import { useSelector, useDispatch } from "react-redux";

/* actions */
import { toggleFlashModal } from "@/store/generalSlice";

export const Hook = () => {
  const { kanji, level, selectedChapter, selectedLevel, isLoading } =
    useSelector((state) => state.flashGroundReducer);

  const { isFlashModalOpen } = useSelector((state) => state.generalReducer);

  const dispatch = useDispatch();

  return {
    kanji,
    isLoading,
    isFlashModalOpen,
    dispatch,

    /* action */
    toggleFlashModal
  };
};
