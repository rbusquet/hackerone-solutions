import React from "react";

function CycleCounter({ cycle }) {
  const [counter, setCounter] = React.useState(0);

  function handleClick() {
    const next = counter + 1;
    setCounter(next % cycle);
  }
  return (
    <button
      data-testid="cycle-counter"
      style={{ fontSize: "1rem", width: 120, height: 30 }}
      onClick={handleClick}
    >
      {counter}
    </button>
  );
}

export default CycleCounter;
