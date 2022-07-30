import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import TopContent from './content/TopContent'
import Services from './content/Services'
import Products from './content/Products'
import Gallery from './content/Gallery'
import TipsAndTricksSlider from './content/TipsAndTricksSlider'
import BeautifullInspiration from './content/BeautifullInspiration'

const Content = props => {

  return (
    <main className={props.className}>
      <TopContent />
      <Services />
      <Products />
      <BeautifullInspiration />
      <TipsAndTricksSlider />
      <Gallery />
    </main>
  )
}

Content.propTypes = {
  className: PropTypes.string,
}

export default styled(Content)`
  width: 100%;
  flex: 1 1 auto;
`
