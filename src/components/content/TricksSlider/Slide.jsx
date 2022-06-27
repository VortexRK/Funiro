import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

const Slide = props => {
  const { slide } = props
  return (
    <article className={props.className}>
      <Image src={slide.src} alt={slide.alt} />
      <Description>
        <Header>
          {slide.header}
        </Header>
        <Date>
          {slide.date}
        </Date>
      </Description>
    </article>
  )
}

Slide.propTypes = {
  className: PropTypes.string,
  slide: PropTypes.object,
}

const Image = styled.img`
  width: 391px;
  height: 252px;

  @media (max-width: 440px) {
    width: 345px;
    object-fit: cover;
  }

  @media (max-width: 400px) {
    width: 295px;
  }
`

const Description = styled.div`
  padding: 15px;
`

const Header = styled.h2`
  font-size: 24px;
  font-weight: 600;
  line-height: 29px;
  margin-bottom: 8px;
`

const Date = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
`

export default styled(Slide)`
  width: 390px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  @media (max-width: 440px) {
    width: 345px;
  }

  @media (max-width: 400px) {
    width: 295px;
  }

  .text {
    height: 100%;
  }

  &:hover {
    position: relative;
    top: 5px;
    right: 5px;

    @media (max-width: 1311px) {
      top: initial;
      right: initial;
    }
  }
`
