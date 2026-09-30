
import React from 'react'

export default function Content({title = "not title", user = "not paragraph"}) {
  return (
    <>
      <div style={{border: "5px solid teal",
        margin: "20px",
        padding: "10px",
        textAlign: "center",
        width: "500px",
      }}>
        <h1 style={{padding: "20px"}}> {title} </h1>
        <hr />
        <p style={{padding: "20px"}}> {user} </p>
      </div>
    </>
  )
}
