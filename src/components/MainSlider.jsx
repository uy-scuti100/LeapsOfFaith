import { Swiper, SwiperSlide } from "swiper/react";
// import swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "../slider.css";
// import required modules
import { Pagination } from "swiper/modules";
// import sliderData
import { sliderData } from "../constants/sliderData.js";

const MainSlider = () => {
  return (
    <Swiper
      modules={[Pagination]}
      loop={true}
      pagination={{
        clickable: true,
      }}
      className="h-full mainSlider bg-gradient-to-t from-[#ffffff]  to-red-100/40  xl:bg-no-repeat max-w-lg lg:max-w-none rounded-[8px] overflow-hidden"
    >
      <>
        {sliderData.map((data, i) => {
          const { pretitle, title1, title2, title3, img, btnText, link } = data;
          return (
            <SwiperSlide key={i}>
              <div className="flex flex-col lg:flex-row h-full p-[20px] md:p-[60px]">
                {/* text */}
                <div className="w-full lg:flex-1">
                  <div className="uppercase mb-1 text-center lg:text-left">
                    {pretitle}
                  </div>
                  <div className="text-3xl md:text-[46px] font-semibold uppercase leading-none text-center lg:text-left mb-8 xl:mb-20">
                    {title1} <br />
                    {title2} <br />
                    {title3}
                  </div>
                  <a
                    href={link}
                    className="btn btn-accent text-white mx-auto lg:mx-0"
                  >
                    {btnText}
                  </a>
                </div>
                {/* img */}
                <div className="flex-1">
                  <img
                    src={img}
                    alt="special offer"
                    className="xl:absolute xl:-right-6 xl:-bottom-5"
                  />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </>
    </Swiper>
  );
};

export default MainSlider;
