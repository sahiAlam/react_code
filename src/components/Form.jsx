import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [tnc, setTnc] = useState(false);
  const [interest, setInterest] = useState("");
  function getFormData(e) {
    e.preventDefault();
    const userDetails = {name, interest, tnc};
    console.log(userDetails);
  }
  return (
    <>
      <form
        onSubmit={getFormData}
        style={{
          padding: "2rem",
          margin: "1rem",
          border: "1px solid",
          width: "500px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div>
          <label htmlFor="name">Name :</label>
          <input type="text" id="name" placeholder="Your Name" onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label htmlFor="select">Country</label>
          <select id="select" onChange={(e) => setInterest(e.target.value)}>
            <option>Select a Option</option>
            <option>India</option>
            <option>Pakistan</option>
            <option>Australia</option>
            <option>America</option>
          </select>
        </div>
        <div>
          <label htmlFor="checkbox">I agree all conditions</label>
          <input type="checkbox" id="checkbox" onClick={(e) => setTnc(e.target.checked)} />
        </div>
        {/* <span id="checkbox">I aggreed all condition</span> <br /> */}
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Form;
