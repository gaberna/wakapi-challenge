import React from "react";
import '../App.css';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Button'

const Header = () => (
    <div className="header">
        <Jumbotron>
            <Container>
                <h1>Wakapi Challenge!</h1>
                <p>
                    This form sings users and show them in a list.
                </p>
            </Container>
        </Jumbotron>
    </div>
);

export default Header;