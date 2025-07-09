import { FaTrashAlt } from "react-icons/fa"

const List = ({deleteItem,item,boxCheck}) => {
  return (
    <li className='item'>
        <input 
            onChange={()=>boxCheck(item.id)}
            type='checkbox'
            checked={item.cheacked}
            id={item.id}
            key={item.id}
        ></input>

        <p 
            className='itemText'
            style={item.cheacked ? {textDecoration:'line-through'}:null}
            onDoubleClick={()=>boxCheck(item.id)}
        >{item.text}</p>

        <FaTrashAlt className='delete-icon' onClick={()=>deleteItem(item.id)}/>
    </li>
  )
}

export default List
