import "./FormStyle.css";
import Model from './Model';
import { useState } from 'react';
import MyComponent from "./MyComponent";
import { LoanInputContext } from "./contexts/LoanFormInputContext";
import { UserContext } from "./contexts/UserContext";
import { useContext } from "react";

export default function LonForm() {
  const userDataInformation = useContext(UserContext);
  const [errorMe, seterrorMe] = useState(null)
  const[showModel, setshowModel] = useState(false);
  let inition = userDataInformation.name
  let initionAge = userDataInformation.age
  const [loanInputs, setloanInputs] = useState({
    name: inition,
    phone: "",
    age: initionAge,
    areYouAnEmployee: "false",
    option: "less than 500$",
  });

  const information = {
    name: loanInputs.name,
    phone: loanInputs.phone,
    age: loanInputs.age,
    areYouAnEmployee: loanInputs.areYouAnEmployee,
    option: loanInputs.option,
  };

  function handleDisabled(events) {
    events.preventDefault();
    if (loanInputs.age < 18 || loanInputs.age > 100)
    {
      seterrorMe("This age is not allowed")
      
    } else if (loanInputs.phone.length < 10 || loanInputs.phone.length > 12) {
      seterrorMe("phone Number Format Is Incorrect")
    } else {
      seterrorMe(null)
      console.log(information);
    }

    setshowModel(true)
  }
  function handleIsNone() {
    if (showModel) {
      setshowModel(false)
    }
  }
  const btnDisabled = 
    loanInputs.name == "" || loanInputs.age == ""  || loanInputs.phone == "";


    function handlePhoneNumberInputChange(value) {
      setloanInputs({...loanInputs, phone: value})
    }
    function handleNameInputChange(value) {
      setloanInputs({...loanInputs, name: value})
    }
    function handleAgeInputChange(value) {
      setloanInputs({...loanInputs, age: value})
    }

  return (
    <div
      className="flex"
      style={{ flexDirection: "column" }}
      onClick={handleIsNone}
    >
      <h1> Hello  {userDataInformation.name} This Form  </h1>
      <form
        action=""
        id="loan-form"
        className="flex"
        style={{ flexDirection: "column" }}
      >
        <h1> Requesting a Loan</h1>
        <hr />


        <LoanInputContext.Provider  
        value={{value: loanInputs.name,
         handleChange: handleNameInputChange,
         labelTitle: "Name"
         }}>
        <MyComponent />
        </LoanInputContext.Provider> 

        
        {/* <label htmlFor="">Name:</label>
        <input
          value={loanInputs.name}
          onChange={(events) => {
            setloanInputs({ ...loanInputs, name: events.target.value });
          }},
        /> */}

        <LoanInputContext.Provider 
          value={{
            value: loanInputs.phone,
            handleChange: handlePhoneNumberInputChange,
            labelTitle: "Phone Number"
          }}
          >
          <MyComponent />
        </LoanInputContext.Provider>

        {/* <MyComponent
          title={loanInputs} settitle={setloanInputs}
        /> */}

        {/* <label htmlFor="">Phone Number:</label>
        <input
          value={loanInputs.phone}
          onChange={(events) => {
            setloanInputs({ ...loanInputs, phone: events.target.value });
          }}
        />  */}


        <LoanInputContext
          value={{
            value: loanInputs.age,
            handleChange: handleAgeInputChange,
            labelTitle: "age"
          }}
         >

          <MyComponent />
        </LoanInputContext>

        {/* <label htmlFor="">Age:</label>
        <input
          type="text"
          value={loanInputs.age}
          onChange={(events) => {
            setloanInputs({ ...loanInputs, age: events.target.value });
          }}
        /> */}



        <label htmlFor="" style={{ marginTop: "30px" }}>
          Are you an employee
        </label>
        <input
          type="checkbox"
          value={loanInputs.areYouAnEmployee}
          onChange={(events) => {
            setloanInputs({
              ...loanInputs,
              areYouAnEmployee: events.target.checked,
            });
          }}
        />

        <label htmlFor="">Salary: </label>
        <select
          value={loanInputs.option}
          onChange={(events) => {
            setloanInputs({ ...loanInputs, option: events.target.value });
          }}
        >
          <option>less than 500$</option>
          <option>between 500$ and 2000$</option>
          <option>above 2000</option>
        </select>
        <button
          className={btnDisabled ? "disable" : ""}
          onClick={handleDisabled}
          disabled={btnDisabled}
          id="submit-loan-btn-btn"
        >
          Submit
        </button>
      </form>
      <Model errorMessge={errorMe} isVisible={showModel} />
    </div>
  );
}

