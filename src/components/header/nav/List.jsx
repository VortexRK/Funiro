import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

const List = props => {
  const items = props.products.map(el => <Item key={el.id}> {el.name} </Item>)
  return (
    <section className={props.className} visibility={props.visibility}>
      {items}
    </section>
  )
}

List.propTypes = {
  className: PropTypes.string,
}

const Item = styled.div`
  font-size: 16px;
  padding: 20px;
  border-bottom: 1px dotted #000;

  &:hover {
    background-color: #fde1bf;
  }

  @media (max-width: 767px) {
    border-bottom: initial;
    padding: 10px 40px;
    font-size: 20px;
    text-align: left;
  }
`

export default styled(List)`
  width: 200px;
  position: absolute;
  top: 20px;
  left: 0;
  /* background-color: #ffffff; */
  background: linear-gradient(to right,#F9F1E7 60%,#FCF8F3 40%);
  box-shadow: 2px 2px 5px #777777;
  z-index: 4;
  visibility: ${props => props.visibility ? 'visible' : 'hidden'};

  @media (max-width: 767px) {
    position: relative;
    width: 100%;
    opacity: 1;
    max-height: ${props => props.visibility ? 600 : 0}px;
    background-color: #F9F1E7;
    overflow: hidden;
    transition: all 0.3s;
    box-shadow: initial;
    top: 0;
  }
`
