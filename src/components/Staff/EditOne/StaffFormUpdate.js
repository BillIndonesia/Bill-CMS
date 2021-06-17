import React from 'react'
import {TextField , MenuItem } from '@material-ui/core'
import {useSelector} from 'react-redux'
import {useFormik} from 'formik'
import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
    id       : Yup.string() ,
    name     : Yup.string().required('Should Not be Empty') ,
    username : Yup.string().required('Should Not be Empty') ,
    password : Yup.string().required('Should Not be Empty') ,
    email    : Yup.string().required('Should Not be Empty').email('Please Input Valid Email'),
    phone    : Yup.string().required('Should Not be Empty') ,
    level    : Yup.string().required('Should Not be Empty') ,
})

function MerchantFormUpdate() {
    const Data = useSelector(state => state.Staff )

    const initialValue = {
        id       : Data.id ,
        name     : Data.name ,
        username : Data.username ,
        password : Data.password ,
        email    : Data.email ,
        phone    : Data.phone ,
        level    : Data.level ,
    }

    const formik = useFormik({
        initialValues : initialValue ,
        validationSchema : validationSchema ,
        onSubmit : (values , action ) => {
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
                        aria-readonly 
                        value={formik.values.username}  
                        variant="outlined" 
                        label="Username" 
                        style={{marginBottom : 18}}
                        name="username"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.username && Boolean(formik.errors.username)}
                        helperText={formik.touched.username && formik.errors.username}
                        />

                     <TextField 
                        id="Password"
                        type="password" 
                        value={formik.values.password} 
                        variant="outlined" 
                        label="Password"  
                        style={{marginBottom : 18}}
                        name="password"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}
                        />
                 </div>

                 <div className={'merchant-form'}>
                     <TextField 
                        id="Email" 
                        value={formik.values.email} 
                        variant="outlined" 
                        label="Email" 
                        style={{marginBottom : 18}}
                        name="email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                        />

                     <TextField 
                        id="Phone" 
                        value={formik.values.phone} 
                        variant="outlined" 
                        label="Phone" 
                        style={{marginBottom : 18}}
                        name="phone"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.phone && Boolean(formik.errors.phone)}
                        helperText={formik.touched.phone && formik.errors.phone}
                        />

                     <TextField 
                        id="Level"
                        select 
                        value={formik.values.level} 
                        variant="outlined" 
                        label="Level" 
                        style={{marginBottom : 18}}
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
             <button type="submit">Submit</button> 
             </form>
             </>
    )
}

export default MerchantFormUpdate
