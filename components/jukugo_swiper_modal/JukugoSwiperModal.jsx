// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Keyboard } from "swiper/modules";

/* Hook */
import { useContainer } from "./useContainer";

/* Component */
import JukugoCard from "../jukugo_card/JukugoCard";

export const JukugoSwiperModal = () => {
  const {
    jukugo,
    isLoading,
    isJukugoModalOpen,
    dispatch,

    /* action */
    toggleJukugoModal
  } = useContainer();

  return (
    <>
      {!isLoading && isJukugoModalOpen && (
        <section
          className={`${
            isJukugoModalOpen ? "opacity-100 visible" : "invisible opacity-0"
          } fixed top-0 left-0 z-[6000] transform duration-300 bg-slate-600 bg-opacity-75 backdrop-blur-md ease-out bottom-0 right-0 flex justify-center items-center`}
        >
          <div
            onClick={() => dispatch(toggleJukugoModal())}
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
              className="jukugoSwiper"
            >
              {jukugo?.map((item, index) => (
                <SwiperSlide key={index}>
                  <JukugoCard key={index} item={item} isSwiped={true} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
      )}
    </>
  );
};
