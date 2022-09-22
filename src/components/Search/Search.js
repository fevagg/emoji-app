import * as React from "react";
import { Form } from "react-bootstrap";
import "./Search.css";
import Category from "../Category/Category";

//Destructuring props parameter for practicality:
const Search = ({ handleInput }) => {
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

export default Search;
