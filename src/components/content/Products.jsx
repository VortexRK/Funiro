import React, { useState, useEffect, useContext } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import Product from './Product/Product'
import Context from '../../Context'

const Products = props => {
  const [quantity, setQuantity] = useState(window.innerWidth > 645 ? 8 : 4)
  const [isMinimize, setMiminize] = useState(false)
  const [minSize, setMinSize] = useState(window.innerWidth > 645 ? 8 : 4)
  const [isActive, setIsActive] = useState(true)
  const {searchInput, innerWidth} = useContext(Context)

  const products = [
    { id: 1, image: 'images/Syltherine.jpg', name: 'Syltherine', description: 'Stylish cafe chair', price: '123451234', discount: '30%', isNew: false },
    { id: 2, image: 'images/Lolito.jpg', name: 'Lolito', description: 'Luxury big sofa', price: '123451234', discount: '', isNew: false },
    { id: 3, image: 'images/Respira.jpg', name: 'Respira', description: 'Minimalist fan', price: '123451234', discount: '20%', isNew: false },
    { id: 4, image: 'images/Grifo.jpg', name: 'Grifo', description: 'Night lamp', price: '123451234', discount: '', isNew: true },
    { id: 5, image: 'images/Muggo.jpg', name: 'Muggo', description: 'Small mug', price: '123451234', discount: '', isNew: true },
    { id: 6, image: 'images/Pingky.jpg', name: 'Pingky', description: 'Cute bed set', price: '123451234', discount: '10%', isNew: false },
    { id: 7, image: 'images/Potty.jpg', name: 'Potty', description: 'Minimalist flower pot', price: '123451234', discount: '', isNew: false },
    { id: 8, image: 'images/Syltherine.jpg', name: 'Syltherine', description: 'Stylish cafe chair', price: '123451234', discount: '15%', isNew: false },
    { id: 9, image: 'images/Lolito.jpg', name: 'Lolito', description: 'Luxury big sofa', price: '123451234', discount: '25%', isNew: false },
    { id: 10, image: 'images/Respira.jpg', name: 'Respira', description: 'Minimalist fan', price: '123451234', discount: '15%', isNew: false },
    { id: 11, image: 'images/Grifo.jpg', name: 'Grifo', description: 'Night lamp', price: '123451234', discount: '', isNew: false },
    { id: 12, image: 'images/Muggo.jpg', name: 'Muggo', description: 'Small mug', price: '123451234', discount: '30%', isNew: false },
    { id: 13, image: 'images/Pingky.jpg', name: 'Pingky', description: 'Cute bed set', price: '123451234', discount: '30%', isNew: false },
    { id: 14, image: 'images/Potty.jpg', name: 'Potty', description: 'Minimalist flower pot', price: '123451234', discount: '', isNew: true },
  ]

  const filteredProduct = products.filter((product) => {
    if (searchInput) return product.name.toLowerCase().indexOf(searchInput.toLowerCase()) >= 0
    else return product
  })

  const increaseCount = () => {
    if (isMinimize) {
      setMiminize(false)

      if (innerWidth > 645) {
        setQuantity(8)
      } else setQuantity(4)

      return
    }

    setQuantity(previousVal => previousVal + 4)
  }

  useEffect(() => {
    if (filteredProduct.length <= minSize) {
      setIsActive(false)
    } else setIsActive(true)
  }, [filteredProduct.length, minSize])

  useEffect(() => {
    if (innerWidth > 645) {
      setMinSize(8)
    } else setMinSize(4)
  }, [innerWidth])

  useEffect(() => {
    if (quantity >= filteredProduct.length && filteredProduct.length > minSize) setMiminize(true)
  }, [quantity])

  useEffect(() => {
    if (innerWidth > 645) {
      setQuantity(8)
    } else setQuantity(4)
    setMiminize(false)
  }, [searchInput])

  return (
    <section className={props.className} id='Products'>
      <Header>
        Our Products
      </Header>
      <ProductWrapper>
        {filteredProduct.slice(0, quantity).map((product, id) => <Product key={id} product={product}/>)}
      </ProductWrapper>
      <Button onClick={() => increaseCount()} isActive={isActive}>
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
  color: ${props => props.isActive ? '#E89F71' : '#9e9e9e'};
  border: 1px solid ${props => props.isActive ? '#E89F71' : '#9e9e9e'};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 32px;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.isActive ? '#ffe7d9' : null};
  }

  @media (max-width: 870px) {
    margin-top: 20px;
  }
`

const ProductWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 32px;

  @media (max-width: 1275px) {
    grid-template-columns: auto auto auto;
    justify-content: center;
  }

  @media (max-width: 870px) {
    grid-template-columns: auto auto;
  }

  @media (max-width: 600px) {
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

  @media (max-width: 992px) {
    padding: 10px 0px 30px;
  }
`
