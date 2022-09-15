import * as React from "react";
import { Form } from "react-bootstrap";
import { Category } from "./Category";
import "../assets/style/Search.css";

//Destructuring props parameter for practicality:
export const Search = ({ handleInput }) => {
  //Handling submit to prevent default action;
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const scrollOnEmojiList = (e) => {
    e.target.focus();
    e.target.scrollIntoView();
  };

  return (
    <section className="search" id="search">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="input-group">
          <Form.Control
            className="search-input"
            name="search"
            type="text"
            placeholder="Smiling face..."
            onChange={handleInput}
            onFocus={scrollOnEmojiList}
          />
          <Category handleCategory={handleInput} />
        </Form.Group>
      </Form>
    </section>
  );
};
