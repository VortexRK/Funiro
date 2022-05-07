import React from "react"
import styled from "styled-components"

const WhiteHeart = props => {
  

  return(
    <svg width="24" height="21" viewBox="0 0 24 21" fill={props.fill || 'none'} className={props.className}>
      <path d="M11.9996 19.0541C-8 8 5.99999 -4 11.9996 3.58806C18 -4 32 8 11.9996 19.0541Z" stroke={props.whstroke ?? "white"} strokeWidth="1.8"/>
    </svg>
  )
}

export default styled(WhiteHeart)`
  :hover {
    fill: red;
  }
`
