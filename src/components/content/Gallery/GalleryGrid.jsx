import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

const GalleryGrid = props => {
  const [position, setPosition] = useState(0)
  const [rightX, setRightX] = useState(0)
  const [leftX, setLeftX] = useState(0)
  const leftColumnLength = useRef(null)
  const rightColumnLength = useRef(null)
  const middleColumnLength = useRef(null)

  const moveGallery = e => {
    if (rightX === 0) {
      setRightX(rightColumnLength.current.getBoundingClientRect().width - (document.documentElement.clientWidth - rightColumnLength.current.getBoundingClientRect().x))
    }
    if (leftX === 0) {
      setLeftX(leftColumnLength.current.getBoundingClientRect().x)
    }

    const pageMiddle = document.documentElement.clientWidth / 2
    const leftScale = (-leftX) / (pageMiddle )
    const rightScale = rightX / (pageMiddle )

    if (e.pageX < pageMiddle) {
      setPosition((pageMiddle - e.pageX) * leftScale)
    }
    if (e.pageX > pageMiddle) {
      setPosition((pageMiddle - e.pageX) * rightScale)
    }
  }

  return (
    <Grid className={props.className} translateValue={position} onMouseMove={moveGallery} onClick={e => props.openGallery(e)}>
      <LeftColumn ref={leftColumnLength}>
        <TopColumn side={'left'}>
          <Image src={'/images/Gallery/Rectangle_36.jpg'} alt='Rectangle_36'  />
          <Image src={'/images/Gallery/Rectangle_38.jpg'} alt='Rectangle_38'  />

          <Image src={'/images/Gallery/Rectangle_37.jpg'} alt='Rectangle_37'  />
          <Image src={'/images/Gallery/Rectangle_39.jpg'} alt='Rectangle_39'  />
        </TopColumn>
        <BottomColumn side={'left'} >
          <Image src={'/images/Gallery/Rectangle_37.jpg'} alt='Rectangle_37'  />
          <Image src={'/images/Gallery/Rectangle_39.jpg'} alt='Rectangle_39'  />

          <Image src={'/images/Gallery/Rectangle_36.jpg'} alt='Rectangle_36'  />
          <Image src={'/images/Gallery/Rectangle_38.jpg'} alt='Rectangle_38'  />
        </BottomColumn>
      </LeftColumn>
      <Middle ref={middleColumnLength}>
        <Image src={'/images/Gallery/middle.jpg'} alt='middle'  />
      </Middle>
      <RightColumn ref={rightColumnLength}>
        <TopColumn>
          <Image src={'/images/Gallery/Rectangle_43.jpg'} alt='Rectangle_43'  />
          <Image src={'/images/Gallery/Rectangle_45.jpg'} alt='Rectangle_45'  />
          <Image src={'/images/Gallery/Rectangle_41.jpg'} alt='Rectangle_41'  />
          <Image src={'/images/Gallery/Rectangle_44.jpg'} alt='Rectangle_44'  />
        </TopColumn>
        <BottomColumn>
          <Image src={'/images/Gallery/Rectangle_41.jpg'} alt='Rectangle_41'  />
          <Image src={'/images/Gallery/Rectangle_44.jpg'} alt='Rectangle_44'  />
          <Image src={'/images/Gallery/Rectangle_43.jpg'} alt='Rectangle_43'  />
          <Image src={'/images/Gallery/Rectangle_45.jpg'} alt='Rectangle_45'  />
        </BottomColumn>
      </RightColumn>
    </Grid>
  )
}

GalleryGrid.propTypes = {
  className: PropTypes.string,
}

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

export default styled(GalleryGrid)`
`
