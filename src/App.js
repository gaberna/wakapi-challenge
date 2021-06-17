import './App.css';
import Container from 'react-bootstrap/Container';
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

      const formatedDate = formatDate(userBirthday);

      const newRegister = [{
        fullName: userFullName,
        birthday: formatedDate,
        country: userCountry,
      }, ...usersList]
      resetForm();
      setUserList(newRegister);
    }
  }

  const formatDate = date => {
    const day = date.slice(8, 10);
    const month = date.slice(5, 7);
    const year = date.slice(0, 4);
    const res = day + '/' + month + '/' + year
    console.log("dateFroamted;", res);
    return res
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

  }

  const onBirthdayBlur = (userBirthday) => {
    setIsValidBirthday(validateBirthday(userBirthday));
  }

  const validateBirthday = (userBirthday) => {
    try {
      const newDate = new Date(userBirthday);
    } catch (error) {
      return false
    }
    return true
  }



  const onCountrySelect = value => {
    setUserCountry(value);
    validateCountry(value);
  }

  const validateCountry = (userCountry) => {
    userCountry ? setIsValidCountry(true) : setIsValidCountry(false);
  }

  return (
    <Container className="background" fluid>
      <Header />
      <Row className="content">
        <Col xs={12} md={12} lg={4} className="user-grid">
          <Form>
            <h2 className="h2-custom">Register Form</h2>
            <hr />
            <Form.Group controlId="formBasicEmail">
              <Form.Label className="label-custom">Full Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ex. John Doe"
                value={userFullName}
                onChange={onNameChange}
                isValid={isValidName}
              />
            </Form.Group>
            <Form.Group controlId="formBirthDate">
              <Form.Label className="label-custom">Birth Date</Form.Label>
              <Form.Control
                type="date"
                placeholder="dd/mm/aaaa"
                value={userBirthday}
                onBlur={onBirthdayBlur}
                onChange={onBirthdayChange}
                isValid={isValidBirthday}
              />
            </Form.Group>
            <Form.Group controlId="formCountryDropdown">
              <Form.Label className="label-custom">Country</Form.Label>
              <CountryDropdown
                name="dropdown"
                id="dropdown"
                className={!isValidCountry ? "country-selector" : "country-selector-valid"}
                value={userCountry}
                onChange={onCountrySelect}
              />
            </Form.Group>
          </Form>
          <hr />
          {allEmpty &&
            <Alert variant='danger'>
              Complete all form fields please.
            </Alert>
          }
          <div className="register-button">
            <Button className="button-custom" variant="primary" type="button" onClick={handleClick}>
              Sign up!
            </Button>
          </div>
        </Col>
        <Col xs={12} md={12} lg={8} className="user-grid">
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
