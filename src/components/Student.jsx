import React, { useState } from "react";

const Student = (props) => {
  const [name, setName] = useState(props.name);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "skyBlue",
      }}
    >
      <h1>Hello {name}</h1>
      <p>Email : {props.email}</p>
      <button onClick={() => setName("Rahil Khan")}>Update Name</button>
    </div>
  );
};

export default Student;
