import React from 'react'
import "./FormStyle.css"
import { useContext } from 'react';
import { LoanInputContext } from './contexts/LoanFormInputContext';
import { UserContext } from './contexts/UserContext';


// Inse9848
export default function ComponentInput() {
  const InputInfoContext = useContext(UserContext)
  const inputMyContext = useContext(LoanInputContext);
  
  console.log(inputMyContext)
  return (
    <div>
      <label style={{textAlign: "center"}} htmlFor=""> {InputInfoContext.name} {inputMyContext.labelTitle} : </label>
      <input
        value={inputMyContext.value}
        onChange={(events) => {
          inputMyContext.handleChange(events.target.value);
        }}
      />
    </div>
  );
}
