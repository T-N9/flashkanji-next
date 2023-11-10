import React from "react";

/* Components */
import FlashCard from "@/components/FlashCards";
import { LoadingGround } from "../common/LoadingGround";
import { FlashSettings } from "./FlashSettings";

/* Hook */
import Hook from "./hook";

export default function FlashGround() {
  const { kanji, isLoading } = Hook();

  return (
    <section className={`flex bg-light min-h-screen flex-col items-center p-4`}>
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
    </section>
  );
}
