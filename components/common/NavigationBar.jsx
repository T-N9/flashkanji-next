import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import Image from "next/image";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
} from "@nextui-org/navbar";
import Button from "../ui/button/Button";
import { Logo } from "./Logo";

import { setUserInfo } from "@/store/generalSlice";

export function NavigationBar() {
  const { userInfo } = useSelector((state) => state.generalReducer);
  const dispatch = useDispatch();
  const path = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (!userInfo) {
        const user =
          window && JSON.parse(localStorage.getItem("flashkanji_user"));

        dispatch(setUserInfo(user));
      }
    }
  }, []);

  const navList = (
    <>
      {/* list */}
      <NavbarItem isActive={path === "/"}>
        <Link href={"/"}>Home</Link>
      </NavbarItem>

      <NavbarItem isActive={path === "/kanji"}>
        <Link href={"/kanji"}>Kanji</Link>
      </NavbarItem>
      <NavbarItem isActive={path === "/quiz"}>
        <Link href={"/quiz"}>Quiz</Link>
      </NavbarItem>
      <NavbarItem isActive={path === "/jukugo"}>
        <Link href={"/jukugo"}>Jukugo</Link>
      </NavbarItem>
    </>
  );

  return (
    <Navbar isBordered isBlurred={false}>
      <NavbarBrand>
        <Link href={"/"}>
          <Logo className="cursor-pointer" />
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-6" justify="center">
        {navList}
      </NavbarContent>
      <NavbarContent className="hidden lg:flex" justify="end">
        <div className="flex items-center gap-x-1">
          {userInfo ? (
            <NavbarItem>
              <Link href={"/profile"}>
                <Image
                  className="hidden lg:inline-block rounded-full cursor-pointer border-2 border-border_orange"
                  width={40}
                  height={40}
                  src={userInfo?.avatar}
                  alt="user avatar"
                />
              </Link>
            </NavbarItem>
          ) : (
            // <NavbarItem>
            <Link href={"/login"}>
              <Button>
                <span>Log In</span>
              </Button>
            </Link>
            // </NavbarItem>
          )}
        </div>
      </NavbarContent>
      <div className="block lg:hidden">
        <NavbarMenuToggle />
      </div>
      <NavbarMenu>
        <div className="container flex flex-col gap-6 mx-auto">
          <div className="text-gray-700 gap-6 flex flex-col text-center">
            {navList}
          </div>
          <div className="flex justify-center items-center gap-x-1">
            {userInfo ? (
              <Link href={"/profile"}>
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
              <Link href={"/login"}>
                <Button>
                  <span>Log In</span>
                </Button>
              </Link>
            )}
          </div>
        </div>
      </NavbarMenu>
    </Navbar>
  );
}
