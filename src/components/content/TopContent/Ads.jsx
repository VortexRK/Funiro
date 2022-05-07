import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

const Ads = props => {
  return (
    <article className={props.className}>
      <Header>
        High-Quality Furniture Just For You
      </Header>
      <Text>
        Our furniture is made from selected and best quality materials that are suitable for your dream home
      </Text>
      <Button href='#Products'>
        Shop Now
      </Button>
    </article>
  )
}

Ads.propTypes = {
  className: PropTypes.string,
}

const Header = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 56px;
  line-height: 120%;
  color: #3A3A3A;
  margin-bottom: 16px;

  @media (max-width: 991px) {
    font-size: 32px;
  }

  @media (max-width: 767px) {
    font-size: 22px;
  }
`

const Text = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 150%;
  color: #898989;

  @media (max-width: 991px) {
    font-size: 17px;
  }

  @media (max-width: 767px) {
    font-size: 14px;
  }
`

const Button = styled.a`
  display: inline-block;
  margin-top: 48px;
  padding: 24px 140px;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 150%;
  color: #FFFFFF;
  background-color: #E89F71;
  text-align: center;
  cursor: pointer;

  @media (max-width: 991px) {
    width: 100%;
    padding: 24px 90px;
    margin-top: 33px;
  }

  @media (max-width: 767px) {
    width: 100%;
    padding: 24px 68px;
    margin-top: 20px;
  }

  &:hover {
    background-color: #9b6b4d;  
  }
`
export default styled(Ads)`
  width: 494px;
  padding: 60px;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(31px);
  z-index: 2;

  @media (max-width: 991px) {
    width: 350px;
    padding: 30px;
  }

  @media (max-width: 767px) {
    width: 250px;
    padding: 10px;
  }
`
