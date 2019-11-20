import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";

export let interceptor;

export const withErrorHandler = WrappedComponent => {
  return props => {
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    interceptor = response => {
      setError(true);
      setErrorMessage(`${response}`);
    };

    let body = <WrappedComponent {...props} />;

    if (error) {
      body = (
        <Row>
          <Col>
            <h2>Sorry, an Error Occurred</h2>
            {errorMessage}
          </Col>
        </Row>
      );
    }

    return <>{body}</>;
  };
};
