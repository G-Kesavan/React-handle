import React from 'react'
import './Main.css'
import ListItem from '../Items/ListItem'

const Main = ({ListDelete,list,BoxCheck,key}) => {
  return (
    <main>
        {list.length ?(
            <ListItem
                list={list}
                BoxCheck={BoxCheck}
                ListDelete={ListDelete}
            />
        ):(<p>Your list is Empty...</p>)}
    </main>
  )
}

export default Main
