import React, { useEffect, useState, useContext } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import Context from '../../../Context'

import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js'
import 'swiper/swiper.scss' // core Swiper
import 'swiper/modules/navigation/navigation.scss' // Navigation module
import 'swiper/modules/pagination/pagination.scss' // Pagination module

const Slider = props => {
  const { innerWidth } = useContext(Context)
  const [isCenteredSlides, setCenteredSlides] = useState(false)

  useEffect( () => {
    if (innerWidth >= 645) {
      setCenteredSlides(false)
    } else {
      setCenteredSlides(true)
    }
  }, [innerWidth])

  return (
    <div className={props.className}>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={24}
        slidesPerView={'auto'}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        autoHeight={true}
        loopAdditionalSlides={5}
        speed={800}
        centeredSlides={isCenteredSlides}
        preloadImages={false}
      >
      <SwiperSlide> <Image src={'images/Gallery/Rectangle_36.jpg'} alt={'text'} width={'100%'} /> </SwiperSlide>
      <SwiperSlide> <Image src={'images/Gallery/Rectangle_37.jpg'} alt={'text'} width={'100%'} /> </SwiperSlide>
      <SwiperSlide> <Image src={'images/Gallery/Rectangle_36.jpg'} alt={'text'} width={'100%'} /> </SwiperSlide>
      <SwiperSlide> <Image src={'images/Gallery/Rectangle_38.jpg'} alt={'text'} width={'100%'} /> </SwiperSlide>
    </Swiper>
    </div>
  )
}

Slider.propTypes = {
  className: PropTypes.string,
}

const Image = styled.img`
  object-fit: cover;
  object-position: center;
`

export default styled(Slider)`
  width: calc(100% - 378px - 85px);

  @media (max-width: 967px) {
    width: 100%;
  }

  .swiper {
    height: 580px;
    overflow: visible;
    position: relative;

    @media (max-width: 370px) {
      height: 380px;
    }

    &::before {
      content: '';
      position: absolute;
      left: 0px;
      top: 0px;
      z-index: 2;
      width: 100vw;
      height: 100%;
      background-color: #FCF8F3;
      transform: translate(-100%, 0);
    }
  }

  .swiper-pagination {
    left: 430px;
    bottom: 30px;
    width: initial;

    @media (max-width: 1275px) {
      left: 90px;
    }

    @media (max-width: 645px) {
      left: 40%;
    }

    @media (max-width: 370px) {
      bottom: -30px;
      left: 30%;
    }
  }

  .swiper-pagination-bullet {
    width: 11px !important;
    height: 11px !important;
    margin: 0px 10px !important;
  }

  .swiper-pagination-bullet-active {
    background-color: #E89F71 !important;
    position: relative;
  }

  .swiper-pagination-bullet-active::after {
    content: '';
    height: 27px;
    width: 27px;
    position: absolute;
    top: -9px;
    left: -9px;
    border-radius: 50%;
    border: 1px solid #E89F71;
  }

  .swiper-button-prev, .swiper-button-next {
    color: #E89F71;

    &::after {
      font-size: 16px !important;
      z-index: 2;
    }

    &::before {
      content: '';
      background-color: #ffffff;
      border-radius: 50%;
      width: 48px;
      height: 48px;
      box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.16);
      position: absolute;
      z-index: 1;
    }

    @media (max-width: 645px) {
      display: none;
    }
  }

  .swiper-button-prev {
    left: -15px;

    @media (max-width: 967px) {
      left: 0px;
    }
  }

  .swiper-slide {
    height: 486px !important;
    width: 372px !important;
    transition: height 300ms;
    display: flex;

    @media (max-width: 370px) {
      width: 300px !important;
      height: 300px !important;
    }
  }

  .swiper-slide-active {
    height: 580px !important;
    width: 404px !important;
    transition: height 300ms;

    @media (max-width: 460px) {
      width: 330px !important;
    }

    @media (max-width: 370px) {
      width: 300px !important;
      height: 380px !important;
    }
  }
`
