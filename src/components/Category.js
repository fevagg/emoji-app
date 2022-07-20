import * as React from "react";
import { Form } from "react-bootstrap";

const categories = [
  "Smileys & Emotion",
  "People & Body",
  "Animals & Nature",
  "Food & Drink",
  "Travel & Places",
  "Activities",
  "Objects",
  "Symbols",
  "Flags",
];

export const Category = (props) => {
  return (
    <Form.Select
      name="category"
      onChange={props.handleCategory}
      aria-label="Default select example"
    >
      {categories &&
        categories.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
    </Form.Select>
  );
};
