// import spaceshot photos for testing
import spaceshot1 from '../images/projectImages/spaceshot/spaceshot1.JPG'
import spaceshot2 from '../images/projectImages/spaceshot/spaceshot2.JPG'
import spaceshot3 from '../images/projectImages/spaceshot/spaceshot3.JPG'
import spaceshot4 from '../images/projectImages/spaceshot/spaceshot4.JPG'
import spaceshot5 from '../images/projectImages/spaceshot/spaceshot5.JPG'
import spaceshot6 from '../images/projectImages/spaceshot/spaceshot6.JPG'
import spaceshotgif1 from '../images/projectImages/spaceshot/spaceshotgif1.gif'
import spaceshotgif2 from '../images/projectImages/spaceshot/spaceshotgif2.gif'

import React, { useRef, useState } from "react";
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
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {/* I dont know why, but I cannot pass the props down to the slider component as props */}
        {props.projectPics.map(projectPic => (
        <SwiperSlide><img src={projectPic} alt=''/></SwiperSlide>
        ))}
        {/* <SwiperSlide><img src={spaceshot1} alt=''/></SwiperSlide>
        <SwiperSlide><img src={spaceshot2} alt=''/></SwiperSlide>
        <SwiperSlide><img src={spaceshot3} alt=''/></SwiperSlide>
        <SwiperSlide><img src={spaceshot4} alt=''/></SwiperSlide>
        <SwiperSlide><img src={spaceshot5} alt=''/></SwiperSlide>
        <SwiperSlide><img src={spaceshot6} alt=''/></SwiperSlide>
        <SwiperSlide><img src={spaceshotgif1} alt=''/></SwiperSlide>
        <SwiperSlide><img src={spaceshotgif2} alt=''/></SwiperSlide> */}
      </Swiper>
    </>
  );
}
