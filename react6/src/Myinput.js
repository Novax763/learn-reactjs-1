import React from 'react'
import { useState } from 'react'

export default function Myinput() {
    const [inputValue, setInputValue] = useState(""); 
    function change(e) {
        setInputValue(e.target.value)
    }
    const btnValue = inputValue;
  return (
    <div>
        <label> username :  </label>
        <input value={inputValue} onChange={change} />
        <p style={{margin: "20px 40px ", padding: "10px", border: "2px solid teal"}}> {btnValue} </p>
    </div>
  )
}
