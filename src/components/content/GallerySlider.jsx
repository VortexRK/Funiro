import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import { Navigation, Pagination } from 'swiper';
// Direct React component imports
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';

// Styles must use direct files imports
import 'swiper/swiper.scss'; // core Swiper
import 'swiper/modules/navigation/navigation.scss'; // Navigation module
import 'swiper/modules/pagination/pagination.scss'; // Pagination module

const GallerySlider = props => {
  return (
    <div className={props.className}>
      {/* <Wrapper> */}
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={15}
          slidesPerView={1}
          // navigation
          pagination={{ clickable: true }}
          // loop={true}
          autoHeight={true}
          // loopAdditionalSlides={5}
          speed={800}
          // centeredSlides={isCenteredSlides}
          // watchOverflow={true}
          preloadImages={false}
          
        >
          <SwiperSlide><Image src={'/images/Gallery/Rectangle_37.jpg'} alt='Rectangle_37' /></SwiperSlide>
          <SwiperSlide><Image src={'/images/Gallery/Rectangle_45.jpg'} alt='Rectangle_45' /></SwiperSlide>
        </Swiper>
      {/* </Wrapper> */}
    </div>
  )
}


GallerySlider.propTypes = {
  className: PropTypes.string,
}

const Wrapper = styled.div`
  background-color: red;
  /* height: 300px; */
  /* width: 300px ; */
`

const Image = styled.img`
  object-fit: fill;
  object-position: center;
`

export default styled(GallerySlider)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  width: 100%;

  .swiper {
    width: 100%;
    padding: 5px 26px 65px !important;
  }

  .swiper-slide {
    height: 300px !important;
    display: flex;
  }
`