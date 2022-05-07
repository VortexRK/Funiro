import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

const Example = props => {
  return (
    <div className={props.className}>
      
    </div>
  )
}

Example.propTypes = {
  className: PropTypes.string,
}

export default styled(Example)`

`
