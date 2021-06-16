import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Policy = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>

            <Button size="sm" variant="link" onClick={handleShow}>Privacy Policy</Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Privacy Policy for Wakapi</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    At www.wakapi.com, accessible from www.wakapi.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by www.wakapi.com and how we use it. If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.
                    This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in www.wakapi.com. This policy is not applicable to any information collected offline or via channels other than this website. </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Policy;

