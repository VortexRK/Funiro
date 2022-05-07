import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

const cartList = props => {
  return (
    <div className={props.className}>
      <Image></Image>
      <Description></Description>
      <Price></Price>
      
    </div>
  )
}

cartList.propTypes = {
  className: PropTypes.string,
}

export default styled(cartList)`

`
