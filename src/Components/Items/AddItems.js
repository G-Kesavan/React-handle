import React from 'react'
import { FaPlus } from 'react-icons/fa'

const AddItems = () => {
  return (
    <form className='addform'>
        <input
            type='text'
            id='addItem'
            placeholder='Add Items'
            required
        ></input>
        <button
            type='submit'
        ><FaPlus/></button>
    </form>
  )
}

export default AddItems