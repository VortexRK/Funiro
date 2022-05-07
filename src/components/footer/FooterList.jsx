import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

const FooterList = props => {
  const items = props.items.map(el => <Item key={el.id} href={el.link}> {el.name} </Item>)
  return (
    <li className={props.className} visibility={props.isVisibility}>
      {items}
    </li>
  )
}

FooterList.propTypes = {
  className: PropTypes.string,
}

const Item = styled.a`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  margin-bottom: 3px;
  cursor: pointer;

  &:hover {
    color: #919191;
  }
`

export default styled(FooterList)`
  display: flex;
  transition: all 0.3s;
  flex-direction: column;
  overflow: hidden;

  @media (max-width: 505px) {
    visibility: ${props =>  props.isVisibility ? 'visible' : 'hidden'};
    max-height: ${props =>  props.isVisibility ? props.items.length * 27 : 0}px;
  }
`
