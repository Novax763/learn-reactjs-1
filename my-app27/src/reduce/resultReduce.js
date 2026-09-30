export default function resultReduce(resultState, { type, payload }) {
  if (type === "added") {
    return payload.firstNumber + payload.secondNumber;
  } else if (type === "subtacted") {
    return payload.firstNumber - payload.secondNumber;
  } else if (type === "Mult") {
    return payload.firstNumber * payload.secondNumber;
  } else if (type === "Div") {
    return payload.firstNumber / payload.secondNumber;
  }
}