import * as React from "react";
import { Form } from "react-bootstrap";
import { Category } from "./Category";
import "../assets/style/Search.css"

//Destructuring props parameter for practicality:
export const Search = ({ handleInput }) => {
  //Handling submit to prevent default action;
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="search" id="search">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="input-group">
          <Form.Control
            className="search-input"
            name="search"
            type="text"
            placeholder="Enter an emoji name..."
            onChange={handleInput}
          />
          <Category handleCategory={handleInput} />
        </Form.Group>
      </Form>
    </section>
  );
};
