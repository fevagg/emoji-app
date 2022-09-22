import React from "react";

//Importing components
import EmojiList from "../../components/EmojiList/EmojiList";
import Search from "../../components/Search/Search";
import Header from "../../components/Header/Header";
import { Col } from "react-bootstrap";

import "./Home.css";
import emoji from "../../assets/img/emoji-header.png";

const Home = () => {
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

  //Setting a default category if it doesn't exists;
  React.useEffect(() => {
    if (!value.category) {
      setValue((prev) => {
        return {
          ...prev,
          category: "Smileys & Emotion",
        };
      });
    }
  }, [value.category]);

  return (
    <>
      <Header className="home-header">
        <Col className="emoji-header">
          <figure>
            <img alt="emoji-header" src={emoji} />
          </figure>
        </Col>
        <Col className="title">
          <h1 className="title-content">Found-ji</h1>
          <h2 className="subheader">Search your favourite emoji!</h2>
        </Col>
      </Header>
      <Search handleInput={handleInputs} />
      <EmojiList search={value} cutted />
    </>
  );
};

export default Home;
