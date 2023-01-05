import React, { useState } from "react";

const Conditional = () => {
  const [logged, setLogged] = useState("");
  
  return (
    <>
      {logged === 1 ? (
        <h1>Welcome User 1</h1>
      ) : logged === 2 ? (
        <h1>Welcome User 2</h1>
      ) : (
        <h1>Welcome User 3</h1>
      )}
    </>
  );
};

export default Conditional;
