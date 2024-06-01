import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/modal";
import Button from "../ui/button/Button";

import { useContainer } from "./useContainer";

import KanjiStrokeViewer from "../kanji_stroke_viewer/KanjiStrokeViewer";
import { KanjiGif } from "../kanji_gif/KanjiGif";

export const JukugoDetailModal = () => {
  const {
    isJukugoDetailModalOpen,
    jukugoDetail,
    currentStrokeWord,
    setCurrentStrokeWord,
    handleOpen,
  } = useContainer();

  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  return (
    <>
      <Modal
        className="font-writing-1"
        isOpen={isJukugoDetailModalOpen}
        backdrop="blur"
        size="4xl"
        onOpenChange={onOpenChange}
        onClose={() => {
          handleOpen(null);
          onClose();
        }}
        scrollBehavior="inside"
      >
        <ModalContent>
          <ModalHeader className="flex justify-between text-orange-500 items-center shadow">
            <p>Jukugo information</p>
          </ModalHeader>
          <ModalBody className=" bg-gradient-orange-card overflow-y-auto">
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
              <KanjiGif kanji={currentStrokeWord} />
            </div>
          </ModalBody>
          <ModalFooter className="flex justify-center md:justify-between items-center">
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
              </a>{" "}
              ,{" "}
              <a
                className="text-orange-500 "
                target="_blank"
                href="https://github.com/jcsirot/kanji.gif"
              >
                KanjiGIF
              </a>{" "}
            </p>
            <Button
              onClick={() => handleOpen(null)}
            >
              <span>Close</span>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
