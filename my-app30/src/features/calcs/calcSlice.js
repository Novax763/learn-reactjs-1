import { createSlice } from "@reduxjs/toolkit";

const initionlState = {
    result: null,
    id: 30,
}

export const calcSlice = createSlice({
    name: "calculation",
    initialState : initionlState,
    reducers : {
        add: (currentState, action) => {
            const sumbution =
              action.payload.firstNumber + action.payload.secondNumber;
              currentState.result = sumbution

              console.log(currentState)
              console.log(action)
            // console.log(currentState);
            // console.log(action)
            //   console.log(sumbution)
        },
        sum: (currentState, action) => {
            const sumbution =
              action.payload.firstNumber - action.payload.secondNumber;
            currentState.result = sumbution;
            // console.log(currentState)
            // console.log(action)
        },
        mult: (currentState, action) => {
            const sumbution =
              action.payload.firstNumber * action.payload.secondNumber;
            currentState.result = sumbution;
            // console.log(currentState)
            // console.log(action)
        },
        div: (currentState, action) => {
            const sumbution =
              action.payload.firstNumber / action.payload.secondNumber;
            currentState.result = sumbution;
            // console.log(currentState)
            // console.log(action)
        }
    }
    
})

export const { sum, add, mult, div } = calcSlice.actions

export default calcSlice.reducer