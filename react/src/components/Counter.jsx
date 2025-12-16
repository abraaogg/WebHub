import React, { useState } from "react";

function Counter() {
  const [sum, setSum] = useState(0);

  function handleAdd() {
    setSum(sum + 1);
  }

  return (
    <div>
      <h2>Counter: {sum}</h2>
      <button onClick={handleAdd}>Add 1</button>
    </div>
  );
}

export default Counter;
