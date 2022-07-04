import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import 'swiper/swiper.scss'; // core Swiper
import 'swiper/modules/navigation/navigation.scss'; // Navigation module
import 'swiper/modules/pagination/pagination.scss'; // Pagination module

const GallerySlider = props => {
  return (
    <div className={props.className}>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={props.width > 880 ? 2 : 1}
        pagination={{ clickable: true }}
        autoHeight={true}
        speed={800}
        preloadImages={false}
      >
        <SwiperSlide><Image src={'/images/Gallery/Rectangle_37.jpg'} alt='Rectangle_37' /></SwiperSlide>
        <SwiperSlide><Image src={'/images/Gallery/Rectangle_38.jpg'} alt='Rectangle_38' /></SwiperSlide>
        <SwiperSlide><Image src={'/images/Gallery/Rectangle_39.jpg'} alt='Rectangle_39' /></SwiperSlide>
        <SwiperSlide><Image src={'/images/Gallery/Rectangle_41.jpg'} alt='Rectangle_41' /></SwiperSlide>
        <SwiperSlide><Image src={'/images/Gallery/Rectangle_43.jpg'} alt='Rectangle_43' /></SwiperSlide>
        <SwiperSlide><Image src={'/images/Gallery/Rectangle_44.jpg'} alt='Rectangle_44' /></SwiperSlide>
        <SwiperSlide><Image src={'/images/Gallery/Rectangle_45.jpg'} alt='Rectangle_45' /></SwiperSlide>
      </Swiper>
    </div>
  )
}

GallerySlider.propTypes = {
  className: PropTypes.string,
}

const Image = styled.img`
  width: 391px;
  object-fit: fill;
  object-position: center;

  @media (max-width: 440px) {
    width: 100%;
  }
`

export default styled(GallerySlider)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px auto 0px;
  width: 865px;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);

  @media (max-width: 880px) {
    width: 440px;
  }

  @media (max-width: 440px) {
    width: 345px;
  }

  @media (max-width: 400px) {
    width: 300px;
  }

  .swiper {
    width: 100%;
    padding: 5px 26px 65px !important;
  }

  .swiper-slide {
    height: 300px !important;
    display: flex;
  }
`
