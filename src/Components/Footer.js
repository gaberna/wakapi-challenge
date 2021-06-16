import React from "react";
import '../App.css';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button'

const Footer = () => (
  <div className="footer">
    <Container>
      <Row className="terms-policy">
        <Button size="sm" variant="link">Terms and Conditions</Button>
        <Button size="sm" variant="link">Privacy Policy</Button>
      </Row>
    </Container>
  </div>
);

export default Footer;