import Infrom from './Infrom';
import { useState } from 'react'

export default function MyFormt() {
    let [forminfo, setforminfo] = useState({select1: "", country: "",checked: false, text: "",name: "", email: "", phone: "", age: ""});
    
    function fonction(event) {
        event.preventDefault();
        console.log(information)
    }
 
    const information = {
        "name": forminfo.name,
        "email": forminfo.email,
        "phone": forminfo.phone,
        "age": forminfo.age,
        "text": forminfo.text,
        "checked": forminfo.checked,
        "country": forminfo.country,
        "selected": forminfo.select1
    };
  return (
    <div>
        <form action="" style={{padding: "20px"}} onSubmit={fonction}>
            <label htmlFor="" style={{padding: "0px 20px 0px 25px"}}
            > name : </label>
            <input value={forminfo.name} onChange={
                (events) => {
                    setforminfo({...forminfo, name: events.target.value})
                }
            } type="text" />



            <hr style={{margin: "20px"}}/>




            <label htmlFor="" style={{padding: "0px 20px 0px 40px"}
            }> email : </label>
            <input value={forminfo.email} onChange={
                (events) => {
                    setforminfo({...forminfo, email: events.target.value})
                }} type="text" name="" id="" />



            <hr style={{margin: "20px"}}/>



            <label htmlFor="" style={{padding: "0px 20px 0px 40px"}
            }> phone : </label>
            <input value={forminfo.phone} onChange={
                (events) => {
                    setforminfo({...forminfo, phone: events.target.value})
                }} type="text" name="" id="" />



            <hr style={{margin: "20px"}}/>



            <label htmlFor="" style={{padding: "0px 20px 0px 40px"}
            }> age : </label>
            <input value={forminfo.age} onChange={
                (events) => {
                    setforminfo({...forminfo, age: events.target.value }
                    )
                }} type="text" name="" id="" />



            <hr style={{margin: "20px"}} />



            <label htmlFor=""> are you student </label>
            <input checked={forminfo.checked} onChange={(events) => {
                if(forminfo.checked === false) {
                    setforminfo({...forminfo, checked: events.target.checked})
                } else if (forminfo.checked === true) {
                    setforminfo({...forminfo, checked: false})
                }
            }} type="checkbox" name="" id="" />



            <hr style={{margin: "20px"}} />



            <label htmlFor="" style={{padding: "0px 20px 0px 40px"}}> text :  </label>
            <textarea value={forminfo.text} onChange={
                (events) => {
                    setforminfo({...forminfo, text: events.target.value})
                }
                }/>


            <hr style={{margin: "20px"}}/>




            <select value={forminfo.country} onChange={(events) => {
                setforminfo({...forminfo, country: events.target.value})
            }}>
                <option>KSA</option>
                <option>Egypt</option>
                <option>Syria</option>
                <option>Moroco</option>
            </select>
            


            <hr style={{margin: "20px"}}/>



            <div>
                <input checked={forminfo.select1 === "student"} onChange={() => {
                    setforminfo({...forminfo, select1: "student"})
                }} name='student' type="radio" style={{padding: "20px", margin: "30px"}}/> 
                Student
                <input checked={forminfo.select1 === "teacher"} onChange={() => {
                    setforminfo({...forminfo, select1: "teacher"})
                }} name='teacher' type="radio" style={{padding: "20px", margin: "30px"}}/> 
                Teacher
            </div>


            
            <hr style={{margin: "20px"}}/>


            <button style={{
                padding: "10px",
                border: "none",
                borderRadius: "10px",
                backgroundColor: "teal",
                color: "aliceblue",
                }} > Submit </button>
        </form>
    </div>
  )
}
