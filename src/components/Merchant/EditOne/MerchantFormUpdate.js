import React from 'react'
import {TextField , MenuItem } from '@material-ui/core'
import {useSelector , useDispatch} from 'react-redux'
import {useFormik} from 'formik'
import {RequestEdit} from '../../../Redux/Merchant/Action'
import * as Yup from 'yup'
import '../merchant.css'

    
    const validationSchema = Yup.object().shape({
        id                : Yup.string() ,
        merchant_name     : Yup.string().required('Field Name Should be Not Empty') ,
        merchant_username : Yup.string().required('Field Username Should be Not Empty') ,
        merchant_password : Yup.string() ,
        merchant_email    : "" ,
        phone_number      : Yup.string() ,
        merchant_level : Yup.string().required('Please Chosee Level ') ,
        merchant_status : Yup.string().required('Please Chosee Status') ,
        merchant_image : ""
    })

function MerchantFormUpdate(props) {
    
    const Data = useSelector(state => state.Merchant)
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues : {
            id : Data.id , 
            merchant_name : Data.name ,
            merchant_username : Data.username ,
            merchant_email : Data.email ,
            merchant_password : '' ,
            phone_number : Data.phone ,
            merchant_level : '1' ,
            merchant_status : Data.status === 'active' ? '1' : '0' ,
            merchant_image : ""
        } ,

        validationSchema : validationSchema ,

        onSubmit : (values , action) => {
            dispatch(RequestEdit(values));
             
            action.resetForm()

        }
    })
    
    return (
        <>
        <form onSubmit={formik.handleSubmit}>
        <div className={'merchant-main'}>
                 <div className={'merchant-form'}>
                     <TextField 
                        id="id"
                        name="id"
                        hidden
                        variant="outlined"
                        label="id" 
                        style={{marginBottom : 18}}
                        value={formik.values.id}
                        />

                     <TextField 
                        id="name" 
                        value={formik.values.merchant_name} 
                        variant="outlined" 
                        label="Name" 
                        style={{marginBottom : 18}}
                        name="merchant_name"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.merchant_name && Boolean(formik.errors.merchant_name)}
                        helperText={formik.touched.merchant_name && formik.errors.merchant_name}
                        />

                     <TextField 
                        id="Username" 
                        disabled 
                        value={formik.values.merchant_username} 
                        variant="outlined" 
                        label="Username" 
                        style={{marginBottom : 18}}
                        name="username"
                        onChange={formik.handleChange}
                        error={formik.touched.merchant_username && Boolean(formik.errors.merchant_username)}
                        helperText={formik.touched.merchant_username && formik.errors.merchant_username}
                        />
                     <TextField 
                        id="Email" 
                        value={formik.values.merchant_email} 
                        variant="outlined" 
                        label="Email" 
                        name="merchant_email"
                        style={{marginBottom : 18}}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.merchant_email && Boolean(formik.errors.merchant_email)}
                        helperText={formik.touched.merchant_email && formik.errors.merchant_email}
                        />

                    <TextField 
                        id="password" 
                        value={formik.values.merchant_password} 
                        variant="outlined" 
                        label="Password" 
                        style={{marginBottom : 18}}
                        name="merchant_password"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    
                    />

                     
                 </div>

                 <div className={'merchant-form'}>
                     <TextField 
                        id="Phone" 
                        variant="outlined" 
                        label="Phone" 
                        name="phone_number"
                        style={{marginBottom : 18}}
                        value={formik.values.phone_number}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.phone_number && Boolean(formik.errors.phone_number)}
                        helperText={formik.touched.phone_number && formik.errors.phone_number}
                        />

                     <TextField 
                        id="Level" 
                        select 
                        variant="outlined" 
                        label="Level" 
                        name="merchant_level"
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
                        label="Status" 
                        name="merchant_status"
                        variant="outlined" 
                        style={{marginBottom : 18}}
                        value={formik.values.merchant_status}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.merchant_status && Boolean(formik.errors. merchant_status)}
                        helperText={formik.touched.merchant_status && formik.errors. merchant_status}
                        >
                         <MenuItem value="0">0</MenuItem>
                         <MenuItem value="1">1</MenuItem>
                     </TextField>

                     {/* <TextField 
                        id="saldo" 
                        label="Saldo" 
                        name="saldo"
                        variant="outlined" 
                        style={{marginBottom : 18}} 
                        value={formik.values.saldo}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.saldo && Boolean(formik.errors.saldo)}
                        helperText={formik.touched.saldo && formik.errors.saldo}
                        /> */}
                 
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

export default React.memo( MerchantFormUpdate )
