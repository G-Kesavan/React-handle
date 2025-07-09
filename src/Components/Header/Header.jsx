import React from 'react'
import './Header.css'

const Header = (props) => {
  return (
    <header>
      <h3>{props.title.toUpperCase()}</h3>
    </header>
  )
}

export default Header
