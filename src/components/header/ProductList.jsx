import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import Product from './Product'
import { addDotsForNumber } from '../../helpers/helpers'

const ProductList = props => {
  const [totalPrice, setTotalPrice] = useState('0')
  const {products} = props

  useEffect(() => {
    if (props.isCart) {
      let total = 0
      products.forEach(el => total = total + Number(el.price) * el.quantity)
      setTotalPrice(addDotsForNumber(String(total)))
    }
  },[products])

  return (
    <div className={props.className}>
      {products.map((el, id) => <Product key={id} id={el.id} name={el.name} price={el.price} src={el.img} quantity={el?.quantity} delete={props.delete} totalPrice={totalPrice} setTotalPrice={setTotalPrice}/> )}
      {props.isCart
        ? <>
            <hr />
            <TotalPriceWrapper>
              <Text>Total Price:</Text>
              <TotalPrice>Rp {totalPrice}</TotalPrice>
            </TotalPriceWrapper>
          </>
        : null
      }
    </div>
  )
}

ProductList.propTypes = {
  className: PropTypes.string,
  products: PropTypes.array,
  delete: PropTypes.func,
  isCart: PropTypes.bool,
}

const TotalPriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
`

const Text = styled.p`
  font-size: 16px;
`

const TotalPrice = styled.div`
  font-size: 16px;
`

export default styled(ProductList)`
  width: 400px;
  min-height: 100px;
  position: absolute;
  top: 40px;
  background-color: #fff;
  display: ${props => props.isVisible ? 'block' : 'none'};
  padding: 20px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.4);
  right: 0;

  @media (max-width: 430px) {
    right: -30px;
  }
`
