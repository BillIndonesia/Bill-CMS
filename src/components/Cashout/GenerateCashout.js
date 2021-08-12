
import React , {useState , useEffect} from 'react'
import {Modal } from 'react-bootstrap'
import {TextField , Snackbar , LinearProgress , MenuItem} from '@material-ui/core'
import Autocomplete from '@material-ui/lab/Autocomplete';
import Alert from '@material-ui/lab/Alert';
import {useFormik} from 'formik'
import {useSelector , useDispatch} from 'react-redux'
import {Cashout} from '../../Redux/Cashout/Action'
import * as Yup from 'yup'
import './cashout.css'
import axios from 'axios';

const validationSchema = Yup.object().shape({
    cashout_amount: Yup.number().required('Should Not Empty').positive(),
    merchants: Yup.string().required('Should Not Empty'),
    // create_by: Yup.string().required('Should Not Empty'),
    cashout_by: Yup.string().required('Should Not Empty')
})
const name = localStorage.getItem('name')

const initialValue = {
    cashout_amount: '',
    merchants: ' ',
    create_by: name,
    cashout_by: ''

}

const getMerchants = () => {
    return axios.get('https://dev.bill-indonesia.com/api/merchant/merchant-name-list/')
}

function GenerateVoucher(props) {

    const dispatch = useDispatch()
    const Data = useSelector(state => state.Confirmation )
    
    const [ Merchant , setMerchant ] = useState(null)
    const [ Staff , setStaff ] = useState(null)
    const formik = useFormik({
            initialValues : initialValue ,
            validationSchema : validationSchema ,
            onSubmit : (values , action ) => {
                
                dispatch(Cashout(values))
             
                props.handleProcess()
            }
    })

    const [show, setShow] = useState(true)

    useEffect( () => {
        axios.get('https://dev.bill-indonesia.com/api/employee/staff-list/')
            .then( result => setStaff(result.data))

        setTimeout( () => {
            getMerchants().then( result => setMerchant(result.data))
        } , 3000)
        
    } , [])

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
                            
                   { Merchant === null && Staff === null ? <LinearProgress /> :
                   
                   <diV>
                        <form onSubmit={formik.handleSubmit}>

                        <TextField 
                                variant="outlined"
                                label="PIC"
                                style={{marginBottom : 15 , width : '100%'}}
                                name="create_by"
                                disabled
                                value={formik.values.create_by}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.create_by && Boolean(formik.errors.create_by)}
                                helperText={formik.touched.create_by  && formik.errors.create_by }

                            />

                            <TextField 
                                variant="outlined"
                                label="Cashout By"
                                style={{marginBottom : 15 , width : '100%'}}
                                name="cashout_by"
                                select
                                value={formik.values.cashout_by}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.cashout_by && Boolean(formik.errors.cashout_by)}
                                helperText={formik.touched.cashout_by  && formik.errors.cashout_by }
                            >
                                
                                {Staff.map(item => <MenuItem value={item.staff_name}>{item.staff_name}</MenuItem>)}

                                </TextField>

                            <Autocomplete 
                                id="combo-box"
                                options={Merchant}
                                
                                getOptionLabel={ option => option.merchant_name }
                                style={{width : '100%' , marginBottom : 12}}
                                onChange={(e , value) => { 
                                    formik.values.merchants = value.merchant_username ;
                                     
                                }}
                                onBlur={() => setShow(false)}
                                renderInput={ params => 
                                <TextField {...params} 
                                    error={formik.touched.merchants  && Boolean(formik.errors.merchants)}
                                    helperText={formik.touched.merchants  && formik.errors.merchants } 
                                    label="Merchant Username" 
                                    name="merchants" 
                                    variant="outlined"/> }
                            />
                           
                           <TextField 
                                variant="outlined"
                                label="Nominal"
                                type="number"
                                inputProps={{inputProps : {min : "0" , max : "10" , step : 2 }}}
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
                    }
                

                </Modal.Body>
                <Modal.Footer>

                <button onClick={() => props.handleClose()} className="cashout-cancel"> Cancel </button>
                <button onClick={() => formik.handleSubmit()} type="submit" className="cashout-submit"> Submit </button>

            </Modal.Footer>
        </Modal>
    )
}

export default React.memo(GenerateVoucher)
