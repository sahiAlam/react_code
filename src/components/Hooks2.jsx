import React, { useEffect, useState } from "react";

function Hooks2(props) {
  const [count, setCount] = useState(10);
  const [num, setNum] = useState(0);
  const [name, setName] = useState("Mala")

  useEffect(() => {
    console.warn("update count and name");
  },[count, name]);

  useEffect(() => {
    console.warn("update num")
  }, [num])

console.log("render")
  return (
    <>
      <div>
        <h1>Count - {count}</h1>
        <button onClick={() => setCount(count + 1)}>Update Count</button>

        <h1>Num - {num}</h1>
        <button onClick={() => setNum(count + 1)}>Update Num</button>

        <h2>Name - {name}</h2>
        <button onClick={() => setName(props.data)}>Toggle Name</button>
      </div>
    </>
  );
}

export default Hooks2;
