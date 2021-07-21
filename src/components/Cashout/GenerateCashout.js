import React , {useState} from 'react'
import {Modal } from 'react-bootstrap'
import {TextField , MenuItem , Snackbar } from '@material-ui/core'
import Alert from '@material-ui/lab/Alert';
import {useFormik} from 'formik'
import {useSelector , useDispatch} from 'react-redux'
import {Cashout} from '../../Redux/Cashout/Action'
import * as Yup from 'yup'
import './cashout.css'

const validationSchema = Yup.object().shape({
    cashout_amount : Yup.string().required('Should Not Empty') , 
    merchants : Yup.string().required('Should Not Empty') ,
    create_by : Yup.string().required('Should Not Empty') ,
    cashout_by : Yup.string().required('Should Not Empty')
})

const initialValue = {
    cashout_amount : '' ,
    merchants : '' ,
    create_by : '' ,
    cashout_by : ''

}

function GenerateVoucher(props) {

    const dispatch = useDispatch()
    const Data = useSelector(state => state.Confirmation )

    const formik = useFormik({
        initialValues : initialValue ,
        validationSchema : validationSchema ,
        onSubmit : (values , action ) => {
            
            dispatch(Cashout(values))
            action.resetForm()
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
                    { 
                            Data.success ? 
                            <Snackbar open={Data.success} autoHideDuration={3000}>
                                <Alert severity="success">
                                    Cashout Berhasil
                                </Alert>
                             </Snackbar> : 
                             
                             Data.failure ? 
                             <Snackbar open={Data.failure} autoHideDuration={3000}>
                             <Alert severity="error">
                                 Cashout Gagal
                             </Alert>
                          </Snackbar> : null
                    }
                            
                    <diV>
                        <form onSubmit={formik.handleSubmit}>

                        <TextField 
                                variant="outlined"
                                label="PIC"
                                select
                                style={{marginBottom : 15 , width : '100%'}}
                                name="create_by"
                                value={formik.values.create_by}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.create_by && Boolean(formik.errors.create_by)}
                                helperText={formik.touched.create_by  && formik.errors.create_by }

                            >
                                <MenuItem value="Admin 1">Admin 1</MenuItem>
                                <MenuItem value="Admin 2">Admin 2</MenuItem>
                                <MenuItem value="Admin 3">Admin 3</MenuItem>
                            </TextField>

                            <TextField 
                                variant="outlined"
                                label="Cashout By"
                                style={{marginBottom : 15 , width : '100%'}}
                                name="cashout_by"
                                value={formik.values.cashout_by}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.cashout_by && Boolean(formik.errors.cashout_by)}
                                helperText={formik.touched.cashout_by  && formik.errors.cashout_by }

                            />

                            <input onBlur={e =>
                                { formik.values.merchants = e.target.value
                                  setShow(false)
                                }} name="merchants" list="browsers" className="list-merchant" placeholder="Merchants" />
                           
                            <datalist style={{width : 400}} id="browsers">
                                <option value="Edge" />
                                <option value="Firefox" />
                                <option value="Chrome" />
                                <option value="Opera" />
                                <option value="Safari" />
                            </datalist>
                            
                           
                           <TextField 
                                variant="outlined"
                                label="Nominal"
                                type="number"
                                style={{marginBottom : 15 , width : '100%'}}
                                name="cashout_amount"
                                value={formik.values.cashout_amount}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.cashout_amount && Boolean(formik.errors.cashout_amount)}
                                helperText={formik.touched.cashout_amount  && formik.errors.cashout_amount }
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