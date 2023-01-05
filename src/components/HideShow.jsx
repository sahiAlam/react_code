import React, { useState } from "react";

const HideShow = () => {
  const [status, setStatus] = useState(false);
  return (
    <>
      <div>
        {status ? <h1>Hello World</h1> : null}
        <button onClick={() => setStatus(false)}>Hide</button>
        <button onClick={() => setStatus(true)}>Show</button>
        <button onClick={() => setStatus(!status)}>Toggle</button>
      </div>
    </>
  );
};

export default HideShow;
