import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import GallerySlider from './Gallery/GallerySlider'
import GalleryGrid from './Gallery/GalleryGrid'
import Context from '../../Context'

const Gallery = props => {
  const { innerWidth } = useContext(Context)
  const [src, setSrc] = useState()
  const [toggle, setToggle] = useState(false)

  function openGallery(e) {
    if (e.target.tagName === 'IMG') {
      setSrc(e.target.src)
      setToggle(prev => !prev)
    }
  }
  return (
    <section className={props.className} >
      <Div open={toggle} onClick={() => setToggle(prev => !prev)}>
        <Img src={src} alt='name'/>
      </Div>
      <GalleryWrapper>
        <HeaderWrapper>
          <H5>Share your setup with</H5>
          <Header>#FuniroFurniture</Header>
        </HeaderWrapper>
        {innerWidth > 1280
          ? <GalleryGrid width={innerWidth} openGallery={openGallery} />
          : <GallerySlider width={innerWidth} />
        }
      </GalleryWrapper>
    </section>
  )
}

Gallery.propTypes = {
  className: PropTypes.string,
  width: PropTypes.number,
}

const Div = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${props => props.open ? 'flex' : 'none'};
  justify-content: center;
  align-items: center;
  z-index: 5;
  cursor: pointer;
`

const Img = styled.img`
  width: 500px;
  height: 500px;
  object-fit: contain;
`

const GalleryWrapper = styled.div`
  max-width: 1238px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px auto;
  padding-bottom: 85px;
  border-bottom: 1px solid #D8D8D8;
  overflow: visible;
`

const HeaderWrapper = styled.div`
  margin-bottom: 20px;
  text-align: center;
  position: relative;
  top: 30px;
  z-index: 1;
`

const H5= styled.h5`
  font-size: 20px;
  font-weight: 600;
  line-height: 30px;
  color: #616161;
`

const Header = styled.h1`
  font-size: 40px;
  font-weight: 700;
  line-height: 48px;
`

export default styled(Gallery)`
  overflow: hidden;
  position: relative;
  margin-top: 45px;

  @media (max-width: 1280px) {
    margin-top: 0px;
  }
`
