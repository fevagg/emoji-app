import * as React from "react";
import { Container, Row } from "react-bootstrap";
import useAxios from "../../services/useAxios";

import Emoji from "../Emoji/Emoji";
import Loading from "../Loading";

import "./EmojiList.css";

const EmojiList = ({ search, cutted }) => {
  //Fetching data using custom hook.
  const [data, updated] = useAxios(
    "https://unpkg.com/emoji.json@13.1.0/emoji.json"
  );

  const [emojis, setEmojis] = React.useState([]);

  //Filtering the emoji json depending on the client search;
  React.useEffect(() => {
    setEmojis(
      data.filter(
        (emoji) =>
          (!search.search && emoji.group === search.category) ||
          (emoji.name
            .toLowerCase()
            .search(search.search ? search.search.toLowerCase() : "") > -1 &&
            emoji.group === search.category)
      )
    );
  }, [data, search]);

  //Setting a default value;
  React.useEffect(() => {
    if (!search.search && !search.category) {
      setEmojis(data.filter((emoji) => emoji.group === "Smileys & Emotion"));
    }
  }, [data, search]);

  return (
    <section id="emojis">
      <Container className="emojis">
        <Row className="emoji-grid">
          {!updated ? (
            <div className="no-emojis">
              <Loading />
            </div>
          ) : emojis.length > 0 ? (
            cutted ? (
              emojis
                .slice(0, 12)
                .map((emoji) => <Emoji key={emoji.codes} emoji={emoji} />)
            ) : (
              emojis.map((emoji) => <Emoji key={emoji.codes} emoji={emoji} />)
            )
          ) : (
            <div className="no-emojis">
              <h3>{`Sadly, we don't have that emoji here! \u{1F605}`}</h3>
            </div>
          )}
        </Row>
      </Container>
    </section>
  );
};

export default EmojiList;
