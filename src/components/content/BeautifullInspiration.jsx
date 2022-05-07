import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import LeftSide from './BeautifullInspiration/LeftSide';
import Slider from './BeautifullInspiration/Slider';

const BeautifullInspiration = props => {
  return (
    <section className={props.className}>
      <Wrapper>
        <LeftSide />
        <Slider />
      </Wrapper>
    </section>
  )
}

BeautifullInspiration.propTypes = {
  className: PropTypes.string,
}

const Wrapper = styled.div`
  max-width: 1238px;
  margin: 0px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media (max-width: 967px) {
    display: block;
  }
`

export default styled(BeautifullInspiration)`
  height: 665px;
  background-color: #FCF8F3;
  padding: 44px 20px;
  overflow: hidden;
  position: relative;

  @media (max-width: 967px) {
    height: initial;
  }

  @media (max-width: 370px) {
    padding: 20px;
    padding-bottom: 44px;
  }
/* 
  &::before {
    content: '';
    position: absolute;
    left: 0px;
    top: 0px;
    z-index: 2;
    width: 100vw;
    height: 100%;
    background-color: #FCF8F3;
    transform: translate(-59%, 0);
  } */
`
