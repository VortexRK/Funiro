import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import Vector from '../../../icons/Vector'
import WhiteHeart from '../../../icons/WhiteHeart'
import { useDispatch } from 'react-redux'
import { addToFavorite, deleteFromFavorite, addToCart, deleteFromCart } from '../../../actions'
import { useSelector } from 'react-redux'

const AddCart = props => {
  const [fill, setFill] = useState('none')
  const favoriteProducts = useSelector( state => state.favorite.favorite.products)
  const dispatch = useDispatch()

  const toggleFavoriteProduct = () => {
    if (fill === 'none') {
      dispatch(addToFavorite(props.id, props.name, props.price, props.src))
      setFill('red')
    } else {
      dispatch(deleteFromFavorite(props.id))
      setFill('none')
    }
  }

  const toggleCartProduct = () => {
    dispatch(addToCart(props.id, props.name, props.price, props.src, 1))
  }

  useEffect(() => {
    if (!favoriteProducts.find(el => el.id === props.id)) {
      setFill('none')
    }
  }, [favoriteProducts.length])

  return (
    <>
      <AddButton bgcolor={props.bgcolor} onClick={toggleCartProduct}>
          Add to cart
      </AddButton>
      <IconsWrapper>
        <Icon>
          <Vector vstroke={props.vstroke} />
        </Icon>
        <Text> Share</Text>
        <Icon onClick={toggleFavoriteProduct}>
          <WhiteHeart whstroke={props.whstroke} fill={fill}/>
        </Icon>
        <Text>Like</Text>
      </IconsWrapper>
    </>
  )
}

AddCart.propTypes = {
  className: PropTypes.string,
  bgcolor: PropTypes.string,
  vstroke: PropTypes.string,
  whstroke: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.string,
  src: PropTypes.string,
  id: PropTypes.number,
}

const AddButton = styled.div`
  height: 48px;
  width: 202px;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  margin-bottom: 24px;
  color: #E89F71;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  @media (max-width: 967px) {
    color: #ffffff;
    background-color: #E89F71;
    margin-bottom: 10px;
  }

  &:hover {
    background-color: ${props => props.bgcolor ? '#cc8a60' : '#ffe7d9'};
  }
`

const IconsWrapper = styled.div`
  display: flex;
`

const Icon = styled.div`
  margin-right: 10px;
  cursor: pointer;
`

const Text = styled.div`
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  color: #ffffff;

  @media (max-width: 967px) {
    color: inherit;
  }

  :nth-child(2) {
    margin-right: 50px;
  }
`

export default styled(AddCart)``
