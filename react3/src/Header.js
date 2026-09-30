import React from 'react'

export default function Header({userName}) {
  return (
    <div>
      <header style={{
        backgroundColor: "teal",
        height: "100px",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0px 5px 13px black"
      }}>
        <h1 style={{color: "aliceblue"}}> {userName} </h1>
      </header>
    </div>
  )
}
