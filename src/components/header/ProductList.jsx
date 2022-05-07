import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import Product from './Product'
import { commas } from '../../helpers/helpers'

const ProductList = props => {
  const [totalPrice, setTotalPrice] = useState('0')
  const {products} = props

  useEffect(() => {
    if (props.cart) {
      let total = 0
      products.forEach(el => total = total + Number(el.price) * el.quantity)
      setTotalPrice( commas(String(total)) )
    }
  },[products])

  return (
    <div className={props.className}>
      {products.map((el, id) => <Product key={id} id={el.id} name={el.name} price={el.price} src={el.img} quantity={el?.quantity} delete={props.delete} totalPrice={totalPrice} setTotalPrice={setTotalPrice}/> )}
      {props.cart
        ? <>
            <hr />
              <TotalPriceWrapper>
                <Text>Total Price:</Text>
                <TotalPrice>{totalPrice}</TotalPrice>
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
  /* left: -370px; */
  left: -1000%;
`
