import React from "react";
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";
import ClipboardButton from "../Clipboard/Clipboard";
import "./Emoji.css";

const Emoji = (props) => {
  return (
    <Col
      className="emoji"
      xs={5}
      md={3}
      xl={2}
      data-emoji={props.emoji.char}
      data-unicode={props.emoji.codes}
    >
      {/* I replaced each whitespace in the emoji codes for a better URI lecture */}
      <Link
        style={{ textDecoration: "none" }}
        to={`/emojis/${props.emoji.codes.replace(/\s+/g, "")}`}
        state={props.emoji}
      >
        {props.emoji.char}
      </Link>
      <ClipboardButton emoji={props.emoji} />
    </Col>
  );
};

export default Emoji;
