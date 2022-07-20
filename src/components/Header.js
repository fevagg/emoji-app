import * as React from "react";
import { Container, Row } from "react-bootstrap";

import "../assets/style/Header.css";

export const Header = () => {
    return(
        <header className="title">
            <Container>
                <Row>
                    <h3 className="title-content">Emoji App</h3>
                    <h6 className="subheader">Search your favourite emoji!</h6>
                </Row>
            </Container>
        </header>
    )
};
