import React , {useEffect , useState} from 'react'
import {Modal , Button} from 'react-bootstrap'
import {Typography } from '@material-ui/core'
import './verif.css'
import axios from 'axios'

function Index(props) {
    const [ Data , setData ] = useState(null)
    
    useEffect( () => {
     
        axios.get(`https://jsonplaceholder.typicode.com/users/${props.data}`).then( result => {
            setData(result.data.name)
        })
    }, [])
    
    return (
        <>
        {Data === null ? null : 
        <Modal
            show={props.show}
            onHide={props.handleClose}
            dialogClassName={'merchant-modal'}
            >
                
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                     
                        <div className="merchantdialogbody">
                            <h3 className="dialog-title">Verification Merchant</h3>
                        <img className="merchant-avatar merchantitem" src="http://1.bp.blogspot.com/-cKbR2Cw8BLU/VrLaPvhz9pI/AAAAAAAAAcE/Pe9LhaTN1sY/s1600/Scan%2BKTP.JPG"/>
                        
                        <Typography className="merchantitem" variant="h5" color="primary">{Data} </Typography>
                    
                            <img className="merchantitem merchant-ktp" src="http://1.bp.blogspot.com/-cKbR2Cw8BLU/VrLaPvhz9pI/AAAAAAAAAcE/Pe9LhaTN1sY/s1600/Scan%2BKTP.JPG" 
                            />

                            <Typography variant="h5" color="primary">KTP</Typography>
                        </div>
                    
                    
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>
                        Close
                </Button>
                
                <Button variant="primary" onClick={props.handleClose}>
                        Verification
                </Button>
                </Modal.Footer>
                </Modal>
            }
        </>
    )
}

export default Index
