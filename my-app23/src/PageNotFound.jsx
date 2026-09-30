import React from 'react'
import { Link } from 'react-router-dom'

export default function PageNotFound() {
  return (
    <div style={{padding: "200px"}}>
        <h1> <span style={{color: "red"}}>404</span> (Not Found) </h1>
        <h3> The url you Visited is not defined </h3>
        <Link to="/">
            <button 
            style={{
                padding: "9px 50px",
                 fontWeight: "800", 
                 fontSize: "18px", 
                 marginTop: "10px", 
                 color: "aliceblue", 
                 backgroundColor: "tomato", 
                 border: "none", 
                 borderRadius: "20px",
                 cursor: "pointer"
            }}
                > Next to Home </button>
        </Link>
    </div>
  )
}
