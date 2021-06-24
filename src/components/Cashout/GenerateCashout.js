import React , {useState} from 'react'
import {Modal } from 'react-bootstrap'
import {TextField , MenuItem} from '@material-ui/core'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import './cashout.css'

const validationSchema = Yup.object().shape({
    nominal : Yup.string().required('Should Not Empty') , 
    destination : Yup.string().required('Should Not Empty') ,
    pic : Yup.string().required('Should Not Empty')
})

const initialValue = {
    nominal : '' ,
    destination : '' ,
    pic : ''
}

function GenerateVoucher(props) {


    const formik = useFormik({
        initialValues : initialValue ,
        validationSchema : validationSchema ,
        onSubmit : (values , action ) => {
            console.log(values)
            action.resetForm()
            setShow(false)
            props.handleProcess()
        }
    })

    const [show , setShow] = useState(true)

    return (
        <Modal
            show={props.show}
            onHide={props.handleClose}
            
            >
                
                <Modal.Header closeButton>
                <Modal.Title>Cashout</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <diV>
                        <form onSubmit={formik.handleSubmit}>

                        <TextField 
                                variant="outlined"
                                label="PIC"
                                select
                                style={{marginBottom : 15 , width : '100%'}}
                                name="pic"
                                value={formik.values.pic}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.pic && Boolean(formik.errors.pic)}
                                helperText={formik.touched.pic  && formik.errors.pic }

                            >
                                <MenuItem value="Admin 1">Admin 1</MenuItem>
                                <MenuItem value="Admin 2">Admin 2</MenuItem>
                                <MenuItem value="Admin 3">Admin 3</MenuItem>
                            </TextField>

                            <input onBlur={e =>
                                { formik.values.destination = e.target.value
                                  setShow(false)
                                }} name="destination" list="browsers" className="list-merchant" placeholder="Destination" />
                           
                            <datalist style={{width : 400}} id="browsers">
                                <option value="Edge" />
                                <option value="Firefox" />
                                <option value="Chrome" />
                                <option value="Opera" />
                                <option value="Safari" />
                            </datalist>
                            
                           
                           <TextField 
                                variant="outlined"
                                label="Voucher Nominal"
                                type="number"
                                style={{marginBottom : 15 , width : '100%'}}
                                name="nominal"
                                value={formik.values.nominal}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.nominal && Boolean(formik.errors.nominal)}
                                helperText={formik.touched.nominal  && formik.errors.nominal }
                                disabled={show}

                            />
                           
                            
                        </form>
                    </diV>

                </Modal.Body>
                <Modal.Footer>
                <button onClick={() => props.handleClose()} className="cashout-cancel"> Cancel </button>
                <button onClick={() => formik.handleSubmit()} type="submit" className="cashout-submit"> Submit </button>
             
                </Modal.Footer>
                </Modal>
    )
}

export default React.memo(GenerateVoucher)
