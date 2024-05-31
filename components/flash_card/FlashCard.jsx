// import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { Button } from "@material-tailwind/react";

// /* Icons */
// import { FaInfoCircle } from "react-icons/fa";
// import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";
// import { VscTarget } from "react-icons/vsc";

// /* Hook */
// import { useContainer } from "./useContainer";

// const FlashCard = ({ item, isSwiped = false, isInfoShow = true }) => {
//   const [isFlipped, setIsFlipped] = useState(false);

//   const { isFlippedMode } = useSelector((state) => state.flashGroundReducer);

//   const {
//     isFavourite,
//     isNeedMore,

//     /* action */
//     handleOpen,
//     handleClickFavourite,
//     handleClickTarget,
//   } = useContainer(item);

//   useEffect(() => {
//     setIsFlipped(false);
//   }, [item]);

//   useEffect(() => {
//     setIsFlipped(isFlippedMode);
//   }, [isFlippedMode]);

//   return (
//     <div className={`relative`}>
//       <div
//         onClick={() => setIsFlipped((prev) => !prev)}
//         className={` ${
//           isSwiped
//             ? "bg-white border-border_orange"
//             : "bg-gradient-orange-card border-border_orange border-opacity-50"
//         } relative font-writing-1 text-black p-5 rounded-md card min-w-[150px] border-4   lg:min-w-[200px] shadow-md ${
//           isFlipped && "flipped"
//         }`}
//       >
//         {!isSwiped && <span className="front text-gray-400">{item.id}</span>}
//         <p
//           className={`${
//             isSwiped ? "text-[9rem] md:text-[18rem]" : "text-7xl"
//           } front text-dark absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}
//         >
//           {item.kanji_character}
//         </p>
//         <div
//           className={`back absolute w-full top-[30%] -left-[0%] -translate-x-1/2 -translate-y-1/2 flex flex-col gap-5 p-2 ${
//             isSwiped ? "text-2xl md:text-[3rem]" : "text-xl"
//           }`}
//         >
//           <p className="text-amber-900 flex flex-wrap justify-center">
//             {item.kunyomi?.split(",").map((i, index) => {
//               return (
//                 <React.Fragment key={index}>
//                   <span>{i}</span>
//                   {index !== item.kunyomi?.split(",").length - 1 && ", "}
//                 </React.Fragment>
//               );
//             })}{" "}
//           </p>
//           <p className="text-success  flex flex-wrap justify-center">
//             {item.onyomi?.split(",").map((i, index) => {
//               return (
//                 <React.Fragment key={index}>
//                   <span>{i}</span>
//                   {index !== item?.onyomi.split(",").length - 1 && ","}
//                 </React.Fragment>
//               );
//             })}{" "}
//           </p>
//           <p>{item.meaning}</p>
//         </div>
//       </div>

//       {isInfoShow && (
//         <div className="absolute -right-2 top-0">
//           <Button
//             onClick={() => handleOpen(item.kanji_character)}
//             size="sm"
//             className="mt-2 mx-auto text-xs p-2 rounded-full bg-[#FA8245] table"
//           >
//             <FaInfoCircle size={20} />
//           </Button>
//         </div>
//       )}
//       <div className="absolute -right-1 top-12">
//         <Button
//           onClick={() => handleClickFavourite(item.id)}
//           size="sm"
//           className={`mt-2 mx-auto text-xs p-1 rounded-full ${
//             isFavourite ? "bg-[#ff6363]" : "bg-white"
//           } table`}
//           title="Mark Favourite"
//         >
//           {isFavourite ? (
//             <IoIosHeart size={20} color="#white" />
//           ) : (
//             <IoIosHeartEmpty size={20} color="#ff6363" />
//           )}
//         </Button>
//       </div>

//       <div className="absolute -right-1 top-[5.3rem]">
//         <Button
//           onClick={() => handleClickTarget(item.id)}
//           size="sm"
//           className={`mt-2 mx-auto text-xs p-1 rounded-full ${
//             isNeedMore ? "bg-[#ff6363]" : "bg-white"
//           } table`}
//           title="Mark Target"
//         >
//           {isNeedMore ? (
//             <VscTarget size={20} color="white" />
//           ) : (
//             <VscTarget size={20} color="#ff6363" />
//           )}
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default FlashCard;
