import React, { useEffect } from "react";

/* Components */
import FlashCard from "@/components/flash_card/FlashCard";
import { LoadingGround } from "../common/LoadingGround";
import { FlashSettings } from "./FlashSettings";
import { Pagination } from "./Pagination";
import { SpeedDialMenu } from "../common/SpeedDialMenu";

/* Hook */
import useContainer from "./useContainer";
import AdsComponent from "../adsComponent/AdsComponent";

export default function FlashGround() {
  const {
    kanji,
    isLoading,
    toggleFlashModal,
    dispatch,
    isSettingOpen,
    isPaginated,
    isIgnite,
  } = useContainer();

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        (adsbygoogle = window.adsbygoogle || []).push({});
        console.log("Ads initialized");
      } catch (e) {
        console.error("Adsense error: ", e);
      }
    }
  }, []);

  return (
    <section
      className={`${
        isIgnite && "select-none pointer-events-none"
      } max-w-[1440px] mx-auto relative flex bg-white flex-col items-center md:p-4`}
    >
      {/* <div className="my-5 w-full h-[100px]">
        <AdsComponent
          isDisplay={false}
          layoutKey="-f9+5v+4m-d8+7b"
          slotId={"1053749028"}
        />
      </div> */}
      <FlashSettings />

      <div
        className={`${
          isSettingOpen
            ? "translate-y-0"
            : "-translate-y-[250px] lg:-translate-y-36  mt-4"
        }  relative transition-all duration-200 ease-out container w-full flex flex-col items-center p-3`}
      >
        {isPaginated && <Pagination />}
        <div className="flex w-full justify-center gap-4">
          <div className="w-[300px] hidden lg:block">
            <AdsComponent isDisplay={true} slotId={"7647610361"} />
          </div>
          {isLoading || isIgnite ? (
            <LoadingGround mode={1} />
          ) : (
            <>
              {kanji?.length !== 0 ? (
                <div
                  className={`max-w-[550px] grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-4`}
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
          <div className="w-[300px] hidden lg:block">
            <AdsComponent isDisplay={true} slotId={"7647610361"} />
          </div>
        </div>

        {isPaginated && <Pagination />}
      </div>
      <div className="my-5 w-full">
        <AdsComponent
          isDisplay={false}
          layoutKey="-f9+5v+4m-d8+7b"
          slotId={"1053749028"}
        />
      </div>
      <SpeedDialMenu />
    </section>
  );
}
