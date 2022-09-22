import * as React from "react";
import { Container, Row } from "react-bootstrap";
import "./Header.css";

const Header = (props) => {
  return (
    <>
      <Container className={`header ${props.className}`} as={"header"}>
        <Row>
          {props.children}
        </Row>
      </Container>
    </>
  );
};

export default Header;