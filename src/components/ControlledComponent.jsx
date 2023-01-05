import React, { useState, useRef } from "react";

const ControlledComponent = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");

    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);

    const formData = {name, email, number};
    function formSubmit(e) {
        e.preventDefault();
        console.log(formData);

        function clearData() {
          inputRef1.current.value = "";
          inputRef2.current.value = "";
          inputRef3.current.value = "";
        }
    clearData();    
    }
  return (
    <>
      <div style={{
        display: "block"
      }}>
        <form onSubmit={formSubmit}>
          <input type="text" ref={inputRef1} value={name} onChange={(e) => setName(e.target.value)}  placeholder="Your Name"/> <br /><br />
          <input type="email" ref={inputRef2} value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your Email"/> <br /><br />
          <input type="number" ref={inputRef3} value={number} onChange={(e) => setNumber(e.target.value)} placeholder="Year of Passing"/> <br /><br />
          <button>Sent Data</button>
        </form>
      </div>
    </>
  );
};

export default ControlledComponent;