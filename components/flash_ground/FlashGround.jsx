import React from "react";

/* Components */
import FlashCard from "@/components/FlashCards";
import { LoadingGround } from "../common/LoadingGround";
import { FlashSettings } from "./FlashSettings";
import { Button } from "@material-tailwind/react";

/* Icons */
import { PiSlideshowBold } from "react-icons/pi";

/* Hook */
import Hook from "./hook";

export default function FlashGround() {
  const { kanji, isLoading, toggleFlashModal, dispatch } = Hook();

  return (
    <section
      className={`relative flex bg-light min-h-screen flex-col items-center p-4`}
    >
      <FlashSettings />
      {isLoading ? (
        <LoadingGround />
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {kanji?.map((item, index) => (
            <FlashCard key={index} item={item} />
          ))}
        </div>
      )}

      {!isLoading && (
        <div className="fixed bottom-10 right-5 z-50">
          <Button
            onClick={() => dispatch(toggleFlashModal())}
            className=" bg-gradient-radial flex justify-center items-center p-0 w-14 h-14 rounded-full shadow-lg"
          >
            <PiSlideshowBold size={20} />
          </Button>
        </div>
      )}
    </section>
  );
}
