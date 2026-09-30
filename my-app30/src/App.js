import "./App.css";


import { useState } from "react";

/// redux
import { useSelector, useDispatch } from "react-redux";
import { sum, add , mult, div} from "./features/calcs/calcSlice";


function App() {
  // Use redux
  const conut = useSelector((state) => { 
    return state.calc.result;
  });
  const dispatch = useDispatch();
  
  //// end redux
  // console.log(conut)
  const [firstNumberInput, setFirstNumberInput] = useState(null);
  const [secondNumberInput, setSecondNumberInput] = useState(null);

  // const [result2, setResult] = useState(null);

  //// event

  function handleSumClick() {
    /// 
    dispatch(
      add({
        firstNumber: Number(firstNumberInput),
        secondNumber: Number(secondNumberInput),
      }),
    );
    // setResult(Number(firstNumberInput) + Number(secondNumberInput));
  }

  function handleSubClick() {
    dispatch(
      sum({
        firstNumber: Number(firstNumberInput),
        secondNumber: Number(secondNumberInput),
      }),
    );
    // setResult(Number(firstNumberInput) - Number(secondNumberInput));
  }

  function handleMultClick() {
    dispatch(
      mult({
        firstNumber: Number(firstNumberInput),
        secondNumber: Number(secondNumberInput),
      }),
    );
    // setResult(Number(firstNumberInput) * Number(secondNumberInput));
  }

  function handleDivClick() {
    dispatch(
      div({
        firstNumber: Number(firstNumberInput),
        secondNumber: Number(secondNumberInput),
      }),
    );
    // setResult(Number(firstNumberInput) / Number(secondNumberInput));
  }

  return (
    <div className="App">
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          backgroundColor: "teal",
        }}
      >
        <label htmlFor="">First Number</label>
        <input
          value={firstNumberInput}
          onChange={(event) => {
            setFirstNumberInput(event.target.value);
          }}
        />
        <label htmlFor="">Second Number</label>
        <input
          value={secondNumberInput}
          onChange={(event) => {
            setSecondNumberInput(event.target.value);
          }}
        />
        <button onClick={handleSumClick}> sum </button>
        <button onClick={handleSubClick}> subtract </button>
        <button onClick={handleMultClick}> multiply </button>
        <button onClick={handleDivClick}> divide </button>

        <h2> {conut} </h2>
      </div>
    </div>
  );
}

export default App;