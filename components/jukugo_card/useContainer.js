import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleJukugoDetailModal, setJukugoDetail } from "@/store/generalSlice";
import { useRouter } from "next/router";

import { handleUserPractice } from "@/services/fetchers";

export const useContainer = (item) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const { isJukugoDetailModalOpen, userInfo } = useSelector((state) => state.generalReducer);
  const { isShowMeaning,jukugoPracticeData } = useSelector((state) => state.jukugoGroundReducer);
  const [isFavourite, setIsFavourite] = useState(false);
  const [isNeedMore, setIsNeedMore] = useState(false);

  const handleOpen = (word) => {
    dispatch(toggleJukugoDetailModal());

    dispatch(setJukugoDetail(word));
  };

  const handleClickFavourite = async (item_id) => {
    if (userInfo) {
      let passInfo = {
        user_id: userInfo.id,
        item_id: item_id,
        item_type: "jukugo",
        is_favourite: !isFavourite === true ? 1 : 0,
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
        item_type: "jukugo",
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
      if (isItemIdIncluded(jukugoPracticeData, item.id)) {
        const practice_item_data = getItemById(jukugoPracticeData, item.id);
        // console.log({ practice_item_data });

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
  }, [jukugoPracticeData]);

  return {
    dispatch,
    isJukugoDetailModalOpen,
    isShowMeaning,
    isFavourite,
    isNeedMore,

    /* action */
    handleOpen,
    handleClickFavourite,
    handleClickTarget,
  };
};
