import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import List from './nav/List'

const Nav = props => {
  const [isProducts, setProductsVisibility] = useState(0)
  const [isRooms, setRoomsVisibility] = useState(0)
  const products = [
    {id: 1, name: 'Tables'},
    {id: 2, name: 'Mugs'},
    {id: 3, name: 'Beds'},
    {id: 4, name: 'Chairs'},
    {id: 5, name: 'Something'},
    {id: 6, name: 'Something'},
  ]
  const rooms = [
    {id: 1, name: 'Something'},
    {id: 2, name: 'Something'},
    {id: 3, name: 'Something'},
  ]

  const hideProducts = () => {
    if (isRooms) setRoomsVisibility(0)
    setProductsVisibility(prev => Number(!prev))
  }

  const hideRooms = () => {
    if (isProducts) setProductsVisibility(0)
    setRoomsVisibility(prev => Number(!prev))
  }

  return (
    <nav className={props.className}>
      <NavList>
        <Item onClick={hideProducts}>
          <HeaderWrapper visibility={isProducts}>
            <Header>Products</Header>
            <Arrow visibility={isProducts}></Arrow>
          </HeaderWrapper>
          <List products={products} visibility={isProducts} />
        </Item>
        <Item onClick={hideRooms}>
          <HeaderWrapper visibility={isRooms}>
            <Header>Rooms</Header>
            <Arrow visibility={isRooms}></Arrow>
          </HeaderWrapper>
          <List products={rooms} visibility={isRooms} />
        </Item>
        <Item>
          <Link href='#'>Inspirations</Link>
        </Item>
      </NavList>
    </nav>
  )
}

Nav.propTypes = {
  className: PropTypes.string,
}

const NavList = styled.ul`
  list-style-type: none;
  display: flex;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`

const Item = styled.li`
  margin-right: 40px;
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;

  @media (max-width: 767px) {
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
  }
`

const Arrow = styled.div`
  width: 10px;
  height: 10px;
  border: solid black;
  border-width: 0 2px 2px 0;
  display: inline-block;
  transform: ${props => props.visibility ? 'rotate(45deg)' : 'rotate(-45deg)'};
  transition: transform 0.3s;
  margin-left: 10px;
  margin-bottom: 0px;
`

const Header = styled.p`
  @media (max-width: 767px) {
    font-size: 20px;
  }
`

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 767px) {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    padding: 5px 20px;
  }

  :hover {
    ${Header} {
      color: #838383;
    }

    ${Arrow} {
      border-color: #838383;
    }
  }
`

const Link = styled.a`
  text-decoration: none;

  @media (max-width: 767px) {
    padding: 5px 20px;
    font-size: 20px;
  }
`

export default styled(Nav)`
  @media (max-width: 767px) {
    width: 100%;
    position: absolute;
    opacity: ${props => props.isNav ? 1 : 0};
    transition: opacity 0.3s, visibility 0.3s;
    top: 80px;
    left: 0px;
    background: linear-gradient(to right,#F9F1E7 60%,#FCF8F3 40%);
    padding-bottom: 20px;
    visibility: ${props => props.isNav ? 'visible' : 'hidden'};
  }
`
