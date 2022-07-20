import * as React from "react";
//Importing components
import { Container, Row, Col, Button } from "react-bootstrap";
import { PencilSquare } from "react-bootstrap-icons";
//Data an assets;
import RAW_EMOJI from "../json/emoji.json";
import "../assets/style/Emoji.css";

export const Emoji = ({ search }) => {
  const data = JSON.parse(JSON.stringify(RAW_EMOJI));
  const [emojis, setEmojis] = React.useState([]);

  const handleClipboard = (e) => {
    navigator.clipboard.writeText(e.target.previousSibling.nodeValue);
  };

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
  }, [search]);

  //Setting a default value;
  React.useEffect(() => {
    if (!search.search) {
      setEmojis(data);
    }
  }, []);

  return (
    <section className="emojis" id="emojis">
      <Container>
        <Row className="emoji-grid">
          {emojis.length > 0 ? (
            emojis.slice(0, 12).map((emoji) => (
              <Col
                className="emoji"
                xs={6}
                md={3}
                xl={2}
                data-emoji={emoji.char}
                data-unicode={emoji.codes}
                key={emoji.codes}
              >
                {emoji.char}
                <Button onClick={handleClipboard}>
                  <PencilSquare values={emoji.char} />
                </Button>
              </Col>
            ))
          ) : (
            <div
              className="d-flex align-items-center justify-content-center"
              style={{ height: "18em" }}
            >
              {`Sadly, we don't have that emoji here! \u{1F605}`}
            </div>
          )}
        </Row>
      </Container>
    </section>
  );
};