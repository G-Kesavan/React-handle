import React from 'react'
import './Main.css'
import List from '../List/List'

const Main = ({deleteItem,items,boxCheck}) => {
  return (
    <main>
        {items.length ?(
            <List
                items={items}
                boxCheck={boxCheck}
                deleteItem={deleteItem}
            />
        ):(<p style={{display:'flex'}}>Your list is Empty...</p>)}
    </main>
  )
}

export default Main
