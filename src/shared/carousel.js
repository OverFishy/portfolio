// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./carousel.css";

// import required modules
import { Pagination } from "swiper";

export function Carousel(props) {
  console.log(`my log: ${props.projectPics}`);
  return (
    <>
    <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {props.projectPics.map(projectPic => (
        <SwiperSlide><img src={projectPic} alt=''/></SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
