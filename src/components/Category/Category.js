import * as React from "react";
import { Form } from "react-bootstrap";
import "./Category.css";

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

const Category = ({ handleCategory }) => {
  return (
    <Form.Select
      name="category"
      className="category-input"
      onChange={handleCategory}
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

export default Category;
