import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import { addDotsForNumber } from '../../../helpers/helpers.js'

const Slide = props => {
  const { product } = props
  return (
    <section className={props.className}>
      <Image src={product.image} alt={product.name} width='100%' />
      <Sticker>
        <Header>
          {product.name}
        </Header>
        <Info>
          {product.description}
        </Info>
        <Price>
          Rp {addDotsForNumber(product.price)}
        </Price>
      </Sticker>
    </section>
  )
}

Slide.propTypes = {
  className: PropTypes.string,
  product: PropTypes.object,
}

const Image = styled.img`
  width: 100%;
  height: 554px;
  object-fit: cover;
  object-position: center;
  background-color: #ffffff;

  @media (max-width: 654px) {
    height: 370px;
  }
`

const Sticker = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  width: 294px;
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.5);
  background: rgba(255, 255, 255, 0.72);
  backdrop-filter: blur(31px);
  position: absolute;
  bottom: 40px;
  right: 40px;
  z-index: 1;

  @media (max-width: 420px) {
    width: 250px;
    bottom: 15px;
    right: 15px;
  }
`

const Header = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 120%;
`

const Info = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: #616161;
`

const Price = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 150%;
`

export default styled(Slide)`
`
