import { useSelector, useDispatch } from "react-redux";

/* actions */
import { toggleJukugoModal } from "@/store/generalSlice";

export const useContainer = () => {
  const { jukugo, isLoading } =
    useSelector((state) => state.jukugoGroundReducer);

  const { isJukugoModalOpen } = useSelector((state) => state.generalReducer);

  const dispatch = useDispatch();

  return {
    jukugo,
    isLoading,
    isJukugoModalOpen,
    dispatch,

    /* action */
    toggleJukugoModal
  };
};
