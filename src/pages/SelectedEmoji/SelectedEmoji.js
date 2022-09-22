import React from "react";
import { useLocation } from "react-router";
import { Col, Container, Row } from "react-bootstrap";
import "./SelectedEmoji.css";
import ClipboardButton from "../../components/Clipboard/Clipboard";

const SelectedEmoji = () => {
  //Using location state to pass the selected emoji through the route.
  const location = useLocation();
  const emoji = location.state;

  return (
    <Container as={"section"} className="selected-emoji">
      <Row>
        <Col
          xl={6}
          md={6}
          xs={5}
          className="d-flex gap-5 justify-content-center align-items-center flex-column text-center"
        >
          <h2 className="title-category">{emoji.group}</h2>
          <span className="emoji">{emoji.char}</span>
          <ClipboardButton emoji={emoji} />
        </Col>
        <Col xl={6} md={6} xs={5} className="info-column">
          <table>
            <tbody>
              <tr>
                <th>Unicode</th>
              </tr>
              <tr>
                <td>{emoji.codes}</td>
              </tr>
              <tr>
                <th>Subgroup</th>
              </tr>
              <tr>
                <td>{emoji.subgroup}</td>
              </tr>
            </tbody>
          </table>
        </Col>
      </Row>
    </Container>
  );
};

export default SelectedEmoji;
