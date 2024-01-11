import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Keyboard } from "swiper/modules";

/* Hook */
import { Hook } from "./hook";

/* Component */
import FlashCard from "../flash_card/FlashCard";

export const FlashSwiperModal = () => {
  const {
    kanji,
    isLoading,
    isFlashModalOpen,
    dispatch,
    /* action */
    toggleFlashModal,
  } = Hook();

  return (
    <>
      {!isLoading && isFlashModalOpen && (
        <section
          className={`${
            isFlashModalOpen ? "opacity-100 visible" : "invisible opacity-0"
          } fixed top-0 left-0 z-[6000] transform duration-300 ease-out bottom-0 right-0 flex justify-center items-center`}
        >
          <div
            onClick={() => dispatch(toggleFlashModal())}
            className="fixed top-0 left-0 bottom-0 right-0 bg-blue-gray-700 bg-opacity-60"
          ></div>
          <div className=" relative z-30">
            <Swiper
              pagination={{
                type: "fraction",
              }}
              slidesPerView={1}
              spaceBetween={50}
              navigation={true}
              keyboard={{
                enabled: true,
              }}
              loop={true}
              modules={[Pagination, Navigation, Keyboard]}
              className="flashSwiper"
            >
              {kanji?.map((item, index) => (
                <SwiperSlide key={index}>
                  <FlashCard key={index} item={item} isSwiped={true} isInfoShow={false} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
      )}
    </>
  );
};
