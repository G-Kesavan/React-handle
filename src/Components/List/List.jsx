import React from 'react'
import Item from './Item'

const ListItem = ({deleteItem,items,boxCheck}) => {
  return (
    <ul className='main-ul'>
        {items.map((item)=>(
            <Item
                key={item.id}
                item={item}
                boxCheck={boxCheck}
                deleteItem={deleteItem}
            />
        ))}
    </ul>
  )
}

export default ListItem
