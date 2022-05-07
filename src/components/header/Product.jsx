import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import { useDispatch } from 'react-redux'

const Product = props => {
  const dispatch = useDispatch()

  return (
    <div className={props.className}>
      <Image src={props.src} alt={props.name}/>
      <Name>{props.name} </Name>
      <Price>Rp {props.price}</Price>
      { !!props.quantity ?
        <Quantity>{props.quantity}</Quantity>
        : null }
      <Delete onClick={() => dispatch(props.delete(props.id))}>
        <LeftLine />
        <RightLine />
      </Delete>
    </div>
  )
}

Product.propTypes = {
  className: PropTypes.string,
  delete: PropTypes.func,
  src: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.string,
  id: PropTypes.number,
}

const Image = styled.img`
  width: 50px;
  height: 50px;
`

const Name = styled.div`
  font-size: 16px;
  width: 100px;
`

const Quantity = styled.div`
  font-size: 16px;
`

const Price = styled.div`
  font-size: 14px;
  width: 140px;
`

const Delete = styled.div`
  display: flex;
  justify-content: center;
  width: 20px;
  height: 20px;
  cursor: pointer;
`

const LeftLine = styled.div`
  border-left: 2px solid black;
  height: 20px;
  width: 2px;
  transform: rotate(45deg);
`

const RightLine = styled.div`
  border-left: 2px solid black;
  height: 20px;
  width: 2px;
  transform: rotate(-45deg);
  margin-left: -2px;
`

export default styled(Product)`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  justify-content: space-between;
`
