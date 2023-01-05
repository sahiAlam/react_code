import React, { useState } from "react";

function Hooks1() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div>
        <h1>Hooks useState {count}</h1>
        <button onClick={() => setCount(count + 1)}>Update</button>
      </div>
    </>
  );
}

export default Hooks1;
