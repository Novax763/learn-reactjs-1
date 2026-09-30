import { useState } from "react";

export default function ChallengeUseState() {
  const [pending, setPending] = useState(0);
  const [completed, setCompleted] = useState(0);

  async function handleClick() {
    let pen = pending + 1;
    setPending(pen)
    setTimeout(() => {
        setCompleted(completed + pen)
        setPending((c) => {
            return c = 0;
        })
    }, 3000);
  }
  return (
    <>
      <h3>Pending: {pending}</h3>
      <h3>Completed: {completed}</h3>
      <button onClick={handleClick}>Buy</button>
    </>
  );
}


