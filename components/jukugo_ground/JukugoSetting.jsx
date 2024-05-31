// import useContainer from "./useContainer";

// /* Compoents */
// import { Select, Option, Button, Switch } from "@material-tailwind/react";

// import { BiShuffle } from "react-icons/bi";
// import { GiCardRandom } from "react-icons/gi";
// import { MdFlipCameraAndroid } from "react-icons/md";

// export const JukugoSetting = () => {
//   const {
//     jukugo,
//     isLoading,
//     isFlippedMode,
//     isShuffledMode,
//     selectedChapter,
//     selectedLevel,
//     noChapters,
//     isPaginated,
//     dispatch,
//     level,
//     isShowMeaning,

//     shuffleNowData,
//     fetchRandomJukugoByLevelData,
//     setSelectedChapter,
//     setSelectedLevel,
//     fetchByLevelData,
//     fetchByChapterData,
//     setIsFlippedMode,
//     toggleShowMeaning,
//   } = useContainer();

//   return (
//     <section
//       className={`container z-[5000] border-2 bg-gradient-orange-card border-orange-400 relative flex flex-col gap-3 justify-center items-center bg-white rounded-md shadow transform duration-300 
//    w-full mx-auto max-w-screen-xl px-4 py-4 lg:px-8 lg:py-4 mb-4`}
//     >
//       <div
//         className={`flex w-full lg:w-auto mx-auto flex-col lg:flex-row justify-center gap-4 items-center transition-all duration-200 ease-in `}
//       >
//         <div className="flex gap-4 w-full md:w-fit">
//           <div className="flex w-full md:w-36 min-w-36 select-box flex-col gap-6">
//             <Select
//               value={selectedLevel.toString()}
//               color="orange"
//               size="md"
//               className="bg-white"
//               label="Select Level"
//               onChange={() => {}}
//             >
//               {[5, 4, 3, 2, 1].map((level) => (
//                 <Option
//                   key={level}
//                   onClick={() => {
//                     fetchByLevelData(level);
//                     dispatch(setSelectedLevel(`N${level}`));
//                     dispatch(setSelectedChapter(1));
//                   }}
//                   value={"N" + level.toString()}
//                   disabled={level <= 2} // Assuming that levels 3 and above are disabled
//                 >
//                   N{level}
//                 </Option>
//               ))}
//             </Select>
//           </div>
//           <div className="flex w-full md:w-36 min-w-36 select-box flex-col gap-6">
//             <Select
//               value={selectedChapter.toString()}
//               color="orange"
//               size="md"
//               className="bg-white"
//               label="Select Chapter"
//               onChange={() => {}}
//             >
//               {noChapters?.map((item) => {
//                 return (
//                   <Option
//                     onClick={() => {
//                       fetchByChapterData(item, level);
//                       dispatch(setSelectedChapter(item));
//                     }}
//                     key={item}
//                     value={item.toString()}
//                   >
//                     {item}
//                   </Option>
//                 );
//               })}
//             </Select>
//           </div>
//         </div>
//         <div className="flex-1 flex gap-2">
//           <Button
//             onClick={() => shuffleNowData(jukugo, jukugo.length)}
//             variant="outlined"
//             className="outline-info border-info text-info rounded-full"
//             title="Shuffle"
//           >
//             <BiShuffle size={20} />
//           </Button>

//           <Button
//             onClick={() => {
//               fetchRandomJukugoByLevelData(20);
//               dispatch(setSelectedChapter(""));
//               dispatch(setSelectedLevel(""));
//             }}
//             variant="gradient"
//             className="bg-gradient-radial rounded-full"
//             title="Randomize"
//           >
//             <GiCardRandom size={20} />
//           </Button>
//         </div>
//         <div className="flex-1 flex gap-2">
//           <div className="flex flex-col gap-1 justify-center items-center">
//             <p className="text-xs">Show Meaning</p>
//             <Switch
//               color="orange"
//               onChange={() => {
//                 dispatch(toggleShowMeaning());
//               }}
//               checked={isShowMeaning}
//             />
//           </div>
//           <Button
//             onClick={() => {
//               dispatch(setIsFlippedMode());
//             }}
//             variant="gradient"
//             className="bg-dark rounded-full"
//             title="Flip All"
//           >
//             <MdFlipCameraAndroid size={20} />
//           </Button>
//         </div>
//       </div>
//     </section>
//   );
// };
