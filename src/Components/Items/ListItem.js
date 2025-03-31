import React from 'react'
import List from './List'

const ListItem = ({ListDelete,list,BoxCheck}) => {
  return (
    <ul className='main-ul'>
        {list.map((list)=>(
            <List
                list={list}
                BoxCheck={BoxCheck}
                ListDelete={ListDelete}
                key={list.id}
            />
        ))}
    </ul>
  )
}

export default ListItem
