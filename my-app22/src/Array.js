import React from 'react'
import { useState } from 'react'

export default function Array() {
    let [add, setadd] = useState({text: ""})
    const [devices, setdevi] = useState([
      { id: 1, name: "iphone" },
      { id: 2, name: "mac" },
      { id: 3, name: "samsung" },
      { id: 4, name: "windows" },
    ]);
    const newDevi = [...devices]
    function delet(e) {
        setadd({...add, text: ""})
        const decis = newDevi.filter((element) => {
            return element.id === e ? null : element  
        })
        setdevi(decis)
        

        // let index = 0;
        // let selected = 0;

        // for (let devices of newDevi) {
        //     if (devices.id === e) {
        //         selected = index;
        //         console.log(selected)
        //     }
        //     index++;
        // }
        // newDevi.splice(selected, 1)
        // setdevi(newDevi)
   }
   function edit(e) {
        const newda = newde.map((va) => {
            return va.id === e ? {id: va.e, name: va.name + "w" } : va
        })
        setdevi(newda)
   }
    const newde = [...devices]
    function change(e) {
        setadd({...add, text: e.target.value})
    }
    function changeAdd() {
        // console.log(add.text.length)
        if (add.text.length >= 1) {
            setdevi([...devices, {id: devices.length + 1 , name: add.text}])
        }
        // console.log(add.text)
    }
    const devicesMap = devices.map((value) => {
        // console.log(value.id)
        // console.log(devices.id)
        return (
          <>
          <div style={{margin: "10px"}} >
             <li key={value.id} > {value.name} </li>

            <button onClick={() => {
                delet(value.id)
            }} style={{
            padding: "10px 20px",
            border: "none", 
            backgroundColor: "teal", 
            color: "aliceblue", 
            borderRadius: "20px",
            cursor: "pointer"
            }} > Delete </button>
            <button onClick={() => edit(value.id)} style={{
                    margin: '0px 20px',
                    padding: "10px 20px",
                    border: "none", 
                    backgroundColor: "teal", 
                    color: "aliceblue", 
                    borderRadius: "20px",
                    cursor: "pointer"
            }} > 
                Edit </button>
          </div>
           
          </>
        );
        // console.log(value)
    })
  return (
    <div>
        <h1 style={{color: "aliceblue", backgroundColor: "green", width: "fit-content", padding: "10px 20px", borderRadius: "20px"}} > Model </h1>
        <ul style={{fontSize: "30px"}}>
            {devicesMap}
        </ul>
        <input placeholder='name Model' value={add.text} onChange={change} />
        <button onClick={changeAdd} >Add</button>

        <table>
            <thead>
                <tr>
                    <th></th>
                    <th>avoid {"(mutates the array"} </th>
                    <th>prefer {"(returns a new array"} </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>adding</td>
                    <td>push, unshift</td>
                    <td> concat, {"[...arr]"} spread syntax {'('} <span style={{color: "blue"}}>example</span> {')'} </td>
                </tr>
                <tr>
                    <td>removing</td>
                    <td>pop, shift, splice</td>
                    <td> filter, slice {'('} <span style={{color: "blue"}}>example</span> {')'} </td>
                </tr>
                <tr>
                    <td>replacing</td>
                    <td>splice, arr{"[i]"} = ...assignment</td>
                    <td> map {'('} <span style={{color: "blue"}}>example</span> {')'} </td>
                </tr>
                <tr>
                    <td>sorting</td>
                    <td>reverse, sort</td>
                    <td> copy the array first {'('} <span style={{color: "blue"}}>example</span> {')'} </td>
                </tr>

            </tbody>
        </table>

    </div>
  )
}
