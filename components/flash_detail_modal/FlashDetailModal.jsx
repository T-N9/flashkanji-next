import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

import { Spinner } from "@material-tailwind/react";

/* Hook */
import { Hook } from "./hook";
import KanjiViewer from "../kanji_stroke_viewer/KanjiStrokeViewer";

const KanjiVariants = ({ variants }) => {
  // console.log({ variants });
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {variants.map((variant, index) => (
        <div key={index} className="bg-white p-4 rounded-md shadow-md">
          <div>
            <strong>Written:</strong>{" "}
            <span className="text-gray-800">{variant.written}</span>
          </div>

          <div className="mt-2">
            <strong>Pronounced:</strong>{" "}
            <span className="text-gray-800">{variant.pronounced}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export function FlashDetailModal() {
  const {
    dispatch,
    isDetailModalOpen,
    currentDetail,
    charData,
    wordData,
    jukugoData,
    isLoading,
    renderStars,

    /* action */
    handleOpen,
  } = Hook();

  // console.log({ jukugoData });

  return (
    <>
      <Dialog
        className="font-writing-1"
        open={isDetailModalOpen}
        handler={() => handleOpen(null)}
      >
        <DialogHeader className="flex justify-between items-center shadow">
          <h1 className="text-6xl">{currentDetail}</h1>
          <p>Kanji information</p>
        </DialogHeader>
        <DialogBody className="h-[22rem] md:h-[20rem] bg-gray-100 overflow-y-scroll">
          {!isLoading ? (
            <div className="  font-primary-san">
              <div className="flex flex-col lg:flex-row gap-3">
                <div className="mb-4">
                  <strong className="text-info">Grade:</strong>{" "}
                  <span className="text-gray-900 font-bold">
                    {renderStars()}
                  </span>
                </div>
                <div className="mb-4 flex flex-col">
                  <div>
                    <strong className="text-info">Stroke Count:</strong>{" "}
                    <span className="text-gray-900 font-bold">
                      {charData?.stroke_count}
                    </span>
                  </div>
                  <KanjiViewer kanji={currentDetail} />
                </div>
                <div className="mb-4">
                  <strong className="text-info">Unicode:</strong>{" "}
                  <span className="text-gray-900 font-bold">
                    {charData?.unicode}
                  </span>
                </div>
              </div>

              <div className="flex gap-4 flex-wrap">
                <div className="mb-4">
                  <strong className="text-info">Meanings:</strong>
                  <ul className="list-disc pl-4 text-gray-900 font-bold">
                    {charData?.meanings.map((meaning, index) => (
                      <li key={index}>{meaning}</li>
                    ))}
                  </ul>
                </div>
                <div className="mb-4">
                  <strong className="text-info">On Readings:</strong>
                  <ul className="list-disc pl-4   text-gray-900 font-bold">
                    {charData?.on_readings.length > 0
                      ? charData?.on_readings.map((onReading, index) => (
                          <li key={index}>{onReading}</li>
                        ))
                      : "-"}
                  </ul>
                </div>

                <div className="mb-4">
                  <strong className="text-info">Kun Readings:</strong>
                  <ul className="list-disc pl-4  text-gray-900 font-bold">
                    {charData?.kun_readings.length > 0
                      ? charData?.kun_readings.map((kunReading, index) => (
                          <li key={index}>{kunReading}</li>
                        ))
                      : "-"}
                  </ul>
                </div>
              </div>

              {jukugoData?.length > 0 && (
                <div className="mt-4">
                  <strong className="text-info">Related jukugo:</strong>

                  <div className="flex gap-2 flex-wrap mt-3">
                    {jukugoData?.map((item, index) => {
                      return (
                        <div
                          className="bg-white p-2 rounded-md shadow-md"
                          key={index}
                        >
                          <p className="flex justify-between flex-col">
                            <span className="text-black text-2xl">
                              {item.jukugo_char}
                            </span>{" "}
                            <span className="text-sm">{item.hiragana}</span>
                            <span className="text-sm">
                              {item.english_meaning}
                            </span>
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              <div className="mt-4 hidden">
                <strong className="text-info">Example words:</strong>

                <div className="flex gap-3 flex-wrap">
                  {wordData?.map((kanjiVariant, index) => (
                    <div key={index} className="mb-6">
                      <ul className="list-disc pl-4 text-gray-800 mb-3 font-bold">
                        {kanjiVariant.meanings[0].glosses.map((gloss, i) => (
                          <li key={i}>{gloss}</li>
                        ))}
                      </ul>

                      <KanjiVariants variants={kanjiVariant.variants} />
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 hidden">
                <strong className="text-info">Notes:</strong>
                <p className="text-gray-700">
                  {charData?.notes.length > 0
                    ? charData?.notes
                    : "No notes available"}
                </p>
              </div>
            </div>
          ) : (
            <div className="w-full h-full flex justify-center items-center">
              <Spinner />
            </div>
          )}
        </DialogBody>
        <DialogFooter className="flex justify-between items-center">
          <p className="text-xs">
            Provided by{" "}
            <a className="text-info" href="http://www.kanjiapi.dev">
              www.kanjiapi.dev
            </a>{" "}
          </p>
          <Button
            variant="text"
            color="red"
            onClick={() => handleOpen(null)}
            className="mr-1"
          >
            <span>Close</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
