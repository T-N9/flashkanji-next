import { useSelector, useDispatch } from "react-redux";
import { toggleJukugoDetailModal, setJukugoDetail } from "@/store/generalSlice";

export const Hook = () => {
  const dispatch = useDispatch();

  const { isJukugoDetailModalOpen } = useSelector((state) => state.generalReducer);

  const handleOpen = (word) => {
    dispatch(toggleJukugoDetailModal());

    dispatch(setJukugoDetail(word));
  };

  return {
    dispatch,
    isJukugoDetailModalOpen,

    /* action */
    handleOpen
  };
};
