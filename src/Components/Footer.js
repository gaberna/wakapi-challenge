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
        <Col>
          <div>
            <p>Desing & Dev:
              <a href="https://github.com/gaberna" target="_blank" rel="noopener noreferrer">
                Gabriel Attorri
              </a>
            </p>
          </div>
        </Col>
        <Col >
          <div className='float-right'>
            <Terms />
            <Policy />
            <img src={reactLogo} className="App-logo" alt="logo" />
          </div>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Footer;