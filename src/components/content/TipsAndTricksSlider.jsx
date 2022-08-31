import React, { useState, useEffect, useContext } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import Slide from './TricksSlider/Slide'
import Context from '../../Context'
import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js'
import 'swiper/swiper.scss' // core Swiper
import 'swiper/modules/navigation/navigation.scss' // Navigation module
import 'swiper/modules/pagination/pagination.scss' // Pagination module

const TipsAndTricksSlider = props => {
  let { innerWidth } = useContext(Context)
  const [countSlides, setCountSlides] = useState(3)
  const [sliderWidth, setSliderWidth] = useState('100%')

  useEffect( () => {
    if (innerWidth >= 1312) {
      setCountSlides(3)
      setSliderWidth('100%')
    } else if (innerWidth < 1312 && innerWidth > 880) {
      setCountSlides(2)
      setSliderWidth('865px')
    } else {
      setCountSlides(1)
      setSliderWidth('440px')
    }
  }, [innerWidth])

  const slides = [
    { id: 0, src: 'images/Gallery/Rectangle_45.jpg', alt: 'rectangle12', header: 'How to create a living room to love', date: '20 jan 2020', },
    { id: 1, src: 'images/Gallery/Rectangle_36.jpg', alt: 'rectangle', header: 'How to create a living room to love How to create a living room to love How to create a living room to loveHow to create a living room to love', date: '20 jan 2020', },
    { id: 2, src: 'images/Tricks/Rectangle_33.jpg', alt: 'rectangle2', header: 'Solution for clean look working space', date: '10 jan 2020', },
    { id: 3, src: 'images/Tricks/Rectangle_34.jpg', alt: 'rectangle3', header: 'Make your cooking activity more fun with good setup', date: '23 feb 2020', },
    { id: 5, src: 'images/Tricks/Rectangle_32.jpg', alt: 'rectangle5', header: 'How to create a living room to love', date: '20 jan 2020', },
    { id: 6, src: 'images/Tricks/Rectangle_33.jpg', alt: 'rectangle6', header: 'Solution for clean look working space', date: '10 jan 2020', },
    { id: 7, src: 'images/Tricks/Rectangle_34.jpg', alt: 'rectangle7', header: 'Make your cooking activity more fun with good setup', date: '23 feb 2020', },
    { id: 9, src: 'images/Tricks/Rectangle_32.jpg', alt: 'rectangle9', header: 'How to create a living room to love', date: '20 jan 2020', },
    { id: 10, src: 'images/Tricks/Rectangle_33.jpg', alt: 'rectangle10', header: 'Solution for clean look working space', date: '10 jan 2020', },
    { id: 11, src: 'images/Tricks/Rectangle_34.jpg', alt: 'rectangle11', header: 'Make your cooking activity more fun with good setup', date: '23 feb 2020', },
    { id: 12, src: 'images/Tricks/Rectangle_32.jpg', alt: 'rectangle12', header: 'How to create a living room to love', date: '20 jan 2020', },
  ]
  return (
    <section className={props.className}>
      <Header>
        Tips & Tricks
      </Header>
      <Slider width={sliderWidth}>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={countSlides}
          navigation
          pagination={{ clickable: true }}
          speed={800}
          preloadImages={false}
        >
          {slides.map((val, id) => <SwiperSlide key={id}><Slide slide={val} key={id} /></SwiperSlide>)}
        </Swiper>
      </Slider>
    </section>
  )
}

TipsAndTricksSlider.propTypes = {
  className: PropTypes.string,
}

const Header = styled.h1`
  font-size: 40px;
  font-weight: 700;
  line-height: 48px;
  margin-bottom: 32px;

  @media (max-width: 880px) {
    margin-bottom: 10px;
  }
`

const Slider = styled.div`
  width: ${props => props.width};

  @media (max-width: 440px) {
    width: 350px;
  }

  @media (max-width: 400px) {
    width: 300px;
  }
`

export default styled(TipsAndTricksSlider)`
  max-width: calc(1238px + 52px);
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 40px;

  .swiper {
    width: 100%;
    padding: 5px 26px 65px !important;

    @media (max-width: 440px) {
      padding: 0px 0px 65px !important;
    }
  }

  .swiper-slide {
    height: auto !important;
    display: flex;
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

  .swiper-button-prev::after, .swiper-button-next::after {
    color: #E89F71 !important;
    font-size: 16px !important;
    font-weight: 600;
    z-index: 2;
  }

  .swiper-button-prev, .swiper-button-next {
    width: calc(var(--swiper-navigation-size) / 35 * 27) !important;

    @media (max-width: 880px) {
      display: none;
    }
  }

  .swiper-button-prev::before, .swiper-button-next::before {
    content: '';
    border-radius: 50%;
    width: 48px;
    height: 48px;
    background: #FFFFFF;
    box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.16);
    position: absolute;
    z-index: 1;
  }
`
