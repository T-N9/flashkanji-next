import { useState } from "react";

import { auth, provider } from "@/firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const hook = () => {
  const [logInDone, setLogInDone] = useState(false);
  const [userInfo, setUserInfo] = useState({});

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;

      setUserInfo({
        id : user.uid,
        email: user.email,
        name: user.displayName,
      });

      // You can store the user information in your application's state or in local storage
      setLogInDone(true);
      console.log({ user });
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

export default hook;
