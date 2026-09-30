import React from 'react'

export default function Cont({name = "unknown", content = ""}) {
  return (
    <div>
        <button className='my-botton' style={{margin: "10px",borderRadius: "10px", backgroundColor: "purple", padding: "10px"}}>
            <h2 style={{color: 'aliceblue'}}> {name} </h2>
            <p> {content} </p>
        </button>
    </div>
  )
}
