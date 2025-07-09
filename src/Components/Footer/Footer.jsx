import React from 'react'
import './Footer.css'

const Footer = ({length}) => {
  return (
      <footer>
        <h3>{length} List {length===1?"item":"items"}</h3>
      </footer>
  )
}

export default Footer
