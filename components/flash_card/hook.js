import { useSelector, useDispatch } from "react-redux";
import { toggleDetailModal, setCurrentDetail } from "@/store/generalSlice";

export const Hook = () => {
  const dispatch = useDispatch();

  const { isDetailModalOpen } = useSelector((state) => state.generalReducer);

  const handleOpen = (character) => {
    dispatch(toggleDetailModal());

    dispatch(setCurrentDetail(character));
  };

  return {
    dispatch,
    isDetailModalOpen,

    /* action */
    handleOpen
  };
};
