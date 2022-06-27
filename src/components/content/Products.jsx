import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import Product from './Product/Product'

const Products = props => {

  const [quantity, setQuantity] = useState(window.innerWidth > 645 ? 8 : 4)
  const [isMinimize, setMiminize] = useState(false)

  const products = [
    { id: 1, image: '/images/Syltherine.jpg', name: 'Syltherine', description: 'Stylish cafe chair', price: '123451234', oldPrice: '422123121', discount: '30%', isNew: false },
    { id: 2, image: '/images/Lolito.jpg', name: 'Lolito', description: 'Luxury big sofa', price: '123451234', oldPrice: '', discount: '', isNew: false },
    { id: 3, image: '/images/Respira.jpg', name: 'Respira', description: 'Minimalist fan', price: '123451234', oldPrice: '422123121', discount: '30%', isNew: false },
    { id: 4, image: '/images/Grifo.jpg', name: 'Grifo', description: 'Night lamp', price: '123451234', oldPrice: '', discount: '', isNew: true },
    { id: 5, image: '/images/Muggo.jpg', name: 'Muggo', description: 'Small mug', price: '123451234', oldPrice: '', discount: '', isNew: true },
    { id: 6, image: '/images/Pingky.jpg', name: 'Pingky', description: 'Cute bed set', price: '123451234', oldPrice: '422123121', discount: '30%', isNew: false },
    { id: 7, image: '/images/Potty.jpg', name: 'Potty', description: 'Minimalist flower pot', price: '123451234', oldPrice: '', discount: '', isNew: false },
    { id: 8, image: '/images/Syltherine.jpg', name: 'Syltherine', description: 'Stylish cafe chair', price: '123451234', oldPrice: '422123121', discount: '30%', isNew: false },
    { id: 9, image: '/images/Lolito.jpg', name: 'Lolito', description: 'Luxury big sofa', price: '123451234', oldPrice: '422123121', discount: '30%', isNew: false },
    { id: 10, image: '/images/Respira.jpg', name: 'Respira', description: 'Minimalist fan', price: '123451234', oldPrice: '422123121', discount: '30%', isNew: false },
    { id: 11, image: '/images/Grifo.jpg', name: 'Grifo', description: 'Night lamp', price: '123451234', oldPrice: '', discount: '', isNew: false },
    { id: 12, image: '/images/Muggo.jpg', name: 'Muggo', description: 'Small mug', price: '123451234', oldPrice: '422123121', discount: '30%', isNew: false },
    { id: 13, image: '/images/Pingky.jpg', name: 'Pingky', description: 'Cute bed set', price: '123451234', oldPrice: '422123121', discount: '30%', isNew: false },
    { id: 14, image: '/images/Potty.jpg', name: 'Potty', description: 'Minimalist flower pot', price: '123451234', oldPrice: '', discount: '', isNew: true },
  ]

  const increaseCount = products => {
    if (isMinimize) {
      setMiminize(false)
      setQuantity(8)
      return
    }
    if (products.length >= quantity + 4) {
      setQuantity(previousVal => previousVal + 4)
    } else if (products.length > quantity) {
      setQuantity(previousVal => previousVal + products.length - previousVal )
    }
  }

  useEffect(() => {
    if (quantity === products.length) setMiminize(true)
  }, [quantity])

  return (
    <section className={props.className} id='Products'>
      <Header>
        Our Products
      </Header>
      <ProductWrapper>
        {products.slice(0, quantity).map((val, id) => <Product key={id} product={val}/>)}
      </ProductWrapper>
      <Button onClick={() => increaseCount(products)}>
        {isMinimize ? 'Minimize products' : 'Show More'}
      </Button>
    </section>
  )
}

Products.propTypes = {
  className: PropTypes.string,
}

const Header = styled.h1`
  font-size: 40px;
  font-weight: 700;
  line-height: 48px;
  text-align: center;
  margin-bottom: 30px;
`

const Button = styled.div`
  height: 48px;
  width: 245px;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  color: #E89F71;
  border: 1px solid #E89F71;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 32px;
  cursor: pointer;
  
  &:hover {
    background-color: #ffe7d9;
  }
`

const ProductWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 32px;

  @media(max-width: 1275px) {
    grid-template-columns: auto auto auto;
    justify-content: center;
  }

  @media(max-width: 967px) {
    grid-template-columns: auto auto;
  }

  @media(max-width: 645px) {
    grid-template-columns: auto;
  }
`

export default styled(Products)`
  max-width: 1238px;
  margin: 0px auto;
  padding: 44px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 967px) {
    padding: 20px 0px 30px;
  }

  @media (max-width: 460px) {
    padding: 20px;
  }
`