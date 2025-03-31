import React from 'react'

const Fooder = ({length}) => {
  return (
    <div>
      <h3>{length} list {length===1?"item":"items"}</h3>
    </div>
  )
}

export default Fooder
