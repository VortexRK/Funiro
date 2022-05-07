import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

const LeftSide = props => {
  return (
    <section className={props.className}>
      <Header>
        50+ Beautiful rooms inspiration
      </Header>
      <Text>
        Our designer already made a lot of beautiful prototipe of rooms that inspire you
      </Text>
      <Button>
        Explore more
      </Button>
    </section>
  )
}

LeftSide.propTypes = {
  className: PropTypes.string,
}

const Header = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 120%;
  margin-bottom: 8px;

  @media (max-width: 460px) {
    font-size: 35px;
  }
`

const Text = styled.p`
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  margin-bottom: 24px;
`

const Button = styled.div`
  display: inline-block;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  color: #FFFFFF;
  padding: 12px 40px;
  background-color: #E89F71;
  cursor: pointer;

  @media (max-width: 967px) {
    text-align: center;
  }

  &:hover {
    background-color: #9b6b4d;
  }
`

export default styled(LeftSide)`
  width: 378px;
  margin-right: 85px;
  position: relative;
  z-index: 3;

  @media (max-width: 967px) {
    display: flex;
    flex-direction: column;
    margin: 0px auto 20px;
  }

  @media (max-width: 460px) {
    width: 330px;
  }

  @media (max-width: 370px) {
    width: 300px;
  }

  @media (max-width: 340px) {
    width: 280px;
  }
`
