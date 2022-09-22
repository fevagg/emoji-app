import React from "react";
import { Clipboard } from "react-bootstrap-icons";
import { Button } from "react-bootstrap";
import "./Clipboard.css";

const handleClipboard = (emoji) => {
  navigator.clipboard.writeText(emoji);
};

const ClipboardButton = (props) => {
  return (
    <Button
      className="clipboard-btn"
      onClick={() => handleClipboard(props.emoji.char)}
    >
      <Clipboard values={props.emoji.char} />
    </Button>
  );
};

export default ClipboardButton;
