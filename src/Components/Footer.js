import React from "react";
import '../App.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button'
import reactLogo from '../utils/logo.svg'
import Terms from './Terms';
import Policy from './Policy';

const Footer = () => (
  <div className="footer">
    <Container>
      <Row className="terms-policy">
        <Col xs={12} sm={6} md={6} lg={6}>
          <div className="footer-btns">
            <Button className="link-custom" size="sm" variant="link"
              href="https://github.com/gaberna"
              target="_blank"
            >
              Des&Dev: Gabriel Attorri
            </Button>
            <img src={reactLogo} className="App-logo" alt="logo" />
          </div>
        </Col>

        <Col xs={12} sm={6} md={6} lg={6}>
          <div className="footer-btns footer-btns-l">
            <Terms />
            <Policy />

          </div>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Footer;