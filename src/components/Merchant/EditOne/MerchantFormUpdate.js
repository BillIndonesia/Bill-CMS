import React from 'react'
import {TextField , MenuItem } from '@material-ui/core'
import {useSelector} from 'react-redux'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import '../merchant.css'

    
    const validationSchema = Yup.object().shape({
        id       : Yup.string() ,
        name     : Yup.string().required('Field Name Should be Not Empty') ,
        username : Yup.string().required('Field Username Should be Not Empty') ,
        email    : Yup.string().required('Field Email Should be Not Empty').email('Must Valid Email') ,
        password : Yup.string().required('Field Password Should be Not Empty') ,
        phone    : Yup.string().required('Field Phone Should be Not Empty') ,
        level    : Yup.string().required('Please Chosee Level ') ,
        status   : Yup.string().required('Please Chosee Status') ,
        saldo    : Yup.string().required('Field Saldo Should Not Empty')
    
    })

function MerchantFormUpdate() {
    
    const Data = useSelector(state => state.Merchant)
    const formik = useFormik({
        initialValues : {
            id : Data.id , 
            name : Data.name ,
            username : Data.username ,
            password : Data.password ,
            email : Data.email ,
            phone : Data.phone ,
            level : Data.level ,
            status : Data.status ,
            saldo : Data.saldo
        } ,

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
                        value={formik.values.name} 
                        variant="outlined" 
                        label="Name" 
                        style={{marginBottom : 18}}
                        name="name"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.name && Boolean(formik.errors.name)}
                        helperText={formik.touched.name && formik.errors.name}
                        />
                     <TextField 
                        id="Username" 
                        disabled 
                        value={formik.values.username} 
                        variant="outlined" 
                        label="Username" 
                        style={{marginBottom : 18}}
                        name="username"
                        onChange={formik.handleChange}
                        error={formik.touched.username && Boolean(formik.errors.username)}
                        helperText={formik.touched.username && formik.errors.username}
                        />
                     <TextField 
                        id="Email" 
                        value={formik.values.email} 
                        variant="outlined" 
                        label="Email" 
                        name="email"
                        style={{marginBottom : 18}}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                        />
                     <TextField 
                        id="Password"
                        value={formik.values.password}
                        name="password" 
                        variant="outlined" 
                        label="Password" 
                        style={{marginBottom : 18}}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}
                        />
                 </div>

                 <div className={'merchant-form'}>
                     <TextField 
                        id="Phone" 
                        variant="outlined" 
                        label="Phone" 
                        name="phone"
                        style={{marginBottom : 18}}
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.phone && Boolean(formik.errors.phone)}
                        helperText={formik.touched.phone && formik.errors.phone}
                        />

                     <TextField 
                        id="Level" 
                        select 
                        variant="outlined" 
                        label="Level" 
                        name="level"
                        style={{marginBottom : 18}}
                        value={formik.values.level}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.level && Boolean(formik.errors.level)}
                        helperText={formik.touched.level && formik.errors.level}
                        >
                         <MenuItem value="1">1</MenuItem>
                         <MenuItem value="2">2</MenuItem>
                         <MenuItem value="3">3</MenuItem>
                     </TextField>

                     <TextField 
                        select 
                        id="Status" 
                        label="Status" 
                        name="status"
                        variant="outlined" 
                        style={{marginBottom : 18}}
                        value={formik.values.status}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.status && Boolean(formik.errors.status)}
                        helperText={formik.touched.email && formik.errors.email}
                        >
                         <MenuItem value="Not Verified">Not Verified</MenuItem>
                         <MenuItem value="Verified">Verified</MenuItem>
                     </TextField>

                     <TextField 
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
                        />
                 
                </div>
             </div>  
             <p>{Data.password}</p>
             <button type="submit"> Submit</button>
             </form>
             </>
    )
}

export default MerchantFormUpdate
