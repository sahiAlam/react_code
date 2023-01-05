import React from "react";

const Child = (props) => {
    const name = "Sahil Khan";
  return (
    <>
      <button onClick={() => props.data(name)}>Print Name</button>
    </>
  );
};

export default Child;
