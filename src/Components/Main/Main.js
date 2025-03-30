import React from 'react'
import { useState } from 'react'
import './Main.css'
const Main = () => {
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
    <main>
        {list.length ?(
        <ul className='main-ul'>
            {list.map((list)=>(
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

                    <button 
                        onClick={()=>ListDelete(list.id)}
                    >Delete</button>
                </li>
            ))}
        </ul>
        ):(<p>Your list is Empty...</p>)}
    </main>
  )
}

export default Main
