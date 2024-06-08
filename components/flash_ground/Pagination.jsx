import React, { useEffect, useState } from "react";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { Pagination as NextPagination } from "@nextui-org/react";
import { Button } from "@nextui-org/react";

/* Hook */
import useContainer from "./useContainer";

export function Pagination() {
  const {
    noChapters,
    dispatch,
    selectedChapter,
    setSelectedMultiChapters,
    fetchByChapterData,
    level,
    setSelectedChapter,
    isPaginated,
    shuffledData,
    setKanji,
    isShuffledMode,
    isLoading,
  } = useContainer();

  const [currentPage, setCurrentPage] = useState(selectedChapter);

  useEffect(() => {
    fetchByChapterData(currentPage, level);
    dispatch(setSelectedChapter(currentPage));
  }, [currentPage]);

  useEffect(() => {
    setCurrentPage(selectedChapter);
  }, [selectedChapter]);

  return (
    <>
      <div className={`flex gap-2 my-5 ${isLoading && 'select-none pointer-events-none opacity-65'}`}>
        <Button
          size="sm"
          variant="flat"
          color="warning"
          onPress={() => setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev))}
          isIconOnly
        >
          <IoIosArrowRoundBack className="h-4 w-4" />
        </Button>
        <NextPagination
          total={noChapters?.length}
          page={selectedChapter}
          onChange={setCurrentPage}
          color="warning"
          size="sm"
          disableAnimation={false}
        />
        <Button
          size="sm"
          variant="flat"
          color="warning"
          onPress={() =>
            setCurrentPage((prev) => (prev < noChapters?.length ? prev + 1 : prev))
          }
          isIconOnly
        >
          <IoIosArrowRoundForward className="h-4 w-4" />
        </Button>
      </div>
    </>
  );
}
