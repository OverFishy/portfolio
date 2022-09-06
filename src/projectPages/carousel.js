// import React, { useRef, useState } from "react"; -> I think it's useless, might be used in the carousel :)

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

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

// Good Ol' manual coding

{/* <SwiperSlide><img src={spaceshot1} alt=''/></SwiperSlide>
<SwiperSlide><img src={spaceshot2} alt=''/></SwiperSlide>
<SwiperSlide><img src={spaceshot3} alt=''/></SwiperSlide>
<SwiperSlide><img src={spaceshot4} alt=''/></SwiperSlide>
<SwiperSlide><img src={spaceshot5} alt=''/></SwiperSlide>
<SwiperSlide><img src={spaceshot6} alt=''/></SwiperSlide>
<SwiperSlide><img src={spaceshotgif1} alt=''/></SwiperSlide>
<SwiperSlide><img src={spaceshotgif2} alt=''/></SwiperSlide> */}


      // GOOD OL SWIPER
      // <Swiper
      //   slidesPerView={"auto"}
      //   centeredSlides={true}
      //   spaceBetween={30}
      //   pagination={{
      //     clickable: true,
      //   }}
      //   modules={[Pagination]}
      //   className="mySwiper"
      // ></Swiper>
