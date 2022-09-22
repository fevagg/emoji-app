import React from "react";
import { Container, Row } from "react-bootstrap";
import Category from "../../components/Category/Category";
import EmojiList from "../../components/EmojiList/EmojiList";

import "./AllEmojis.css";

const AllEmojis = () => {
  const [value, setValue] = React.useState({});

  //Handle the inputs from app.js to passing values to the child components through props;
  const handleInputs = (input) => {
    const inputName = input.target.name;
    const inputValue = input.target.value;
    //Using prevState parameter to keep the other input value stored;
    setValue((prev) => {
      return {
        ...prev,
        [inputName]: inputValue,
      };
    });
  };

  return (
    <Container as={"section"} className="all-emojis">
      <Row>
        <Category handleCategory={handleInputs} />
      </Row>
      <EmojiList search={value} />
    </Container>
  );
};

export default AllEmojis;
