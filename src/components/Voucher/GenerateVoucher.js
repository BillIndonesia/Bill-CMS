import React from 'react'
import {Modal , Button ,} from 'react-bootstrap'
import {TextField , Snackbar} from '@material-ui/core'
import Alert from '@material-ui/lab/Alert';
import {useDispatch , useSelector} from 'react-redux'
import {VoucherRequest} from '../../Redux/Voucher/Action'
import {useFormik} from 'formik'
import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
    voucher_nominal : Yup.string().required('Should Not Empty') ,
    many   : Yup.string().required('Should Not Empty')
})


function GenerateVoucher(props) {
    const name = localStorage.getItem('name')

    const dispatch = useDispatch()
    const Data = useSelector(state => state.Confirmation)

    const formik = useFormik({
        initialValues :  {
            create_by : name ,
            voucher_nominal : '' ,
            many   : ''
        } ,
        
        validationSchema : validationSchema ,

        onSubmit : (values , action ) => {

            dispatch( VoucherRequest(values) )

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
                { 
                            Data.success ? 
                            <Snackbar open={Data.success} autoHideDuration={3000}>
                                <Alert severity="success">
                                    Create Success
                                </Alert>
                             </Snackbar> : 
                             
                             Data.failure ? 
                             <Snackbar open={Data.failure} autoHideDuration={3000}>
                             <Alert severity="error">
                                 Create Failure
                             </Alert>
                          </Snackbar> : null
                    }

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
