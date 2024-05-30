import { useState } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

import { setUserInfo } from "@/store/generalSlice";

import { auth, provider } from "@/firebase";
import {
  signInWithPopup,
  GoogleAuthProvider,
  fetchSignInMethodsForEmail,
} from "firebase/auth";

import { handleUserSignUp } from "@/services/fetchers";
import { useSelector } from "react-redux";

const useContainer = () => {
  const [logInDone, setLogInDone] = useState(false);

  const { userInfo } = useSelector((state) => state.generalReducer);

  const router = useRouter();
  const dispatch = useDispatch();

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;

      const user = result.user;

      const donePhp = await handleUserSignUp({
        id: user.uid,
        email: user.email,
        name: user.displayName,
      });

      if (donePhp) {
        setLogInDone(true);

        localStorage.setItem(
          "flashkanji_user",
          JSON.stringify({
            id: user.uid,
            email: user.email,
            name: user.displayName,
            avatar: user.photoURL,
          })
        );

        dispatch(
          setUserInfo({
            id: user.uid,
            email: user.email,
            name: user.displayName,
            avatar: user.photoURL,
          })
        );
        router.push("/profile");
      } else {
        setLogInDone(false);
      }

      // You can store the user information in your application's state or in local storage
    } catch (error) {
      setLogInDone(false);
      console.error(error);
    }
  };

  return {
    logInDone,
    userInfo,

    handleLogin,
  };
};

export default useContainer;
