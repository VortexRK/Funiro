import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import Ellipse from '../../icons/Ellipse.svg'

const Search = props => {
  const [position, setPosition] = useState(-200)
  const [search, setSearch] = useState('')
  const setPos = () => {
    if (position === 70) {
      setPosition(-100)
    } else setPosition(70)
  }

  return (
    <div className={props.className}>
      <SearchWrapper>
        <Icon onClick={setPos} />
        <Input type='text' placeholder={'Search'} position={position} onChange={e => setSearch(e.target.value)} />
      </SearchWrapper>
    </div>
  )
}

Search.propTypes = {
  className: PropTypes.string,
}

const SearchWrapper = styled.div`
  display: flex;
`

const Icon = styled.div`
  width: 50px;
  height: 45px;
  min-width: 50px;
  background-image: url(${Ellipse});
  background-position: center;
  background-repeat: no-repeat;
  background-color: #fff;
  cursor: pointer;

  @media (max-width: 991px) {
    background-color: transparent;
    transform: scale(125%);
  }
`

const Input = styled.input`
  height: 45px;
  width: calc(100% - 50px);
  border: none;

  @media (max-width: 991px) {
    position: absolute;
    padding: 0 20px;
    width: 100vw;
    top: ${props => props.position}px;
    left: 0;
    box-shadow: 1px 4px 2px rgba(0, 0, 0, 0.2);
    transition: top 0.3s;
    z-index: 3;
  }
`

export default styled(Search)`
  height: 45px;
  margin-right: 25px;
  width: 64%;
  min-width: 250px;
  border: none;

  @media (max-width: 991px) {
    width: 50px;
    min-width: 50px;
    margin-right: 15px;
  }

  @media (max-width: 767px) {
    margin-right: -2px;
  }
`
