import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./Error.css";

const ErrorPage = () => {
  return (
    <Container as={"section"} className="error-container" fluid>
      <Row className="d-flex justify-content-around align-items-center h-50 flex-column">
        <Col className="d-flex justify-content-center align-items-center">
          <h1>Hey, this page doesn't exist 😓</h1>
        </Col>
      </Row>
      <Row className="d-flex justify-content-around align-items-center gap-5 flex-column">
        <Col
          xs={12}
          className="d-flex justify-content-center align-items-center text-center"
        >
          We're so sorry, but the content you want to access does not exist
          anymore.
        </Col>
        <Col
          xs={12}
          className="d-flex justify-content-center align-items-center text-center"
        >
          Go&nbsp;<Link to="..">back {`\u{1F3E0}`}</Link>
        </Col>
      </Row>
    </Container>
  );
};

export default ErrorPage;
