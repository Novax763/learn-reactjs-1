import React from 'react'
import { useState } from 'react'


export default function UseStae() {
    const [count, setcount] = useState(0);
    function puluTow() {
        // let pr1 = count + 1
        // let pr2 = pr1 + 1
        // setcount(pr1)
        // setcount(pr2)
        setcount(count + 1)
        setcount((c) => {
            return c + 1
        })
    }
    function monTow() {
        // let pr1 = count + 1
        // let pr2 = pr1 + 1
        // setcount(pr1)
        // setcount(pr2)
        setcount((c) => {
            return c - 1
        })
        setcount((c) => {
            return c - 1 
        })
    }
  return (
    <div>
        <h1> The count is : {count} </h1>
        <button onClick={puluTow} > + 2 </button>
        <button onClick={monTow} > - 2 </button>
    </div>
  )
}
