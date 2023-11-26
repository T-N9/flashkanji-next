import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { toggleDetailModal, setCurrentDetail } from "@/store/generalSlice";

/* fetchers */
import { fetchCharData, fetchWordData } from "@/services/kanjiapi";
export const Hook = () => {
  const dispatch = useDispatch();
  const [charData, setCharData] = useState(null);
  const [wordData, setWordData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { isDetailModalOpen, currentDetail } = useSelector(
    (state) => state.generalReducer
  );

  const handleOpen = (character) => {
    dispatch(toggleDetailModal());

    dispatch(setCurrentDetail(character));
  };

  useEffect(() => {
    currentDetail && getCharData();
    currentDetail && getWordData();
  }, [currentDetail]);

  // Function to generate stars based on the grade
  const renderStars = () => {
    const stars = Array.from({ length: charData?.grade }, (_, index) => (
      <span key={index} className="">
        ⭐
      </span>
    ));
    return stars;
  };

  const getCharData = async () => {
    setIsLoading(true);
    try {
      let charData = await fetchCharData(currentDetail);
      // console.log(charData);
      dispatch(setCharData(charData));
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  const getWordData = async () => {
    setIsLoading(true);
    try {
      let wordData = await fetchWordData(currentDetail);
      console.log(wordData.slice(0,5));
      dispatch(setWordData(wordData.slice(0,5)));
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  }

  return {
    dispatch,
    isDetailModalOpen,
    currentDetail,
    charData,
    wordData,
    isLoading,
    renderStars,

    /* action */
    handleOpen,
  };
};
