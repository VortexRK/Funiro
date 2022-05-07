import React from "react"
import styled from "styled-components"

const Heart = props => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill={props.isHollow > 0 ? 'red' : 'none'} className={props.className} onClick={props.showFavorite}>
    <path d="M11.9996 21.0542C-8 10 5.99999 -1.99997 11.9996 5.58809C18 -1.99997 32 10 11.9996 21.0542Z" stroke="#262F56" strokeWidth="1.8" />
  </svg> 
)

export default styled(Heart)`
  position: relative;
  cursor: pointer;
`
