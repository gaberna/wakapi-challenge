import './App.css';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import UserList from './Userlist';
import Header from './Components/Header';
import Footer from './Components/Footer'
import { CountryDropdown } from 'react-country-region-selector';
import React, { useState } from "react";



const people = [
  { firstName: 'Elson', lastName: 'Correia', country: 'Argentina' },
  { firstName: 'John', lastName: 'Doe', country: 'Argentina' },
  { firstName: 'Jane', lastName: 'Doe', country: 'Argentina' },
  { firstName: 'Maria', lastName: 'Carvalho', country: 'Argentina' },
  { firstName: 'Kelly', lastName: 'Correia', country: 'Argentina' },
  { firstName: 'Don', lastName: 'Quichote', country: 'Argentina' },
  { firstName: 'Marcus', lastName: 'Correia', country: 'Argentina' },
  { firstName: 'Bruno', lastName: 'Gonzales', country: 'Argentina' },
  { firstName: 'Alonzo', lastName: 'Correia', country: 'Argentina' }
]

function App() {

  const [userFullName, setUserFullName] = useState("");
  const [isValidName, setIsValidName] = useState(false);
  const [userBirthday, setUserBirthday] = useState("");
  const [isValidBirthday, setIsValidBirthday] = useState(false);
  const [userCountry, setUserCountry] = useState("");
  const [isValidCountry, setIsValidCountry] = useState(false);
  const [usersList, setUserList] = useState("");
  const [allEmpty, setAllEmpty] = useState(false);


  const resetForm = () => {
    setUserFullName("");
    setIsValidName(false);
    setUserBirthday("");
    setIsValidBirthday(false);
    setUserCountry("");
    setIsValidCountry(false);
    setAllEmpty(false);
  }

  const handleClick = () => {

    if (userFullName === "" || userBirthday === "" || userCountry === "") {
      setAllEmpty(true);
    } else {
      const newRegister = [{
        fullName: userFullName,
        birthday: userBirthday,
        country: userCountry,
      }, ...usersList]
      resetForm();
      setUserList(newRegister);
    }
  }

  const onNameChange = e => {
    setUserFullName(e.target.value)
    setIsValidName(validateName(userFullName));
  }

  const validateName = (userFullName) => {
    const re = /^.{2,20}$/;
    return re.test(userFullName);
  }

  const onBirthdayChange = e => {
    setUserBirthday(e.target.value);
    setIsValidBirthday(validateBirthday(userBirthday));
  }

  const validateBirthday = (userBirthday) => {
    // const re = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]|(?:Jan|Mar|May|Jul|Aug|Oct|Dec)))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2]|(?:Jan|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec))\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)(?:0?2|(?:Feb))\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9]|(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep))|(?:1[0-2]|(?:Oct|Nov|Dec)))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
    const re = /^.{2,9}$/;
    return re.test(userBirthday);
  }

  const onCountrySelect = value => {
    setUserCountry(value);
    validateCountry(value);
  }

  const validateCountry = (userCountry) => {
    userCountry ? setIsValidCountry(true) : setIsValidCountry(false);
  }

  return (
    <Container fluid>
      <Header />
      <Row className="content">
        <Col xs={12} md={12} lg={4}>
          <Form>
            <h2>Register Form</h2>
            <hr />
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ex. John Doe"
                value={userFullName}
                onChange={onNameChange}
                isValid={isValidName}
              />
            </Form.Group>
            <Form.Group controlId="formBirthDate">
              <Form.Label>Birth Date</Form.Label>
              <Form.Control
                type="date"
                placeholder="dd/mm/aaaa"
                value={userBirthday}
                onChange={onBirthdayChange}
                isValid={isValidBirthday}
              />
            </Form.Group>
            <Form.Group controlId="formCountryDropdown">
              <Form.Label>Country</Form.Label>
              <CountryDropdown
                className="country-selector"
                value={userCountry}
                onChange={onCountrySelect}
                isValid={isValidCountry} />
            </Form.Group>
          </Form>
          <hr />
          {allEmpty &&
            <Alert variant='danger'>
              Complete all form fields please.
            </Alert>
          }
          <div className="register-button">
            <Button variant="primary" type="button" onClick={handleClick}>
              Sign up!
            </Button>


          </div>
        </Col>
        <Col xs={12} md={12} lg={8} className="scroll-col">
          <UserList data={usersList} />
        </Col>
      </Row>
      <Footer />

    </Container>


    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
