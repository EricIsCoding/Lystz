import React, { useState } from 'react';
import { Modal, NavDropdown, Button } from 'react-bootstrap'


const ConfirmationModal = (props) => {
    const [show, setShow] = useState(false);
  
    const confirm = () => {
        props.parentClick()
        setShow(false)};
    const decline = () => {setShow(false)};
    const handleShow = () => setShow(true);

    const body = () => {
        if(props.type == "sign_out") {
            return "Are you sure you want to sign out?"
        } else {
            return "Are you sure you want to delete?"
        }
    }
     
    const input = () => {
        if(props.type == "sign_out") {
            return <NavDropdown.Item onClick={handleShow}>Sign Out!</NavDropdown.Item>
        } else {
            return <Button 
            variant="outline-danger"
            className="w-25"
            size="sm"
            onClick={handleShow}
            >Delete</Button>
        }
    }
  
    return (
      <>
      {input()}
  
        <Modal show={show} onHide={decline}>
          <Modal.Header closeButton>
            <Modal.Title>Are you sure!?</Modal.Title>
          </Modal.Header>
          <Modal.Body>{body()}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={decline}>
              Oops! No thanks! 
            </Button>
            <Button variant="primary" onClick={confirm}>
              Yes, Please!
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

export default ConfirmationModal;