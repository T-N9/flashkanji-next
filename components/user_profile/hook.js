import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useRouter } from "next/router";

import { setUserInfo } from "@/store/generalSlice";

const hook = () => {
  const { userInfo } = useSelector((state) => state.generalReducer);
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    if (userInfo === null) {
      router.push("/login");
    }

    if (typeof window !== "undefined") {
      if (!userInfo) {
        const user =
          window && JSON.parse(localStorage.getItem("flashkanji_user"));

        dispatch(setUserInfo(user));
      }
    }
  }, []);

  const handleLogOut = () => {
    localStorage.removeItem('flashkanji_user');

    location.reload();
  }
  return {
    userInfo,

    handleLogOut
  };
};

export default hook;
