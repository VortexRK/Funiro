import React, { useRef, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import TopContent from './content/TopContent'
import Services from './content/Services'
import Products from './content/Products'
import Gallery from './content/Gallery'
import TipsAndTricksSlider from './content/TipsAndTricksSlider'
import BeautifullInspiration from './content/BeautifullInspiration'
import GallerySlider from './content/GallerySlider'

const Content = props => {
  const ref = useRef(null)
  const [width, setwidth] = useState(window.innerWidth)

  const getWidth = () => {
    setwidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', getWidth)

    return () => window.removeEventListener('resize', getWidth)
  }, [window.innerWidth])

  return (
    <main className={props.className}>
      <TopContent />
      <Services />
      <Products />
      <BeautifullInspiration />
      <TipsAndTricksSlider />
      {/* <GalleryWrapper ref={ref}>
        <Gallery test={ref.current}/>
      </GalleryWrapper> */}
      {width > 1280
        ? <Gallery/>
        : <GallerySlider/>
      }
    </main>
  )
}

Content.propTypes = {
  className: PropTypes.string,
}

const GalleryWrapper = styled.div`
  overflow: hidden;
`
export default styled(Content)`
  width: 100%;
  flex: 1 1 auto;
`
