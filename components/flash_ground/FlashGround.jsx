import React from "react";

/* Components */
import FlashCard from "@/components/flash_card/FlashCard";
import { LoadingGround } from "../common/LoadingGround";
import { FlashSettings } from "./FlashSettings";
import { Pagination } from "./Pagination";
import { SpeedDialMenu } from "../common/SpeedDialMenu";

/* Hook */
import Hook from "./hook";

export default function FlashGround() {
  const {
    kanji,
    isLoading,
    toggleFlashModal,
    dispatch,
    isSettingOpen,
    isPaginated,
  } = Hook();

  return (
    <section
      className={` relative flex bg-light min-h-screen flex-col items-center md:p-4`}
    >
      <FlashSettings />

      <div
        className={`${
          isSettingOpen
            ? "translate-y-0"
            : "-translate-y-[250px] lg:-translate-y-36"
        } relative transition-all duration-200 ease-out container w-full flex flex-col items-center p-3`}
      >
        {isPaginated && <Pagination />}
        {isLoading ? (
          <LoadingGround mode={1} />
        ) : (
          <div
            className={`grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4`}
          >
            {kanji?.map((item, index) => (
              <FlashCard key={index} item={item} />
            ))}
          </div>
        )}

        {isPaginated && <Pagination />}
      </div>

      <SpeedDialMenu />
    </section>
  );
}
