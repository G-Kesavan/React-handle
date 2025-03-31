import React from 'react'
import './Main.css'
import ListItem from '../Items/List_Items'

const Main = ({ListDelete,list,BoxCheck,key}) => {
  return (
    <main>
        {list.length ?(
            <ListItem
                list={list}
                BoxCheck={BoxCheck}
                ListDelete={ListDelete}
            />
        ):(<p style={{display:'flex'}}>Your list is Empty...</p>)}
    </main>
  )
}

export default Main
