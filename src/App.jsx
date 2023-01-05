import React, { useState, useEffect } from "react";
import Student from "./components/Student";
import Class from "./components/Class";
import HideShow from "./components/HideShow";
import Form from "./components/Form";
import Conditional from "./components/Conditional";
import User from "./components/User";
import LifeCycle from "./components/LifeCycle";
import Hooks1 from "./components/Hooks1";
import Hooks2 from "./components/Hooks2";
import Looping from "./components/Looping";
import ProductCard from "./components/ProductCard";
import Child from "./components/Child";
import CheckComponent from "./components/CheckComponent";
import MemoHook from "./components/MemoHook";
import RefClass from "./components/RefClass";
import RefHook from "./components/RefHook";

import style from "../src/Styles/styles.module.css";
import ForwardRef from "./components/ForwardRef";
import ControlledComponent from "./components/ControlledComponent";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import FormElem from "./components/FormElem";
import PreviousState from "./components/PreviousState";



// images
// import biriyani from "./assets/images/biriyani.jpg";

const App = () => {
  const [name, setName] = useState("Sahil");
  const [num, setNum] = useState(0);
  const [value, setValue] = useState(null);
  const [print, setPrint] = useState(true);

  function updateName() {
    setName("Rahil");
  }

  useEffect(() => {
    // console.log("Mounted");

    return () => {
      // console.log("cleanup function")
    };
  }, [name]);

  // console.warn(">>>>");
  function getName(data) {
    alert(data);
  }
  return (
    <>
      <div>
        <h1 className={style.heading}>React App</h1>
        <p className={style.para}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          explicabo temporibus soluta.
        </p>
        <button onClick={() => setName("Updated")}>name</button>
        <h1>{name}</h1>
        <HideShow />
        <Form />
        <Conditional />
        <User />
        <hr />
        <Hooks1 />
        <Hooks2 data="Sahil Khan" />
        <hr />
        <LifeCycle />
        <hr />
        <Looping />
        <ProductCard />
        <Child data={getName} />
        <hr />
        <CheckComponent />
        <hr />
        <MemoHook />
        <hr />
        <RefClass />
        <hr />
        <RefHook />
        <hr />
        <ForwardRef />
        <hr />
        <ControlledComponent />
        <hr />
        <PreviousState />
        <hr />
        <FormElem />
      </div>
    </>
  );
};

export default App;
