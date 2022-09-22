import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";

const Footer = (props) => {
  return (
    <footer>
      <Container fluid>
        <Row>
          <Col>
            <h3>Found-ji</h3>
            <p>
              created by{" "}
              <a
                target={"_blank"}
                rel="noreferrer"
                href="https://github.com/fevagg"
              >
                @fevagg
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
