import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Content from './components/Content'

const App = props => {
  return (
    <div className={props.className}>
      <Router>
        <Wrapper>
          <Header />
          <Content />
          <Footer />
        </Wrapper>
      </Router>
    </div>
  )
}

App.propTypes = {
  className: PropTypes.string,
}

const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`

export default styled(App)`
  margin: 0 auto;
  height: 100%;
`
