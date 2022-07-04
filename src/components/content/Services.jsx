import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import Trophy from '../../icons/Trophy'
import Guarantee from '../../icons/Guarantee'
import Shipping from '../../icons/Shipping'
import CustomerSupport from '../../icons/CustomerSupport'

const Services = props => {
  return (
    <section className={props.className}>
      <ServicesWrapper>
        <Service>
          <Icon>
            <Trophy />
          </Icon>
          <ContentWrapper>
            <Name>
              High Quality
            </Name>
            <Description>
              Crafted from top materials
            </Description>
          </ContentWrapper>
        </Service>

        <Service>
          <Icon>
            <Guarantee />
          </Icon>
          <ContentWrapper>
            <Name>
              Warrany Protection
            </Name>
            <Description>
              Over 2 years
            </Description>
          </ContentWrapper>
        </Service>

        <Service>
          <Icon>
            <Shipping />
          </Icon>
          <ContentWrapper>
            <Name>
              Free Shipping
            </Name>
            <Description>
              Order over 150 $
            </Description>
          </ContentWrapper>
        </Service>

        <Service>
          <Icon>
            <CustomerSupport />
          </Icon>
          <ContentWrapper>
            <Name>
              24 / 7 Support
            </Name>
            <Description>
              Dedicated support
            </Description>
          </ContentWrapper>
        </Service>
      </ServicesWrapper>
    </section>
  )
}

Services.propTypes = {
  className: PropTypes.string,
}

const ServicesWrapper = styled.div`
  width: 1238px;
  margin: 0px auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 599px) {
    justify-content: center;
  }
`

const Service = styled.article`
  display: flex;
  align-items: center;
  margin: 10px 0px;

  @media (max-width: 992px) {
    min-width: 280px;
  }

  @media (max-width: 599px) {
    margin-left: 40px;
  }
`

const Icon = styled.div`
  width: 40px;
  height: 40px;
  margin-right: 20px;
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Name = styled.h2`
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 27px;

`
const Description = styled.p`
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  color: #898989;
`

export default styled(Services)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px 20px 40px;

  @media (max-width: 992px) {
    padding-top: 20px;
    padding-bottom: 10px;
  }
`
