import React, { useRef } from "react";
import ChildForwardRef from "./ChildForwardRef";

const ForwardRef = () => {
  const inputRef = useRef(null);
  function updateInput() {
    inputRef.current.value = "Your Name :"
    inputRef.current.style.backgroundColor = "Blue";
    inputRef.current.style.color = "#fff";
  }
  return (
    <>
      <ChildForwardRef ref={inputRef} />
      <button onClick={updateInput}>Submit</button>
    </>
  );
};

export default ForwardRef;
