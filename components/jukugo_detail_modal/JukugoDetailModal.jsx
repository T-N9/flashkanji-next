import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

import { Hook } from "./hook";

import KanjiStrokeViewer from "../kanji_stroke_viewer/KanjiStrokeViewer";
import { KanjiGif } from "../kanji_gif/KanjiGif";

export const JukugoDetailModal = () => {
  const {
    isJukugoDetailModalOpen,
    jukugoDetail,
    currentStrokeWord,
    setCurrentStrokeWord,
    handleOpen,
  } = Hook();

  return (
    <>
      <Dialog
        className="font-writing-1"
        open={isJukugoDetailModalOpen}
        handler={() => handleOpen(null)}
        size="sm"
      >
        <DialogHeader className="flex justify-between text-orange-600 items-center shadow">
          <p>Jukugo information</p>
        </DialogHeader>
        <DialogBody className=" bg-gradient-orange-card overflow-y-auto">
          <h1 className="text-4xl">{jukugoDetail}</h1>

          <div>
            <div>
              <p className="mt-5">Stroke Information</p>
              <div className="flex gap-2">
                {jukugoDetail?.split("").map((item, index) => {
                  return (
                    <div key={index}>
                      {item !== "～" && (
                        <div className="flex gap-3">
                          <h3
                            className="text-xl text-deep-orange-700 cursor-pointer"
                            onClick={() => setCurrentStrokeWord(item)}
                          >
                            {item}
                          </h3>
                          {jukugoDetail.split("").length - 1 !== index && "+"}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
            <KanjiGif kanji={currentStrokeWord}/>
          </div>
        </DialogBody>
        <DialogFooter className="flex justify-center md:justify-between items-center">
          <p className="text-xs font-english">
            Provided by{" "}
            <a
              className="text-orange-500 "
              target="_blank"
              href="http://www.kanjiapi.dev"
            >
              kanjiapi
            </a>{" "}
            ,{" "}
            <a
              className="text-orange-500 "
              target="_blank"
              href="https://kanjivg.tagaini.net/index.html"
            >
              KanjiVG
            </a>{" "},{" "}
            <a
              className="text-orange-500 "
              target="_blank"
              href="https://github.com/jcsirot/kanji.gif"
            >
              KanjiGIF
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
};
