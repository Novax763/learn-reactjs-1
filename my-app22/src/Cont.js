import React from 'react'
import { useState } from 'react'

export default function Cont() {
  let user = "Soufaine"
  let userChange = "Ahmed"
  const [vale, value] = useState(user)
  function buttn() {
    if (vale === "Soufaine") {
      value(userChange)
    } else {
      value(user)
    }
  }
  let user1 = "Darraj"
  let userChange1 = "ibn kaldon"
  const [valuee, value1] = useState(user1)
  function buttn1() {
    if (valuee === "Darraj") {
      value1(userChange1)
    } else {
      value1(user1)
    }
  }
  return (
    <div>
      <button onClick={buttn}>
        change name
      </button>
      <h1> {vale} </h1>
      <button onClick={buttn1}>
        change first name
      </button>
      <h1> {valuee} </h1>
    </div>
  )
}
