import * as React from "react";
import { Col, Container, Row } from "react-bootstrap";

import emoji from "../assets/img/emoji-header.png";

import "../assets/style/Header.css";
import Navigator from "./Navigator";

export const Header = () => {
  return (
    <>
      <Navigator />
      <Container className="header" as={"header"}>
        <Row>
          <Col className="emoji-header">
            <figure>
              <img alt="emoji-header" src={emoji} />
            </figure>
          </Col>
          <Col className="title">
            <h1 className="title-content">Found-ji</h1>
            <h2 className="subheader">Search your favourite emoji!</h2>
          </Col>
        </Row>
      </Container>
    </>
  );
};
