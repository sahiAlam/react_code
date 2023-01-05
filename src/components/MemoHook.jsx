import React, { useState, useMemo } from "react";

const MemoHook = () => {
  const [count, setCount] = useState(1);
  const [item, setItem] = useState(10);

  const multiCountMemo = useMemo(() => {
    console.log("memo called")
    return count *5;
  }, [count])

  console.log("render");
  return (
    <>
      <div style={{
        width: "500px",
        margin: "1rem auto",
      }}>
      <h1>useMemo Hook</h1>
      <h4>count: {count}</h4>
      <h4>Item: {item}</h4>
      <h4>{multiCountMemo}</h4>
      <button onClick={() => {setCount(count+1)}}>count ++</button>
      <button onClick={() => {setItem(item+10)}}>Item ++</button>
      </div>
    </>
  );
};

export default MemoHook;
