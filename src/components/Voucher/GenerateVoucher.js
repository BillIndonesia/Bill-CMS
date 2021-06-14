import React from 'react'
import {Modal , Button} from 'react-bootstrap'
function GenerateVoucher(props) {
    return (
        <Modal
            show={props.show}
            onHide={props.handleClose}
            centered={true}
            >
                
                <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>
                        Close
                </Button>
                
                <Button variant="primary" onClick={props.handleClose}>
                        Save Changes
                </Button>
                </Modal.Footer>
                </Modal>
    )
}

export default GenerateVoucher
