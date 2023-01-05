import React, { forwardRef } from "react";

const childForwardRef = (props, ref) => {
  return (
    <>
      <input type="text" ref={ref} />
    </>
  );
};

export default forwardRef(childForwardRef);
