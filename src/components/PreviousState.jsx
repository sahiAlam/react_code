import React, { useState } from "react";

const PreviousState = () => {
  const [count, setCount] = useState(1);

  function updateCount() {
    const rand = Math.floor(Math.random()*10);
    setCount((prev) => {
        console.log(prev);
        return rand;
    });
  }
  return (
    <>
      <h2 style={{
        textAlign: "center"
      }}>Previous State</h2>
      <h3
        style={{
          textAlign: "center",
        }}
      >
        {count}
      </h3>
      <button style={{
        width: "120px",
        margin: "0 auto",
        display: "block"
      }} onClick={updateCount}>Update count</button>
    </>
  );
};

export default PreviousState;
