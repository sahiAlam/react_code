import React from "react";
import style from "../Styles/looping.module.css";
import { Table } from "react-bootstrap";

const Looping = () => {
  const students = [
    {
      name: "Sahil",
      email: "sahil@test.com",
      contact: 111,
      address: [
        { Hn: 20, city: "Jangipur", state: "West Bengal", pin: 742213 },
        { Hn: 34, city: "Kolkata", state: "West Bengal", pin: 700005 },
        { Hn: 15, city: "Siliguri", state: "West Bengal", pin: 700009 },
      ],
    },
    {
      name: "Sahil",
      email: "sahil@test.com",
      contact: 111,
      address: [
        { Hn: 20, city: "Jangipur", state: "West Bengal", pin: 742213 },
        { Hn: 34, city: "Kolkata", state: "West Bengal", pin: 700005 },
        { Hn: 15, city: "Siliguri", state: "West Bengal", pin: 700009 },
      ],
    },
    {
      name: "Mala",
      email: "mala@test.com",
      contact: 222,
      address: [
        { Hn: 20, city: "Jangipur", state: "West Bengal", pin: 742213 },
        { Hn: 34, city: "Kolkata", state: "West Bengal", pin: 700005 },
        { Hn: 15, city: "Siliguri", state: "West Bengal", pin: 700009 },
      ],
    },
    {
      name: "Rahil",
      email: "rahil@test.com",
      contact: 333,
      address: [
        { Hn: 20, city: "Jangipur", state: "West Bengal", pin: 742213 },
        { Hn: 34, city: "Kolkata", state: "West Bengal", pin: 700005 },
        { Hn: 15, city: "Siliguri", state: "West Bengal", pin: 700009 },
      ],
    },
    {
      name: "Guest",
      email: "guest@test.com",
      contact: 444,
      address: [
        { Hn: 20, city: "Jangipur", state: "West Bengal", pin: 742213 },
        { Hn: 34, city: "Kolkata", state: "West Bengal", pin: 700005 },
        { Hn: 15, city: "Siliguri", state: "West Bengal", pin: 700009 },
      ],
    },
    {
      name: "Guest",
      email: "guest@test.com",
      contact: 444,
      address: [
        { Hn: 20, city: "Jangipur", state: "West Bengal", pin: 742213 },
        { Hn: 34, city: "Kolkata", state: "West Bengal", pin: 700005 },
        { Hn: 15, city: "Siliguri", state: "West Bengal", pin: 700009 },
      ],
    },
  ];

  return (
    <>
      <div>
        <h2 className={style.heading}>Looping</h2>
        <Table striped bordered>
          <tbody>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Contact</th>
            </tr>
            {students.map((elem, index) => (
              <tr key={index}>
                <td>{`#${index + 1}`}</td>
                <td>{elem.name}</td>
                <td>{elem.email}</td>
                <td>{elem.contact}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default Looping;