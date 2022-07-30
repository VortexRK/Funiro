import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import { BrowserRouter as Router} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Content from './components/Content'
import Context from './Context'

const App = props => {
  const [innerWidth, setwidth] = useState(window.innerWidth)

  const getWidth = () => {
    setwidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', getWidth)

    return () => window.removeEventListener('resize', getWidth)
  }, [window.innerWidth])

  return (
    <div className={props.className}>
      <Router>
        <Context.Provider value={{ innerWidth }}>
          <Wrapper>
            <Header />
            <Content />
            <Footer />
          </Wrapper>
        </Context.Provider>
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
