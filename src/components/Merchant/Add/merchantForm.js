import React from 'react'
import {TextField , MenuItem} from '@material-ui/core'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import '../merchant.css'

const initialValue = {
    name : '' ,
    username : '' ,
    email : '' ,
    password : '' ,
    phone : '' ,
    level : '' ,
    status : '' ,
    saldo : ''
}

const validationSchema = Yup.object().shape({

    name     : Yup.string().required('Field Name Should be Not Empty') ,
    username : Yup.string().required('Field Username Should be Not Empty') ,
    email    : Yup.string().required('Field Email Should be Not Empty').email('Must Valid Email') ,
    password : Yup.string().required('Field Password Should be Not Empty') ,
    phone    : Yup.string().required('Field Phone Should be Not Empty') ,
    level    : Yup.string().required('Please Chosee Level ') ,
    status   : Yup.string().required('Please Chosee Status') ,
    saldo   : Yup.string().required('Field Saldo Should Not be Empty')

})

function MerchantForm() {

    const formik = useFormik({
        initialValues : initialValue ,
        validationSchema : validationSchema ,
        onSubmit : (values , action) => {
            console.log(values)
        }
    })
    
    return (
        <>
        <form onSubmit={formik.handleSubmit}>
        <div className={'merchant-main'}>
            
                 <div className={'merchant-form'}>
                     <TextField 
                        id="name"
                        name="name"
                        variant="outlined"
                        label="Name" 
                        style={{marginBottom : 18}}
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.name && Boolean(formik.errors.name)}
                        helperText={formik.touched.name && formik.errors.name}
                        />

                     <TextField 
                        id="username"
                        name="username"
                        variant="outlined" 
                        label="Username" 
                        style={{marginBottom : 18}} 
                        value={formik.values.username}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.username && Boolean(formik.errors.username)}
                        helperText={formik.touched.username &&formik.errors.username}
                        />

                     <TextField 
                        id="Email" 
                        name="email" 
                        variant="outlined" 
                        label="Email" 
                        style={{marginBottom : 18}} 
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                        />

                     <TextField 
                        id="Password" 
                        name="password" 
                        type="password" 
                        variant="outlined" 
                        label="Password" 
                        style={{marginBottom : 18}}
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}
                        />
                 </div>

                 <div className={'merchant-form'}>
                     <TextField 
                        id="Phone" 
                        name="phone" 
                        variant="outlined" 
                        label="Phone" 
                        style={{marginBottom : 18}}
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.phone &&Boolean(formik.errors.phone)}
                        helperText={formik.touched.phone && formik.errors.phone}
                        />
                     
                     <TextField 
                        id="Level" 
                        name="level" 
                        select 
                        variant="outlined" 
                        label="Level" 
                        style={{marginBottom : 18}}
                        value={formik.values.level}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.level &&Boolean(formik.errors.level)}
                        helperText={formik.touched.level && formik.errors.level}
                        >

                         <MenuItem value="1">1</MenuItem>
                         <MenuItem value="2">2</MenuItem>
                         <MenuItem value="3">3</MenuItem>
                     </TextField>

                     <TextField 
                        select 
                        id="Status" 
                        name="status" 
                        label="Status" 
                        variant="outlined" 
                        style={{marginBottom : 18}}
                        value={formik.values.status}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.status && Boolean(formik.errors.status)}
                        helperText={formik.touched.status && formik.errors.status}
                        >

                         <MenuItem value="Not Verified">Not Verified</MenuItem>
                         <MenuItem value="Verified">Verified</MenuItem>
                     </TextField>

                     <TextField 
                        id="saldo" 
                        label="Saldo" 
                        name="saldo"
                        type="number"
                        variant="outlined" 
                        style={{marginBottom : 18}} 
                        value={formik.values.saldo}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.saldo && Boolean(formik.errors.saldo)}
                        helperText={formik.touched.saldo && formik.errors.saldo}
                        />
                     {<p>{formik.values.status}</p>}
                                      
                </div>
             </div>
             <button type="submit">Submit</button>
             </form>
             </>
    )
}

export default MerchantForm
