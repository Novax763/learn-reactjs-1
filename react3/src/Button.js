
import React from 'react'

export default function Button({title, children }) {
  return (
    <>
        <button className="my-btn">
          <p style={{padding: "10px"}}>{title}</p>
          {children}
        </button>
    </>
  )
}

