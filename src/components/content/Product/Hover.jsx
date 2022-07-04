import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import AddCart from './AddCart'

const Hover = props => {
  return (
    <div className={props.className}>
      <AddCart name={props.name} price={props.price} src={props.src} id={props.id}/>
    </div>
  )
}

Hover.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.string,
  src: PropTypes.string,
}

export default styled(Hover)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  visibility: hidden;
  background-color: rgba(0,0,0,0.5);
  z-index: 1;
  cursor: auto;
`
