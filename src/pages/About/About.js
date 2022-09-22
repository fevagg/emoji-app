import React from "react";
import Header from "../../components/Header/Header";
import { Col, Container, Row } from "react-bootstrap";
import { HandIndexThumb, Window } from "react-bootstrap-icons";

import "./About.css";

const About = () => {
  return (
    <>
      <Header className="about-header">
        <Col className="title">
          <h1 className="title-content">About</h1>
        </Col>
      </Header>
      <Container as={"section"} className="about">
        <Row>
          <Col xs={12} md={6} xl={6}>
            Found-ji is a web application developed to search your favourites
            emojis in an easy way, just typing the emote you are looking for.
          </Col>
          <Col xs={12} md={6} xl={6} className="window-icon">
            <Window width={100} height={100} color="#d34444" />
            <span className="window-emoji">{"\u{1F970}"}</span>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6} xl={6}>
            Clicking in the emotes, you can access to their hexadecimal value,
            group and name.
          </Col>
          <Col xs={12} md={6} xl={6}>
            <span className="clicked-emoji">{`\u{1F606}`}</span>
            <HandIndexThumb
              color="#d34444"
              className="hand-icon"
              width={50}
              height={50}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
