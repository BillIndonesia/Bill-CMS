import React  from 'react'
import {Modal , Button} from 'react-bootstrap'

function Index(props) {
    
    
    return (
        <>
       
        <Modal
            show={props.show}
            onHide={props.handleClose}
            
            >
                
                <Modal.Header closeButton>
                <Modal.Title>Verification Voucher</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h2>Apakah Yakin ada data ?</h2>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>
                        Close
                </Button>
                
                <Button variant="primary" onClick={() => {
                    props.handleClose()
                    props.handleProces()
                }}>
                        Verification
                </Button>
                </Modal.Footer>
                </Modal>
                
        </>
    )
}

export default Index
