// import { useEffect } from "react";
// import useContainer from "./useContainer";
// import { Button } from "@material-tailwind/react";
// import { useRouter } from "next/navigation";

// const GoogleLogIn = () => {
//   const {
//     userInfo,

//     handleLogin,
//   } = useContainer();

//   const router = useRouter();

//   useEffect(() => {
//     if (userInfo !== null) {
//       router.push("/profile");
//     }
//   }, [userInfo]);

//   return (
//     <div>
//       {!userInfo && <Button color="blue-gray" onClick={handleLogin}>Log in with Google</Button>}
//     </div>
//   );
// };

// export default GoogleLogIn;
