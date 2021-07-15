import React from 'react'
import {Modal , Button ,} from 'react-bootstrap'
import {TextField} from '@material-ui/core'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import axios from 'axios'



const validationSchema = Yup.object().shape({
    voucher_nominal : Yup.string().required('Should Not Empty') ,
    many   : Yup.string().required('Should Not Empty')
})



function GenerateVoucher(props) {
    const name = localStorage.getItem('name')

    const formik = useFormik({
        initialValues :  {
            create_by : name ,
            voucher_nominal : '' ,
            many   : ''
        } ,
        
        validationSchema : validationSchema ,

        onSubmit : (values , action ) => {

            axios.post('https://dev.bill-indonesia.com/api/voucher/generate-vouchers/' , values)
                    .then( result => console.log(result.data))
                    .catch( err => {
                        console.log(err)
                    })

            action.resetForm()
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
                                name="voucher_nominal"
                                value={formik.values.voucher_nominal}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.voucher_nominal && Boolean(formik.errors.voucher_nominal)}
                                helperText={formik.touched.voucher_nominal  && formik.errors.voucher_nominal }

                            />

                            <TextField 
                                variant="outlined"
                                label="Voucher Count"
                                type="number"
                                name="many"
                                value={formik.values.many}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.many && Boolean(formik.errors.many)}
                                helperText={formik.touched.many  && formik.errors.many }

                            />


                        </form>
                    </diV>

                </Modal.Body>
                <Modal.Footer>
                <Button size="sm" variant="secondary" onClick={props.handleClose}>
                        Close
                </Button>
                
                <Button size="sm"  onClick={() => formik.handleSubmit()}>
                        Process
                </Button>
                </Modal.Footer>
                </Modal>
    )
}

export default React.memo(GenerateVoucher)
