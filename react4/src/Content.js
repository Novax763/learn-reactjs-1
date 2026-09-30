import React from 'react'

export default function Content({id = "unknown" ,title = "not title", p = "not paragraph"}) {
  return (
    <div style={{
      border: "5px solid teal",
      margin: "20px",
      padding: "20px",
      textAlign: 'center',
      width: "95%"
    }}>
      <h1 style={{padding: "20px"}}> {id} </h1>
      <h1 style={{padding: "20px"}}> {title} </h1>
      <hr />
      <p style={{padding: "20px"}}> {p} </p>
    </div>
  )
}
