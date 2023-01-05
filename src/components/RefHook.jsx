import React, { useRef } from "react";

const RefHook = () => {
  const inputRef = useRef(null);

  function handleInput() {
    inputRef.current.value = 1000;
    inputRef.current.focus();
    inputRef.current.style.color = "red";
    // inputRef.current.style.display = "none";
  }
  return (
    <>
      <h2>Use Ref Hook</h2>
      <input type="text" ref={inputRef} />
      <button onClick={handleInput}>Submit</button>
    </>
  );
};

export default RefHook;
