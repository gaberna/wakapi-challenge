import React from "react";
import '../App.css';
import Container from 'react-bootstrap/Container';

const Header = () => (
    <div className="header">
        <Container>
            <h1 style={{ fontWeight: "bold" }}>Wakapi Challenge!</h1>
            <p>
                This form registers users and displays them in a list.
            </p>
        </Container>
    </div>
);

export default Header;