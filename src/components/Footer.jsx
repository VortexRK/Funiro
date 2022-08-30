import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import TArrow from '../icons/t.svg'
import Pin from '../icons/Pin'
import Phone from '../icons/Phone'
import FooterList from './footer/FooterList'

const Footer = props => {
  const [menuVisibility, setMenuVisibility] = useState(0)
  const [accountVisibility, setAccountVisibility] = useState(0)
  const [socialsVisibility, setSocialsVisibility] = useState(0)

  const hideMenu = () => {
    if (accountVisibility) setAccountVisibility(0)
    if (socialsVisibility) setSocialsVisibility(0)
    setMenuVisibility(prev => Number(!prev))
  }

  const hideAccount = () => {
    if (menuVisibility) setMenuVisibility(0)
    if (socialsVisibility) setSocialsVisibility(0)
    setAccountVisibility(prev => Number(!prev))
  }

  const hideSocials = () => {
    if (menuVisibility) setMenuVisibility(0)
    if (accountVisibility) setAccountVisibility(0)
    setSocialsVisibility(prev => Number(!prev))
  }

  const menu = [
    { id: 1, name: 'Products', link: '#' },
    { id: 2, name: 'Rooms', link: '#' },
    { id: 3, name: 'Inspirations', link: '#' },
    { id: 4, name: 'About Us', link: '#' },
    { id: 5, name: 'Terms & Policy', link: '#' }
  ]

  const account = [
    { id: 1, name: 'Check out', link: '#' },
    { id: 2, name: 'My cart', link: '#' },
    { id: 3, name: 'My catalog', link: '#' },
  ]

  const socials = [
    { id: 1, name: 'Facebook', link: '#' },
    { id: 2, name: 'Instagram', link: '#' },
    { id: 3, name: 'Twitter', link: '#' },
  ]

  return (
    <footer className={props.className}>
      <ContentWrapper>
        <Content width={249}>
          <Header>Funiro</Header>
          <Text2>Worldwide furniture store since 2020. We sell over 1000+ branded products on our website </Text2>
          <a href='https://goo.gl/maps/d4xUFF1fPjD7JiQd9'>
            <Pin />
            Sawojajar Malang, Indonesia
          </a>
          <Text2>
            <Phone />
            +6289 456 3455
          </Text2>
          <Text2>www.funiro.com</Text2>
        </Content>
        <Content>
          <HeaderWrapper onClick={hideMenu}>
            <Header>Menu</Header>
            <Arrow visibility={menuVisibility} />
          </HeaderWrapper>
          <FooterList items={menu} isVisibility={menuVisibility}/>
        </Content>
        <Content>
          <HeaderWrapper onClick={hideAccount}>
            <Header>Account</Header>
            <Arrow visibility={accountVisibility} />
          </HeaderWrapper>
          <FooterList items={account} isVisibility={accountVisibility}/>
        </Content>
        <Content>
          <HeaderWrapper onClick={hideSocials}>
            <Header>Stay connected</Header>
            <Arrow visibility={socialsVisibility} />
          </HeaderWrapper>
          <FooterList items={socials} isVisibility={socialsVisibility}/>
        </Content>
        <Content width={292}>
          <Header>Stay Updated</Header>
          <Form onSubmit={(e) => {e.preventDefault(); console.log('The message has been sent to your email')}}>
            <Label>
              <Input type='email' placeholder={'Enter your Email'} />
            </Label>
            <Submit type='submit' value='' />
          </Form>
        </Content>
      </ContentWrapper>
    </footer>
  )
}

Footer.propTypes = {
  className: PropTypes.string,
}

const Content = styled.div`
  width: ${props => props.width ? `${props.width}px` : ''};
  margin-bottom: 30px;

  :not(:last-child) {
     margin-right: 35px;
  }

  @media (max-width: 1083px) {
    :not(:last-child) {
      margin-right: 50px;
    }
    :nth-child(4) {
      margin-right: 0;
    }
  }

  @media (max-width: 634px) {
    :not(:last-child) {
      margin-right: 50px;
    }

    :nth-child(2) {
      margin-right: 60px;
    }
    :nth-child(4) {
      margin-right: 0px;
    }
  }

  @media (max-width: 505px) {
    margin-bottom: 10px;
  }
`

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`

const Header = styled.h3`
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 29px;
  text-align: left;
  margin-bottom: 5px;
  margin-right: 10px;
`

const Arrow = styled.div`
  display: none;
  height: 15px;
  width: 15px;
  border-right: 3px solid #3A3A3A;
  border-bottom: 3px solid #3A3A3A;
  transform: ${props => props.visibility ? 'rotate(45deg)' : 'rotate(-45deg)'};
  margin-bottom: ${props => props.visibility ? 10 : 2}px;
  transition: all 0.3s;

  @media (max-width: 505px) {
    display: block;
  }
`

const Text2 = styled.p`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  margin-bottom: 3px;
  cursor: pointer;

  &:hover {
    color: #919191;
  }
`

const Form = styled.form`
  display: flex;
`

const Label = styled.label`
  font-size: 16px;
`

const Input = styled.input`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  height: 45px;
  background: #F4F5F7;
  border: none;
  padding-left: 15px;
  margin-right: 5px;
  width: 242px;
`

const Submit = styled.input`
  width: 54px;
  background-color: #E89F71;
  background-image: url(${TArrow});
  background-repeat: no-repeat;
  background-position: center;
  border: none;
  cursor: pointer;
`

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: auto;
  max-width: 1238px;
  background-color: #ffffff;
  flex-wrap: wrap;

  @media (max-width: 505px) {
    flex-direction: column;
    justify-content: center;
  }
`
export default styled(Footer)`
  width: 100%;
  padding: 80px 20px 50px;

  @media (max-width: 505px) {
    padding-top: 45px;
  }
`
