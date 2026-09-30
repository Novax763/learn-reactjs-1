import { useState } from "react";

export default function Cont() {
  const [player, setPlayer] = useState({
    firstName: "Ranjani",
    lastName: "Shettar",
    score: 10,
  });
  function caluc() {
    setPlayer({...player, score: player.score += 1})
  }

  return (
    <>
      <label style={{ margin: "50px" }}>
        Score: <b value={player.score}
          onChange={(e) => {
            setPlayer({ ...player, score: e.target.value });
          }}> {player.score} </b>
        <button onClick={caluc} >
          +1
        </button>
      </label>

      <hr style={{ margin: "20px" }} />

      <label style={{ margin: "50px" }}>
        First name:
        <input value={player.firstName} onChange={(e) => {
          setPlayer({...player, firstName: e.target.value })
        }} />
      </label>

      <hr style={{ margin: "20px" }} />

      <label style={{ margin: "50px" }}>
        Last name:
        <input value={player.lastName} onChange={(e) => {
          setPlayer({...player, lastName: e.target.value})
        }} />
      </label>
    </>
  );
}
