// import useContainer from "./useContainer";

// import Image from "next/image";

// import { Button } from "@material-tailwind/react";

// /* Components */
// import { FlashDetailModal } from "../flash_detail_modal/FlashDetailModal";
// import FavouriteItems from "../favourite_items/FavouriteItems";
// import TargetedItems from "../targeted_items/TargetedItems";
// import { JukugoDetailModal } from "../jukugo_detail_modal/JukugoDetailModal";

// const UserProfile = () => {
//   const { userInfo, handleLogOut } = useContainer();

//   // console.log({userInfo})

//   return (
//     <>
//       <section className=" my-5 flex flex-col gap-2 justify-center items-center">
//         <div className="bg-gray-100 flex gap-4 p-8 rounded-lg shadow-md max-w-md mx-auto">
//           <Image
//             src={userInfo?.avatar}
//             alt={`${userInfo?.name}'s avatar`}
//             className="w-20 h-20 mx-auto rounded-full mb-4"
//             width={80}
//             height={80}
//           />
//           <div className="">
//             <h2 className="text-2xl font-semibold text-orange-800">
//               {userInfo?.name}
//             </h2>
//             <p className="text-gray-500">{userInfo?.email}</p>

//             <Button className="mt-4" onClick={handleLogOut} color="red">
//               Log Out
//             </Button>
//           </div>
//         </div>
//       </section>
//       <FavouriteItems />
//       <TargetedItems />
//       <FlashDetailModal />
//       <JukugoDetailModal />
//     </>
//   );
// };

// export default UserProfile;
