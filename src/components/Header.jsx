import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import Nav from './header/Nav'
import Search from './header/Search'
import Cart from '../icons/Cart'
import Favorite from '../icons/Heart'
import ProductList from './header/ProductList'
import { useSelector } from 'react-redux'
import { deleteFromFavorite, deleteFromCart } from '../actions'

const Header = props => {
  const [width, setInnerWidth] = useState(window.innerWidth)
  const [isNav, setNavVisibility] = useState(0)
  const [showFavoriteProducts, setShowFavoriteProducts] = useState(0)
  const [showCartProducts, setShowCartProducts] = useState(0)
  const favoriteProducts = useSelector(state => state.favorite.favorite.products)
  const favoriteCounter = useSelector(state => state.favorite.favorite.counter)
  const cartProducts = useSelector(state => state.cart.cart.products)
  const cartCounter = useSelector(state => state.cart.cart.counter)
  const refCart = useRef()
  const refFavorite = useRef()

  const setWidth = () => {
    setInnerWidth(window.innerWidth)
  }

  const closePopup = (e) => {
    if (refCart.current && !refCart.current.contains(e.target)) {
      setShowCartProducts(0)
    }
    if (refFavorite.current && !refFavorite.current.contains(e.target)) {
      setShowFavoriteProducts(0)
    }
  }

  useEffect(() => {
    window.addEventListener('resize', setWidth)

    return () => window.removeEventListener('resize', setWidth)
  }, [window.innerWidth])

  useEffect(() => {
    window.addEventListener('click', closePopup)

    return () => window.removeEventListener('click', closePopup)
  }, [])

  useEffect(() => {
    if (favoriteProducts.length === 0) {
      setShowFavoriteProducts(0)
    }
    if (cartProducts.length === 0) {
      setShowCartProducts(0)
    }
  }, [favoriteProducts.length, cartProducts.length])

  const showFavorite = () => {
    if (favoriteProducts.length > 0) {
      setShowFavoriteProducts(prev => Number(!prev))
    }
  }

  const showCart = () => {
    if (cartProducts.length > 0) {
      setShowCartProducts(prev => Number(!prev))
    }
  }

  return (
    <header className={props.className}>
      <HeaderWrapper>
        <Logo>Funiro.</Logo>
        <Nav isNav={isNav}/>
        <RightSide>
          <Search />
          <Wrapper>
            <FavoriteWrapper ref={refFavorite}>
              {favoriteProducts.length > 0 ? <Counter>{favoriteCounter}</Counter> : null }
              <Favorite showFavorite={showFavorite} isHollow={favoriteProducts.length}/>              
            </FavoriteWrapper>
            <ProductList isVisible={showFavoriteProducts} products={favoriteProducts} delete={deleteFromFavorite}/>
            <CartWrapper ref={refCart}>
              {cartProducts.length > 0 ? <Counter>{cartCounter}</Counter> : null }
              <Cart showCart={showCart}/>
            </CartWrapper>
            <ProductList isVisible={showCartProducts} products={cartProducts} delete={deleteFromCart} cart={true}/>
            <UserIcon>
              A
            </UserIcon>
            {width > 767 ? null :
              <Burger onClick={() => setNavVisibility(prev => !Number(prev))}>
                <div></div>
                <div></div>
                <div></div>
              </Burger>
            }
          </Wrapper>
        </RightSide>
      </HeaderWrapper>
    </header>
  )
}

Header.propTypes = {
  className: PropTypes.string,
}

const FavoriteWrapper = styled.div`
  position: relative;
`

const CartWrapper = styled.div`
  position: relative;
`

const Counter = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid black;
  position: absolute;
  top: -10px;
  right: -10px;
  text-align: center;
  font-size: 13px;
  background-color: #ffffff;
  z-index: 1;
`

const Burger = styled.div`
  cursor: pointer;
  div {
    width: 20px;
    height: 1px;
    margin-bottom: 3px;
    border-bottom: 2px solid #000;
  }
`

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  max-width: 1238px;
  margin: 0px auto;
  padding-left: 20px;

  @media (max-width: 767px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`

const Logo = styled.div`
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 29px;
  margin-right: 40px;

  @media (max-width: 767px) {
    margin-right: 10px;
  }
`

const RightSide = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media (max-width: 991px) {
    justify-content: flex-end;
  }
`

const Wrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  width: 152px;
`

const UserIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #E89F71;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

export default styled(Header)`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  padding: 20px;
  z-index: 4;
  background: linear-gradient(to right,#F9F1E7 60%,#FCF8F3 40%);

  @media (max-width: 767px) {
    /* position: fixed;*/
    /* background-color: #FCF8F3;  */
    padding: 20px 0px;
    z-index: 1000;
  }
`
