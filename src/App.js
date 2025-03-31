import React from 'react'
import Main from './Components/Main/Main'
import Header from './Components/Header/Header'
import Fooder from './Components/Fooder/Fooder'
import AddItems from './Components/Items/AddItems'
import './App.css'
import { useState } from 'react'

const App = () => {
  const [list, setlist] = useState(
    [
        {
            id:1,
            cheacked:true,
            text:"Add List"
        },
        {
            id:2,
            cheacked:true,
            text:"Add List"
        },
        {
            id:3,
            cheacked:true,
            text:"Add List"
        }
    ])

const BoxCheck = (id) => {
    const Newlist=list.map((list)=>list.id===id ?
    {
        ...list,
        cheacked:!list.cheacked
    }
    :list)
    setlist(Newlist)
}

const ListDelete = (id)=>{
    const Newlist=list.filter(list => list.id!==id)
    setlist(Newlist)
}
  return (
    <div className='App'>
        <Header title="To do list"/>
        <AddItems/>
        <Main 
          list={list}
          BoxCheck={BoxCheck}
          ListDelete={ListDelete}
        />
        <Fooder length={list.length}/>
    </div>
  )
}

export default App
