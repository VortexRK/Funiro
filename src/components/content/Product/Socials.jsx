import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import Fb from '../../../icons/Facebook.jsx'
import Insta from '../../../icons/Insta.jsx'
import LinkedIn from '../../../icons/Linkedin.jsx'

const Socials = props => {

  const Click = (e) => {
    e.stopPropagation()
    console.log('Socials')
  }

  return (
    <div className={props.className}>
      <Icon onClick={Click} isVisible={props.isVisible}>
        <Fb />
      </Icon>
      <Icon onClick={Click} isVisible={props.isVisible}>
        <Insta />
      </Icon>
      <Icon onClick={Click} isVisible={props.isVisible}>
        <LinkedIn />
      </Icon>
    </div>
  )
}

Socials.propTypes = {
  className: PropTypes.string,
  vis: PropTypes.bool,
}

const Icon = styled.div`
  filter: grayscale();
  width: ${props => props.isVisible ? '30px' : '0px'};
  transition: width 1s;

  :hover {
    filter: initial;
  }

  @media (max-width: 500px) {
    filter: initial;
  }

`
export default styled(Socials)`
  width: ${props => props.isVisible ? '110px' : '0px'};
  height: 38px;
  padding-top: 3px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 5px;
  position: absolute;
  left: 90px;
  top: -8px;
  background-color: #fff;
  z-index: 1;
  transition: width 1s;
  overflow: hidden;
`
