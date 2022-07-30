import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import Hover from './Hover'
import AddCart from './AddCart'
import Context from '../../../Context'

const Product = props => {
  let { innerWidth } = useContext(Context)
  const { product } = props

  const finallPrice = () => {
    if (product.discount) {
      let discount = parseFloat(product.discount)
      let price = parseFloat(product.price)
      return (price - price * discount / 100).toFixed(0)
    }
    return product.price
  }

  return (
    <article className={props.className}>
      {innerWidth > 967 && <Hover name={product.name} price={product.price} src={product.image} id={product.id}/>}
      <Blur>
        <ImgWrapper>
          <Img src={product.image} alt={product.name}></Img>
          {product.discount || product.isNew
            ?  <Ic isNew={product.isNew}>{product.isNew ? 'New' : `-${product.discount}`}</Ic>
            :  null}
        </ImgWrapper>
        <DescrtiptionWrapper>
          <Name>{product.name}</Name>
          <Descrtiption>{product.description}</Descrtiption>
          <PriceWrapper>
            <Price>Rp {finallPrice()}</Price>
            {product.discount && <OldPrice>Rp {product.price}</OldPrice>}
          </PriceWrapper>
        </DescrtiptionWrapper>
        {innerWidth <= 967 &&
          <CartWrapper>
            <AddCart bgcolor={'#E89F71'} vstroke={'#3A3A3A'} whstroke={'#3A3A3A'} name={product.name} price={product.price} src={product.image} id={product.id}/>
          </CartWrapper>}
      </Blur>
    </article>
  )
}

Product.propTypes = {
  className: PropTypes.string,
  product: PropTypes.object,
}

const CartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;

  @media (max-width: 967px) {
    padding: 10px;
  }
`

const Blur = styled.div``

const ImgWrapper = styled.div`
  /* width: 285px; */
  height: 301px;
  position: relative;

  @media (max-width: 967px) {
    height: 180px;
  }
`
const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: fill;
`

const Ic = styled.div`
  position: absolute;
  top: 25px;
  right: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  color: #fff;
  background-color: ${props => props.isNew ? '#2EC1AC' : '#E97171'};
`

const DescrtiptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px 15px 30px;
  background-color: #F4F5F7;

  @media (max-width: 967px) {
    padding: 10px;
  }
`

const Name = styled.div`
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 29px;
  margin-bottom: 5px;

  @media (max-width: 967px) {
    font-size: 20px;
    margin-bottom: 0px;
  }
`

const Descrtiption = styled.div`
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  margin-bottom: 5px;
  color: #898989;

  @media (max-width: 967px) {
    font-size: 12px;
    margin-bottom: 0px;
  }
`

const PriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

const Price = styled.div`
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 30px;

  @media (max-width: 967px) {
    font-size: 16px;
  }
`
const OldPrice = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-decoration: line-through;
  color: #B0B0B0;

  @media (max-width: 967px) {
    font-size: 13px;
  }
`

export default styled(Product)`
  position: relative;
  width: 285px;
  height: 100%;
  cursor: pointer;
  box-shadow: 2px 2px 3px rgba(0,0,0,0.3);

  @media (max-width: 967px) {
    width: 250px;
  }

  :hover {
    ${Hover} {
      visibility: visible;
    }

    ${Blur} {
      @media (min-width: 968px) {
        filter: blur(4px);
      }
    }
  }
`
