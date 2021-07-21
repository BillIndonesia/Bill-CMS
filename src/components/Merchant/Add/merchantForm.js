import React from 'react'
import {TextField , MenuItem} from '@material-ui/core'
import {useFormik} from 'formik'
import { useDispatch } from 'react-redux'
import {RequestMerchant} from '../../../Redux/Merchant/Action'
import * as Yup from 'yup'
import '../merchant.css'

const initialValue = {
    merchant_type : '' ,
    merchant_name : '' ,
    merchant_username : '' ,
    merchant_email : '' ,
    merchant_password : '' ,
    phone_number : '' ,
    merchant_level : '' ,
    merchant_status : '' ,
    merchant_address : '' ,
    merchant_npwp : '' ,
    merchant_saldo : ''
}

const validationSchema = Yup.object().shape({
    merchant_type     : Yup.string().required('Field Name Should be Not Empty') ,
    merchant_name     : Yup.string().required('Field Name Should be Not Empty') ,
    merchant_username : Yup.string().required('Field Username Should be Not Empty') ,
    merchant_email    : Yup.string().required('Field Email Should be Not Empty').email('Must Valid Email') ,
    merchant_password : Yup.string().required('Field Password Should be Not Empty') ,
    phone_number      : Yup.string().required('Field Phone Should be Not Empty') ,
    merchant_level    : Yup.string().required('Please Chosee Level ') ,
    merchant_status   : Yup.string().required('Please Chosee Status') ,
    merchant_address  : Yup.string().required('Should Not Empty') ,
    merchant_npwp     : Yup.string().required('Field Name Should be Not Empty') ,
    merchant_saldo    : Yup.string().required('Field Saldo Should Not be Empty') 

})

function MerchantForm(props) {

    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues : initialValue ,
        validationSchema : validationSchema ,
        onSubmit : (values , action) => {
            dispatch( RequestMerchant(values))
            action.resetForm()
        }
    })
    
    return (
        <>
        <form onSubmit={formik.handleSubmit}>
        <div className={'merchant-main'}>
                    
            
                 <div className={'merchant-form'}>
                 <TextField 
                        select 
                        id="type" 
                        name="merchant_type" 
                        label="Type" 
                        variant="outlined" 
                        style={{marginBottom : 18}}
                        value={formik.values.merchant_type}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.merchant_type && Boolean(formik.errors.merchant_type)}
                        helperText={formik.touched.merchant_type && formik.errors.merchant_type}
                        >

                         <MenuItem value="Kwk">Kwk</MenuItem>
                         <MenuItem value="Merchant">Merchant</MenuItem>
                     </TextField>

                     <TextField 
                        id="name"
                        name="merchant_name"
                        variant="outlined"
                        label="Name" 
                        style={{marginBottom : 18}}
                        value={formik.values.merchant_name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.merchant_name && Boolean(formik.errors.merchant_name)}
                        helperText={formik.touched.merchant_name && formik.errors.merchant_name}
                        />

                     <TextField 
                        id="username"
                        name="merchant_username"
                        variant="outlined" 
                        label="Username" 
                        style={{marginBottom : 18}} 
                        value={formik.values.merchant_username}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.merchant_username && Boolean(formik.errors.merchant_username)}
                        helperText={formik.touched.merchant_username &&formik.errors.merchant_username}
                        />

                     <TextField 
                        id="Email" 
                        name="merchant_email" 
                        variant="outlined" 
                        label="Email" 
                        style={{marginBottom : 18}} 
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.merchant_email && Boolean(formik.errors.merchant_email)}
                        helperText={formik.touched.merchant_email && formik.errors.merchant_email}
                        />

                    <TextField 
                        id="merchant_address"
                        name="merchant_address"
                        variant="outlined" 
                        label="Address" 
                        style={{marginBottom : 18}} 
                        value={formik.values.merchant_address}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.merchant_address && Boolean(formik.errors.merchant_address)}
                        helperText={formik.touched.merchant_address &&formik.errors.merchant_address}
                        />

                     <TextField 
                        id="Password" 
                        name="merchant_password" 
                        type="password" 
                        variant="outlined" 
                        label="Password" 
                        style={{marginBottom : 18}}
                        value={formik.values.merchant_password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.merchant_password && Boolean(formik.errors.merchant_password)}
                        helperText={formik.touched.merchant_password && formik.errors.merchant_password}
                        />
                 </div>

                 <div className={'merchant-form'}>
                     <TextField 
                        id="phone_number" 
                        name="phone_number" 
                        variant="outlined" 
                        label="Phone" 
                        style={{marginBottom : 18}}
                        value={formik.values.phone_number}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.phone_number &&Boolean(formik.errors.phone_number)}
                        helperText={formik.touched.phone_number && formik.errors.phone_number}
                        />

                    <TextField 
                        id="npwp"
                        name="merchant_npwp"
                        variant="outlined" 
                        label="NPWP" 
                        style={{marginBottom : 18}} 
                        value={formik.values.merchant_npwp}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.merchant_npwp && Boolean(formik.errors.merchant_npwp)}
                        helperText={formik.touched.merchant_npwp &&formik.errors.merchant_npwp}
                        />
                     

                     <TextField 
                        id="Level" 
                        name="merchant_level" 
                        select 
                        variant="outlined" 
                        label="Level" 
                        style={{marginBottom : 18}}
                        value={formik.values.merchant_level}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.merchant_level && Boolean(formik.errors.merchant_level)}
                        helperText={formik.touched.merchant_level && formik.errors.merchant_level}
                        >

                         <MenuItem value="1">1</MenuItem>
                         <MenuItem value="2">2</MenuItem>
                         <MenuItem value="3">3</MenuItem>
                     </TextField>

                     <TextField 
                        select 
                        id="Status" 
                        name="merchant_status" 
                        label="Status" 
                        variant="outlined" 
                        style={{marginBottom : 18}}
                        value={formik.values.merchant_status}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.merchant_status && Boolean(formik.errors.merchant_status)}
                        helperText={formik.touched.merchant_status && formik.errors.merchant_status}
                        >

                         <MenuItem value="Not Verified">Not Verified</MenuItem>
                         <MenuItem value="Verified">Verified</MenuItem>
                     </TextField>

                     <TextField 
                        id="saldo" 
                        label="Saldo" 
                        name="merchant_saldo"
                        type="number"
                        variant="outlined" 
                        style={{marginBottom : 18}} 
                        value={formik.values.saldo}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.merchant_saldo && Boolean(formik.errors.merchant_saldo)}
                        helperText={formik.touched.merchant_saldo && formik.errors.merchant_saldo}
                        />
                     
                                      
                </div>
             </div>
             
             
             </form>
             <div>
             <button onClick={() => formik.handleSubmit()} type="submit" className="merchant-submit"> Submit </button>
             <button onClick={() => props.handleClose()} className="merchant-cancel"> Cancel </button>
            </div>
             </>
    )
}

export default React.memo(MerchantForm)
