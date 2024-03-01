import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleDetailModal, setCurrentDetail } from "@/store/generalSlice";
import { useRouter } from "next/router";

import { handleUserPractice } from "@/services/fetchers";

export const Hook = (item) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const { isDetailModalOpen, userInfo } = useSelector(
    (state) => state.generalReducer
  );
  const { kanjiPracticeData } = useSelector(
    (state) => state.flashGroundReducer
  );

  const [isFavourite, setIsFavourite] = useState(false);
  const [isNeedMore, setIsNeedMore] = useState(false);

  const handleOpen = (character) => {
    dispatch(toggleDetailModal());
    dispatch(setCurrentDetail(character));
  };

  const handleClickFavourite = async (item_id) => {
    if (userInfo) {
      let passInfo = {
        user_id: userInfo.id,
        item_id: item_id,
        item_type: "kanji",
        is_favourite: isFavourite === true ? 0 : 1,
      };

      const processUserPractice = await handleUserPractice(passInfo);
      if (processUserPractice) {
        setIsFavourite((prev) => !prev);
      }
    } else {
      router.push("/login");
    }
  };
  const handleClickTarget = async (item_id) => {
    if (userInfo) {
      let passInfo = {
        user_id: userInfo.id,
        item_id: item_id,
        item_type: "kanji",
        practice_status: !isNeedMore === true ? "need_more" : "completed",
      };

      const processUserPractice = await handleUserPractice(passInfo);
      if (processUserPractice) {
        setIsNeedMore((prev) => !prev);
      }
    } else {
      router.push("/login");
    }
  };

  function isItemIdIncluded(array, targetItemId) {
    return array.some((item) => item.item_id === targetItemId);
  }

  function getItemById(array, targetItemId) {
    const foundItem = array.find((item) => item.item_id === targetItemId);
    return foundItem || null;
  }

  useEffect(() => {
    if (userInfo) {
      if (isItemIdIncluded(kanjiPracticeData, item.id)) {
        const practice_item_data = getItemById(kanjiPracticeData, item.id);

        if (practice_item_data?.isFavourite === "1") {
          setIsFavourite(true);
        } else {
          setIsFavourite(false);
        }

        if (practice_item_data?.practice_status === "need_more") {
          setIsNeedMore(true);
        } else {
          setIsNeedMore(false);
        }
      }
    }
  }, [kanjiPracticeData]);

  return {
    dispatch,
    isDetailModalOpen,
    isFavourite,
    isNeedMore,

    /* action */
    handleOpen,
    handleClickFavourite,
    handleClickTarget,
  };
};
