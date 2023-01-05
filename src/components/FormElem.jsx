import React, { useState, useEffect } from "react";
import { Table, Container } from "react-bootstrap";
import ErrorComponent from "./ErrorComponent";
import Loader from "./Loader";

const FormElem = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos"
        );
        const data = await response.json();
        setUsers(data);
        setLoading(false);
      };
      fetchData();
    } catch (error) {
      setError(true);
    }
  }, []);

  if (error) return <ErrorComponent message={"Error while fetching data.."} />;

  function removeRecoard(itemId) {
    fetch(`https://jsonplaceholder.typicode.com/todos/${itemId}`, {
      method: "DELETE",
    }).then((response) => {
      response.json().then((result) => {
        console.log(result);
      });
    });
  }

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Container>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>S.L No</th>
                  <th>#ID</th>
                  <th>Title</th>
                  <th>Completed</th>
                </tr>
              </thead>
              <tbody>
                {users.map((item, index) => (
                  <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.userId}</td>
                    <td>{item.title}</td>
                    <td>{item.completed === true ? "Yes" : "No"}</td>
                    <td>
                      <button onClick={() => removeRecoard(item.id)}>
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Container>
        </>
      )}
    </>
  );
};

export default FormElem;
