import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./Navigator.css";

const Navigator = () => {
  return (
    <Navbar>
      <Container fluid>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto nav">
            <Link className="nav-link" to={"/"}>
              🏠 Home
            </Link>
            <Link className="nav-link" to={"/about"}>
              🧑🏻 About
            </Link>
            <Link className="nav-link" to={"/emojis"}>
              🤣 Emojis
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigator;
