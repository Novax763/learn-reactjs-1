import "./App.css";


import { useState, useReducer } from "react";
import resultReduce from "./reduce/resultReduce";

function App() {
  const [firstNumberInput, setFirstNumberInput] = useState(null);
  const [secondNumberInput, setSecondNumberInput] = useState(null);

  const [result2, dispatch] = useReducer(resultReduce, null);

  //// event

  function handleSumClick() {
    dispatch({
      type: "added",
      payload: {
        firstNumber: Number(firstNumberInput),
        secondNumber: Number(secondNumberInput),
      },
    });
  }

  function handleSubClick() {
    dispatch({
      type: "subtacted",
      payload: {
        firstNumber: Number(firstNumberInput),
        secondNumber: Number(secondNumberInput),
      },
    });
  }

  function handleMultClick() {
    dispatch({
      type: "Mult",
      payload: {
        firstNumber: Number(firstNumberInput),
        secondNumber: Number(secondNumberInput),
      },
    });
  }

  function handleDivClick() {
    dispatch({
      type: "Div",
      payload: {
        firstNumber: Number(firstNumberInput),
        secondNumber: Number(secondNumberInput),
      },
    });
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


        <h2> {result2} </h2>
      </div>
    </div>
  );
}

export default App;
