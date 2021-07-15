import React from 'react'
import {TextField , MenuItem} from '@material-ui/core'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import axios from 'axios'

const validationSchema = Yup.object().shape({
  
    staff_name : Yup.string().required('Should Not be Empty') ,
    staff_username : Yup.string().required('Should Not be Empty') ,
    staff_password : Yup.string().required('Should Not be Empty') ,
    staff_email : Yup.string().required('Should Not be Empty').email('Please Input Valid Email'),
    staff_phone : Yup.string().required('Should Not be Empty') ,
    staff_level : Yup.string().required('Should Not be Empty') ,
})

const initialValue = {
    staff_name : '' ,
    staff_username : '',
    staff_password : '',
    staff_email : '' ,
    staff_phone : '' ,
    staff_level : ''
    
}
function StaffForm(props) {
    const formik = useFormik({
        initialValues : initialValue ,
        validationSchema : validationSchema ,
        onSubmit : (values , action ) => {
            axios.post('https://dev.bill-indonesia.com/api/employee/register/', values)
            .then( result => {
                if(result.status === 201) {
                    console.log(result.data)
                }
            })
            .catch( err => {
                console.log(err.message)
            })

            action.resetForm()
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
                        name="staff_name" 
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.staff_name && Boolean(formik.errors.staff_name)}
                        helperText={formik.touched.staff_name && formik.errors.staff_name}
                        />

                     <TextField 
                        id="Username" 
                        variant="outlined" 
                        label="Username" 
                        style={{marginBottom : 18}}
                        value={formik.values.name}
                        name="staff_username" 
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.staff_username && Boolean(formik.errors.staff_username)}
                        helperText={formik.touched.staff_username && formik.errors.staff_username}
                        />

                     <TextField 
                        id="Password" 
                        type="password" 
                        variant="outlined" 
                        label="Password" 
                        style={{marginBottom : 18}}
                        value={formik.values.staff_password}
                        name="staff_password" 
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.staff_password && Boolean(formik.errors.staff_password)}
                        helperText={formik.touched.staff_password && formik.errors.staff_password}
                        />
                 </div>

                 <div className={'staff-form'}>
                     <TextField 
                        id="Email" 
                        variant="outlined" 
                        label="Email" 
                        style={{marginBottom : 18}}
                        value={formik.values.staff_email}
                        name="staff_email" 
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.staff_email && Boolean(formik.errors.staff_email)}
                        helperText={formik.touched.staff_email && formik.errors.staff_email}
                        />

                     <TextField 
                        id="Phone" 
                        variant="outlined" 
                        label="Phone" 
                        style={{marginBottom : 18}}
                        value={formik.values.staff_phone}
                        name="staff_phone" 
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.staff_phone && Boolean(formik.errors.staff_phone)}
                        helperText={formik.touched.staff_phone && formik.errors.staff_phone}
                        />
                     <TextField 
                        id="Level" 
                        select 
                        variant="outlined" 
                        label="Level" 
                        style={{marginBottom : 18}}
                        value={formik.values.staff_level}
                        name="staff_level" 
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.staff_level && Boolean(formik.errors.staff_level)}
                        helperText={formik.touched.staff_level && formik.errors.staff_level}
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
