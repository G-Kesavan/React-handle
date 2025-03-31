import React from 'react'
import { FaTrashAlt } from "react-icons/fa"

const List = ({ListDelete,list,BoxCheck}) => {
  return (
    <li>
        <input 
            onChange={()=>BoxCheck(list.id)}
            type='checkbox'
            checked={list.cheacked}
        ></input>

        <p 
            style={list.cheacked ? {textDecoration:'line-through'}:null}
            onDoubleClick={()=>BoxCheck(list.id)}
        >{list.text}</p>

        <FaTrashAlt onClick={()=>ListDelete(list.id)}/>
    </li>
  )
}

export default List
