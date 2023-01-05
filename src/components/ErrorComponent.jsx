import React from "react";
import { Alert } from "react-bootstrap";

const ErrorComponent = ({ message }) => {
  return (
    <Alert variant={"danger"}>
      {message}
    </Alert>
  );
};

export default ErrorComponent;
