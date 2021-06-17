import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Terms = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>

            <Button size="sm" variant="link" onClick={handleShow}>Terms and Conditions</Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Terms and Conditions</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Welcome to www.wakapi.com! These terms and conditions outline the rules and regulations for the use of Wakapi's Website, located at www.wakapi.com.
                    By accessing this website we assume you accept these terms and conditions. Do not continue to use www.wakapi.com if you do not agree to take all of
                    the terms and conditions stated on this page. The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer
                    Notice and all Agreements: "Client", "You" and "Your" refers to you, the person log on this website and compliant to the Company’s terms and conditions.
                    "The Company", "Ourselves", "We", "Our" and "Us", refers to our Company. "Party", "Parties", or "Us", refers to both the Client and ourselves.
                </Modal.Body>
                <Modal.Footer>
                    <Button className="button-custom" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Terms;

