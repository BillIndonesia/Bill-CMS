import React from 'react'
import {Modal , Button ,} from 'react-bootstrap'
import {TextField} from '@material-ui/core'
import {useFormik} from 'formik'
import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
    nominal : Yup.string().required('Should Not Empty') ,
    count   : Yup.string().required('Should Not Empty')
})

const initialValue = {
    nominal : '' ,
    count   : ''
}

function GenerateVoucher(props) {

    const formik = useFormik({
        initialValues : initialValue ,
        validationSchema : validationSchema ,
        onSubmit : (values , action ) => {
            console.log(values)
        }
    })

    return (
        <Modal
            show={props.show}
            onHide={props.handleClose}
            
            >
                
                <Modal.Header closeButton>
                <Modal.Title>Generate Voucher</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <diV>
                        <form onSubmit={formik.handleSubmit}>
                            
                            <TextField 
                                variant="outlined"
                                label="Voucher Nominal"
                                type="number"
                                style={{marginRight : 8}}
                                name="nominal"
                                value={formik.values.nominal}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.nominal && Boolean(formik.errors.nominal)}
                                helperText={formik.touched.nominal  && formik.errors.nominal }

                            />

                            <TextField 
                                variant="outlined"
                                label="Voucher Count"
                                type="number"
                                name="count"
                                value={formik.values.count}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.count && Boolean(formik.errors.count)}
                                helperText={formik.touched.count  && formik.errors.count }

                            />


                        </form>
                    </diV>

                </Modal.Body>
                <Modal.Footer>
                <Button size="sm" variant="secondary" onClick={props.handleClose}>
                        Close
                </Button>
                
                <Button size="sm" style={{backgroundColor : 'rgb(85, 85, 207)'}} onClick={props.handleClose}>
                        Process
                </Button>
                </Modal.Footer>
                </Modal>
    )
}

export default GenerateVoucher
