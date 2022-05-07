import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import Hover from './Hover'
import AddCart2 from './AddCart2'

const Product = props => {
  const [width, setwidth] = useState(window.innerWidth)
  const { product } = props

  const getWidth = () => {
    setwidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', getWidth)

    return () => window.removeEventListener('resize', getWidth)
  }, [window.innerWidth])

  return (
    <article className={props.className}>
      {width > 967 && <Hover name={product.name} price={product.price} src={product.image} id={product.id}/>}
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
            <Price>Rp {product.price}</Price>
            {product.oldPrice && <OldPrice>Rp {product.oldPrice}</OldPrice>}
          </PriceWrapper>
        </DescrtiptionWrapper>
        {width <= 967 &&
          <CartWrapper>
            <AddCart2 bgcolor={'#E89F71'} vstroke={'#3A3A3A'} whstroke={'#3A3A3A'} name={product.name} price={product.price} src={product.image} id={product.id}/>
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
`

const Blur = styled.div``

const ImgWrapper = styled.div`
  width: 285px;
  height: 301px;
  position: relative;
`
const Img = styled.img``

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
`

const Name = styled.div`
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 29px;
  margin-bottom: 5px;
`

const Descrtiption = styled.div`
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  margin-bottom: 5px;
  color: #898989;
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

`
const OldPrice = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-decoration: line-through;
  color: #B0B0B0;
`

export default styled(Product)`
  position: relative;
  width: 285px;
  height: 100%;
  cursor: pointer;
  box-shadow: 2px 2px 3px rgba(0,0,0,0.3);

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
