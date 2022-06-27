import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import GallerySlider from './Gallery/GallerySlider'
import GalleryGrid from './Gallery/GalleryGrid'

const Gallery = props => {
/// Нужно выбрать к чему привязать метод movemouse, переименовать rightX i leftX во что-то
  const [position, setPosition] = useState(0)
  const [rightX, setRightX] = useState(0)
  const [leftX, setLeftX] = useState(0)
  const leftColumnLength = useRef(null)
  const rightColumnLength = useRef(null)
  const middleColumnLength = useRef(null)
  const gallery = useRef(null)
  const [src, setSrc] = useState()
  const [toggle, setToggle] = useState(false)
  function openGallery(e) {
    console.log(`e.target.alt`, e.target.alt)
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
        {props.width > 1280
        ? <GalleryGrid width={props.width} openGallery={openGallery} />
        : <GallerySlider width={props.width} />
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

const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 1fr 2fr;
  justify-content: center;
  transform: translateX(${props => props.translateValue}px);
  transition: transform 1.5s linear;
`

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${props => props.side === 'left' ? 'flex-end' : 'flex-start'};
`

const TopColumn = styled.div`
  display: flex;
  align-items: flex-end;
`

const BottomColumn = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: ${props => props.side === 'left' ? 'flex-end' : 'flex-start'};
`

const Image = styled.img`
  object-fit: contain;
  margin: 8px;
  filter: grayscale(100%);
  cursor: pointer;

  :hover {
    filter: none;
  }
  max-height: 450px;
  max-width: 450px;
`

const Middle = styled.div`
  display: flex;
  align-items: center;
`

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
`

export default styled(Gallery)`
  overflow: hidden;
  position: relative;
  margin-top: 45px;

  @media (max-width: 1280px) {
    margin-top: 0px;
  }
`
