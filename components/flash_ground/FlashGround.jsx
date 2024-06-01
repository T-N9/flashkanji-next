import React from "react";

/* Components */
import FlashCard from "@/components/flash_card/FlashCard";
import { LoadingGround } from "../common/LoadingGround";
import { FlashSettings } from "./FlashSettings";
import { Pagination } from "./Pagination";
// import { SpeedDialMenu } from "../common/SpeedDialMenu";

/* Hook */
import useContainer from "./useContainer";

export default function FlashGround() {
  const {
    kanji,
    isLoading,
    toggleFlashModal,
    dispatch,
    isSettingOpen,
    isPaginated,
    isIgnite
  } = useContainer();

  return (
    <section
      className={`${isIgnite && 'select-none pointer-events-none'} max-w-[1440px] mx-auto relative flex bg-white min-h-screen flex-col items-center md:p-4`}
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
        {isLoading || isIgnite ? (
          <LoadingGround mode={1} />
        ) : (
          <>
            {kanji?.length !== 0 ? (
              <div
                className={`grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4`}
              >
                {kanji?.map((item, index) => (
                  <FlashCard key={index} item={item} />
                ))}
              </div>
            ) : (
              <div className="w-full h-[415px] flex justify-center items-center">
                <h1 className="text-orange-500 text-3xl">Coming Soon</h1>
              </div>
            )}
          </>
        )}

        {isPaginated && <Pagination />}
      </div>

      {/* <SpeedDialMenu /> */}
    </section>
  );
}
