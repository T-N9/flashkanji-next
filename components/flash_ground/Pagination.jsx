import React, { useEffect, useState } from "react";
// import { Button, IconButton } from "@material-tailwind/react";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { Pagination as NextPagination } from "@nextui-org/react";
import {Button} from "@nextui-org/react";

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

  const [currentPages, setCurrentPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(selectedChapter);

  useEffect(() => {
    fetchByChapterData(currentPage, level);
    dispatch(setSelectedChapter(currentPage));
  }, [currentPage]);

  //   const getItemProps = (index) => ({
  //     variant: parseInt(selectedChapter) === index ? "filled" : "text",
  //     // color: "indigo",
  //     className: `font-english ${
  //       parseInt(selectedChapter) === index ? "bg-dark" : "bg-transparent"
  //     }`,
  //     onClick: () => {
  //       dispatch(setSelectedChapter(index));
  //       if (!isShuffledMode) {
  //         fetchByChapterData(index, level);
  //         dispatch(setSelectedMultiChapters([]));
  //       }
  //     },
  //   });

  //   useEffect(() => {
  //     if (isShuffledMode) {
  //       dispatch(
  //         setKanji(
  //           shuffledData.slice((selectedChapter - 1) * 10, selectedChapter * 10)
  //         )
  //       );
  //     }

  //     if (selectedChapter === 1) {
  //       setCurrentPages(noChapters.slice(0, selectedChapter + 4));
  //     } else if (selectedChapter === noChapters.length) {
  //       if (noChapters.length % 5 === 0) {
  //         setCurrentPages(
  //           noChapters.slice(selectedChapter - 5, noChapters.length)
  //         );
  //       } else {
  //         if (noChapters.length % 5 === 4) {
  //           setCurrentPages(
  //             noChapters.slice(
  //               selectedChapter - (noChapters.length % 5) - 1,
  //               noChapters.length
  //             )
  //           );
  //         } else {
  //           setCurrentPages(
  //             noChapters.slice(
  //               selectedChapter - (noChapters.length % 5) - 2,
  //               noChapters.length
  //             )
  //           );
  //         }
  //       }
  //     } else if (
  //       currentPages.indexOf(selectedChapter) === currentPages.length - 1 &&
  //       selectedChapter !== noChapters[noChapters.length - 1]
  //     ) {
  //       setCurrentPages(
  //         noChapters.slice(selectedChapter - 1, selectedChapter + 4)
  //       );
  //     } else if (selectedChapter < currentPages[0]) {
  //       setCurrentPages(
  //         noChapters.slice(selectedChapter - 4, selectedChapter + 1)
  //       );
  //     } else if (selectedChapter > currentPages[currentPages.length - 1]) {
  //       setCurrentPages(
  //         noChapters.slice(selectedChapter - 1, selectedChapter + 4)
  //       );
  //     }
  //   }, [selectedChapter]);

  //   // console.log({ selectedChapter, currentPages, noChapters });

  //   const next = () => {
  //     if (selectedChapter === noChapters.length) return;
  //     dispatch(setSelectedChapter(selectedChapter + 1));

  //     if (!isShuffledMode) {
  //       fetchByChapterData(selectedChapter + 1, level);
  //       dispatch(setSelectedMultiChapters([]));
  //     }
  //   };

  //   const prev = () => {
  //     if (selectedChapter === 1) return;

  //     dispatch(setSelectedChapter(selectedChapter - 1));

  //     if (!isShuffledMode) {
  //       fetchByChapterData(selectedChapter - 1, level);
  //       dispatch(setSelectedMultiChapters([]));
  //     }
  //   };

  //   console.log({ noChapters });
  return (
    // <div
    //   className={`flex items-center font-english my-5 ${
    //     isLoading && "select-none pointer-events-none opacity-70"
    //   }`}
    // >
    //   <button
    //     variant="text"
    //     className="hidden md:flex text-dark items-center"
    //     onClick={prev}
    //     disabled={selectedChapter === 1}
    //   >
    //     <IoIosArrowRoundBack className="h-4 w-4" />
    //   </button>
    //   <div className="flex items-center">
    //     {selectedChapter > 4 && (
    //       <>
    //         <button {...getItemProps(1)}>{1}</button>
    //         <span className="text-dark">...</span>
    //       </>
    //     )}
    //     {currentPages?.map((chapter, index) => {
    //       return (
    //         <button key={index} {...getItemProps(chapter)}>
    //           {chapter}
    //         </button>
    //       );
    //     })}

    //     {currentPages[currentPages.length - 1] !==
    //       noChapters[noChapters.length - 1] && (
    //       <>
    //         <span className="text-dark">...</span>
    //         <button {...getItemProps(noChapters.length)}>
    //           {noChapters.length}
    //         </button>
    //       </>
    //     )}
    //   </div>
    //   <button
    //     variant="text"
    //     className="items-center text-dark hidden md:flex"
    //     onClick={next}
    //     disabled={selectedChapter === noChapters.length}
    //   >
    //     <IoIosArrowRoundForward className="h-4 w-4" />
    //   </button>
    // </div>

    <>
      <div className="flex gap-2 my-5">
        <Button
          size="sm"
          variant="flat"
          color="warning"
          onPress={() => setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev))}
          isIconOnly
        >
          <IoIosArrowRoundBack className="h-4 w-4"/>
        </Button>
        <NextPagination
          total={noChapters?.length}
          page={selectedChapter}
          onChange={setCurrentPage}
          color="warning"
        />
        <Button
          size="sm"
          variant="flat"
          color="warning"
          onPress={() =>
            setCurrentPage((prev) => (prev < 10 ? prev + 1 : prev))
          }
          isIconOnly
        >
          <IoIosArrowRoundForward className="h-4 w-4"/>
        </Button>
      </div>
    </>
  );
}
