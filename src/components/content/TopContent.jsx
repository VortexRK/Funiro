import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import Ads from './TopContent/Ads'
import Slide from './TopContent/Slide';
import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js'
import 'swiper/swiper.scss'
import 'swiper/modules/navigation/navigation.scss'
import 'swiper/modules/pagination/pagination.scss'

const TopContent = props => {
  const products = [
    { id: 1, image: '/images/TopContent/Rectangle_47.jpg', name: 'Bohauss', description: 'Luxury big sofa 2-seat', price: '17000000', },
    { id: 2, image: '/images/TopContent/123.jpg', name: 'Forest', description: 'winter forest', price: '123451234', },
    { id: 3, image: '/images/TopContent/Rectangle_49.jpg', name: 'Respira', description: 'Minimalist fan', price: '123451234', },
    { id: 4, image: '/images/TopContent/Rectangle_48.jpg', name: 'Grifo', description: 'Night lamp', price: '123451234', },
  ]

  return (
    <section className={props.className}>
      <TopContentWrapper>
        <Ads />
        <Slider>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={32}
            slidesPerView={'auto'}
            navigation
            pagination={{ clickable: true }}
            loop={true}
            speed={800}
            preloadImages={false}
          >
            {products.map((product, id) => <SwiperSlide key={id}><Slide key={id} product={product} /></SwiperSlide> )}
          </Swiper>
      </Slider>
      </TopContentWrapper>
    </section>
  )
}

TopContent.propTypes = {
  className: PropTypes.string,
}

const TopContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  max-width: 1238px;
  margin: 0px auto;
  position: relative;
`

const Slider = styled.div`
  width: 934px;
  padding-top: 80px;
  position: relative;

  @media (max-width: 991px) {
    width: 100%;
  }

  .swiper-pagination {
    top: -60px;
    left: -115px;
    bottom: initial;
    width: initial;
    left: 55%;

    @media (max-width: 500px) {
      left: 65%;
    }

    @media (max-width: 500px) {
      width: 90px;
      left: 69%;
    }

    @media (max-width: 385px) {
      left: 73%;
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
    top: -50px;
    color: #ffffff;

    &::after {
      font-size: 16px !important;
      z-index: 2;
    }
    &::before {
      content: '';
      background-color: #E89F71;
      border-radius: 50%;
      width: 48px;
      height: 48px;
      box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.16);
      position: absolute;
      z-index: 1;
    }

    @media (max-width: 767px) {
      display: none;
    }
  }

  .swiper-button-prev {
    left: initial;
    right: 65px;
    &::after {
      color: #E89F71 ;
    }
    &::before {
      background-color: #F7DECD;
    }
  }

  .swiper-slide {
    height: 554px;
  }
`

export default styled(TopContent)`
  margin: 0px auto;
  background: linear-gradient(to right, #F9F1E7 60%, #FCF8F3 40%);
  overflow: hidden;
  padding: 30px 20px 0;

  .swiper {
    overflow: visible;
  }
`
