import React from 'react'
import {TextField , MenuItem} from '@material-ui/core'
import {useFormik} from 'formik'
import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
  
    name : Yup.string().required('Should Not be Empty') ,
    username : Yup.string().required('Should Not be Empty') ,
    password : Yup.string().required('Should Not be Empty') ,
    email : Yup.string().required('Should Not be Empty').email('Please Input Valid Email'),
    phone : Yup.string().required('Should Not be Empty') ,
    level : Yup.string().required('Should Not be Empty') ,
})

const initialValue = {
    name : '' ,
    username : '',
    password : '',
    email : '' ,
    phone : '' ,
    level : ''
    
}
function StaffForm(props) {
    const formik = useFormik({
        initialValues : initialValue ,
        validationSchema : validationSchema ,
        onSubmit : (values , action ) => {
            console.log(values)
        }
    })
    return (
        <>
        <form>
        <div className={'staff-main'}>
                 <div className={'staff-form'}>
                     <TextField 
                        id="name" 
                        variant="outlined" 
                        label="Name"
                        style={{marginBottom : 18}}
                        value={formik.values.name}
                        name="name" 
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.name && Boolean(formik.errors.name)}
                        helperText={formik.touched.name && formik.errors.name}
                        />

                     <TextField 
                        id="Username" 
                        variant="outlined" 
                        label="Username" 
                        style={{marginBottom : 18}}
                        value={formik.values.name}
                        name="username" 
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.username && Boolean(formik.errors.username)}
                        helperText={formik.touched.username && formik.errors.username}
                        />

                     <TextField 
                        id="Password" 
                        type="password" 
                        variant="outlined" 
                        label="Password" 
                        style={{marginBottom : 18}}
                        value={formik.values.password}
                        name="password" 
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}
                        />
                 </div>

                 <div className={'staff-form'}>
                     <TextField 
                        id="Email" 
                        variant="outlined" 
                        label="Email" 
                        style={{marginBottom : 18}}
                        value={formik.values.email}
                        name="email" 
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                        />

                     <TextField 
                        id="Phone" 
                        variant="outlined" 
                        label="Phone" 
                        style={{marginBottom : 18}}
                        value={formik.values.phone}
                        name="phone" 
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
                        style={{marginBottom : 18}}
                        value={formik.values.level}
                        name="level" 
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.level && Boolean(formik.errors.level)}
                        helperText={formik.touched.level && formik.errors.level}
                        >
                         <MenuItem value="1">1</MenuItem>
                         <MenuItem value="2">2</MenuItem>
                         <MenuItem value="3">3</MenuItem>
                     </TextField>
                                      
                </div>
             </div>
             </form>

             <div>
                <button onClick={() => formik.handleSubmit()} className="staff-submit"> Submit </button>
                <button onClick={() => props.handleClose()} className="staff-cancel"> Cancel </button>
             </div>

             </>
    )
}

export default StaffForm
