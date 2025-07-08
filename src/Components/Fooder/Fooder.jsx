import React from 'react'
import './Fooder.css'

const Fooder = ({length}) => {
  return (
      <footer>
        <h3>{length} list {length===1?"item":"items"}</h3>
      </footer>
  )
}

export default Fooder
