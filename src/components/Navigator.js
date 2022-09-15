import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../assets/style/Navigator.css"

const Navigator = () => {
  return (
    <Navbar>
      <Container fluid>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto nav">
            <Nav.Link href="#home">
            🏠 Home
            </Nav.Link>
            <Nav.Link href="#features">
            🧑🏻 About
            </Nav.Link>
            <Nav.Link href="#pricing">
            🤣 Emojis
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigator;
