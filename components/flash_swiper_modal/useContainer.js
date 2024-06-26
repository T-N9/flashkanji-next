import { useSelector, useDispatch } from "react-redux";

/* actions */
import { toggleFlashModal } from "@/store/generalSlice";

export const useContainer = () => {
  const { kanji, isLoading } =
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
