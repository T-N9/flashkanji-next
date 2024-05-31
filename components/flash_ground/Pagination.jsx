// import React, { useEffect } from "react";
// import { Button, IconButton } from "@material-tailwind/react";
// import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

// /* Hook */
// import useContainer from "./useContainer";

// export function Pagination() {
//   const {
//     noChapters,
//     dispatch,
//     selectedChapter,
//     setSelectedMultiChapters,
//     fetchByChapterData,
//     level,
//     setSelectedChapter,
//     isPaginated,
//     shuffledData,
//     setKanji,
//     isShuffledMode,
//     isLoading,
//   } = useContainer();

//   const [currentPages, setCurrentPages] = React.useState([]);

//   const getItemProps = (index) => ({
//     variant: parseInt(selectedChapter) === index ? "filled" : "text",
//     // color: "indigo",
//     className : `font-english ${parseInt(selectedChapter) === index ? "bg-dark" : "bg-transparent"}`,
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
//     }else if(selectedChapter > currentPages[currentPages.length -1]) {
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

//   return (
//     <div
//       className={`flex items-center font-english my-5 ${
//         isLoading && "select-none pointer-events-none opacity-70"
//       }`}
//     >
//       <Button
//         variant="text"
//         className="hidden md:flex text-dark items-center"
//         onClick={prev}
//         disabled={selectedChapter === 1}
//       >
//         <IoIosArrowRoundBack className="h-4 w-4" />
//       </Button>
//       <div className="flex items-center">
//         {selectedChapter > 4 && (
//           <>
//             <IconButton {...getItemProps(1)}>{1}</IconButton>
//             <span className="text-dark">...</span>
//           </>
//         )}
//         {currentPages?.map((chapter, index) => {
//           return (
//             <IconButton key={index} {...getItemProps(chapter)}>
//               {chapter}
//             </IconButton>
//           );
//         })}

//         {currentPages[currentPages.length - 1] !==
//           noChapters[noChapters.length - 1] && (
//           <>
//             <span className="text-dark">...</span>
//             <IconButton {...getItemProps(noChapters.length)}>
//               {noChapters.length}
//             </IconButton>
//           </>
//         )}
//       </div>
//       <Button
//         variant="text"
//         className="items-center text-dark hidden md:flex"
//         onClick={next}
//         disabled={selectedChapter === noChapters.length}
//       >
//         <IoIosArrowRoundForward className="h-4 w-4" />
//       </Button>
//     </div>
//   );
// }
