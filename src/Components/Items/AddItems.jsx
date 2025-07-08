import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa'

const AddItems = ({AddItem}) => {

  const [AddText, setAddText] = useState()
  const handleSubmit = (e) => {
    e.preventDefault();
    AddItem(AddText)
    setAddText('')
  }
  
  return (
    <form className='addform' onSubmit={handleSubmit}>
        <input
            autoFocus
            type='text'
            id='addItem'
            placeholder='Add Items'
            required
            value={AddText}
            onChange={(e)=>setAddText(e.target.value)}
        ></input>
        <button
            type='submit'
        ><FaPlus /></button>
    </form>
  )
}

export default AddItems