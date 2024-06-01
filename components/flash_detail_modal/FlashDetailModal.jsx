import Button from "../ui/button/Button";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/modal";

import { Spinner } from "@nextui-org/react";

/* Hook */
import { useContainer } from "./useContainer";
import { KanjiGif } from "../kanji_gif/KanjiGif";

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
  } = useContainer();

  // console.log({ jukugoData });
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  return (
    <>
      <Modal
        className="font-writing-1"
        isOpen={isDetailModalOpen}
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
          {(onClose) => (
            <>
              <ModalHeader className="flex justify-between text-orange-500 items-center shadow">
                <h1 className="text-6xl">{currentDetail}</h1>
                {/* <p>Kanji information</p> */}
              </ModalHeader>
              <ModalBody className="h-[22rem] md:h-[20rem] bg-gradient-orange-card overflow-y-scroll">
                {!isLoading ? (
                  <div className="  font-primary-san">
                    <div className="flex flex-col lg:flex-row gap-y-3 gap-x-5">
                      <div className="mb-4">
                        <div>
                          <strong className="text-info font-english">
                            Grade:
                          </strong>{" "}
                          <span className="text-dark font-bold">
                            {renderStars()}
                          </span>
                        </div>
                        <div>
                          <strong className="text-info font-english">
                            Unicode:
                          </strong>{" "}
                          <span className="text-dark font-bold">
                            {charData?.unicode}
                          </span>
                        </div>
                      </div>
                      <div className="mb-4 flex flex-col gap-3">
                        <div>
                          <strong className="text-info font-english">
                            Stroke Count:
                          </strong>{" "}
                          <span className="text-dark font-bold">
                            {charData?.stroke_count}
                          </span>
                        </div>
                        <KanjiGif kanji={currentDetail} />
                      </div>
                      <div className="mb-4">
                        <strong className="text-info font-english">
                          Meanings:
                        </strong>
                        <ul className="list-disc pl-4 text-dark font-bold">
                          {charData?.meanings.map((meaning, index) => (
                            <li key={index}>{meaning}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="flex gap-4 flex-wrap">
                      <div className="mb-4">
                        <strong className="text-info font-english">
                          On Readings:
                        </strong>
                        <ul className="list-disc pl-4   text-dark font-bold">
                          {charData?.on_readings.length > 0
                            ? charData?.on_readings.map((onReading, index) => (
                                <li key={index}>{onReading}</li>
                              ))
                            : "-"}
                        </ul>
                      </div>

                      <div className="mb-4">
                        <strong className="text-info font-english">
                          Kun Readings:
                        </strong>
                        <ul className="list-disc pl-4  text-dark font-bold">
                          {charData?.kun_readings.length > 0
                            ? charData?.kun_readings.map(
                                (kunReading, index) => (
                                  <li key={index}>{kunReading}</li>
                                )
                              )
                            : "-"}
                        </ul>
                      </div>
                    </div>

                    {jukugoData?.length > 0 && (
                      <div className="mt-4">
                        <strong className="text-info font-english">
                          Related jukugo:
                        </strong>

                        <div className="flex gap-2 flex-wrap mt-3">
                          {jukugoData?.map((item, index) => {
                            return (
                              <div
                                className="bg-white p-2 rounded-md shadow-md"
                                key={index}
                              >
                                <p className="flex justify-between flex-col">
                                  <span className="text-dark text-2xl">
                                    {item.jukugo_char}
                                  </span>{" "}
                                  <span className="text-sm">
                                    {item.hiragana}
                                  </span>
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

                    {/* <div className="mt-4 hidden">
                    <strong className="text-info font-english">Example words:</strong>
            
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
                  </div> */}

                    <div className="mt-4 hidden">
                      <strong className="text-info font-english">Notes:</strong>
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
              </ModalBody>
              <ModalFooter className="flex font-english justify-center gap-2 md:justify-between items-center">
                <p className="text-xs">
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
                <Button onClick={() => handleOpen(null)}>
                  <span>Close</span>
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
