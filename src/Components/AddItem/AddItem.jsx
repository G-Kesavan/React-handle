import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import './AddItem.css'

const AddItems = ({addItem}) => {

  const [text, setText] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(text)
    setText('')
  }
  return (
    <form className='addIitemForm' onSubmit={handleSubmit}>
        <input
            autoFocus
            type='text'
            id='addItem'
            placeholder='Add Items'
            required
            value={text}
            onChange={(e)=>setText(e.target.value )}
        />
        <button type='submit'><FaPlus /></button>
    </form>
  )
}

export default AddItems