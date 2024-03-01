import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import Image from "next/image";
import {
  Navbar,
  Collapse,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import { Logo } from "./Logo";

import { setUserInfo } from "@/store/generalSlice";

export function NavigationBar() {
  const [openNav, setOpenNav] = useState(false);

  const { userInfo } = useSelector((state) => state.generalReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (typeof window !== "undefined") {
      window?.addEventListener(
        "resize",
        () => window?.innerWidth >= 960 && setOpenNav(false)
      );

      if (!userInfo) {
        const user =
          window && JSON.parse(localStorage.getItem("flashkanji_user"));

        dispatch(setUserInfo(user));
      }
    }
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 font-english flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {/* list */}
      <li>
        <Link href={"/"}>
          <Typography
            href="/"
            color="blue-gray"
            className="font-normal transition-colors hover:text-orange-500 focus:text-orange-500 font-english"
          >
            Home
          </Typography>
        </Link>
      </li>
      <li>
        <Link href={"/kanji"}>
          <Typography
            href="/kanji"
            color="blue-gray"
            className="font-normal transition-colors hover:text-orange-500 focus:text-orange-500 font-english"
          >
            Kanji
          </Typography>
        </Link>
      </li>
      <li>
        <Link href={"/quiz"}>
          <Typography
            href="/"
            color="blue-gray"
            className=" rainbow-text font-extrabold drop-shadow-lg transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            Quiz
          </Typography>
        </Link>
      </li>
      <li>
        <Link href={"/jukugo"}>
          <Typography
            href="/jukugo"
            color="blue-gray"
            className="font-normal transition-colors hover:text-orange-500 focus:text-orange-500 font-english"
          >
            Jukugo
          </Typography>
        </Link>
      </li>
    </ul>
  );

  return (
    <Navbar className="mx-auto max-w-screen-xl px-4 py-2 lg:px-8 lg:py-4 mb-2">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Link href={"/"}>
          <Logo className="cursor-pointer" />
        </Link>

        <div className="hidden lg:block">{navList}</div>
        <div className="flex items-center gap-x-1">
          {userInfo ? (
            <Link href={"/profile"} legacyBehavior>
              <Image
                className="hidden lg:inline-block rounded-full cursor-pointer border-2 border-border_orange"
                width={40}
                height={40}
                src={userInfo?.avatar}
                alt="user avatar"
              />
            </Link>
          ) : (
            <Link href={"/login"} legacyBehavior>
              <Button
                variant="gradient"
                size="sm"
                className="hidden lg:inline-block"
              >
                <span>Log In</span>
              </Button>
            </Link>
          )}
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <div className="container mx-auto">
          <div className="text-gray-700 text-center">{navList}</div>
          <div className="flex justify-center items-center gap-x-1">
            {userInfo ? (
              <Link href={"/profile"} legacyBehavior>
                <div className="flex justify-center items-center gap-2">
                  <Image
                    className="inline-block lg:hidden rounded-full cursor-pointer border-2 border-border_orange"
                    width={40}
                    height={40}
                    src={userInfo?.avatar}
                    alt="user avatar"
                  />
                  <p className="text-orange-500">{userInfo?.name}</p>
                </div>
              </Link>
            ) : (
              <Link href={"/login"} legacyBehavior>
                <Button fullWidth variant="gradient" size="sm" className="">
                  <span>Log In</span>
                </Button>
              </Link>
            )}
          </div>
        </div>
      </Collapse>
    </Navbar>
  );
}
