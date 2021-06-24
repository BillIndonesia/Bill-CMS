import React from 'react'
import {TextField , MenuItem } from '@material-ui/core'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
    item : Yup.string() ,
    data : Yup.string().required('Should Not Empty')
})

const onSubmit = (values , action ) => {
    console.log(values)
}

function MerchantFormUpdate(props) {
    
    const formik = useFormik({
        initialValues : {
            item : props.item ,
            data : ''
        } ,

        validationSchema : validationSchema ,
        onSubmit : onSubmit
    })
    
    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <div style={{height : 200}}>
                        
                            {props.item === "Name" ? 
                                <TextField 
                                    id="name" 
                                    variant="outlined" 
                                    label="Name" 
                                    name="data"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.data && Boolean(formik.errors.data)}
                                    helperText={formik.touched.data && formik.errors.data}
                                    style={{marginBottom : 18}}/> : null }

                            {props.item === "Email" ? 
                                <TextField 
                                    id="Email" 
                                    variant="outlined" 
                                    label="Email" 
                                    name="data"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.data && Boolean(formik.errors.data)}
                                    helperText={formik.touched.data && formik.errors.data}
                                    style={{marginBottom : 18}}/> : null }

                            {props.item === "Password" ? 
                                <TextField 
                                    id="Password" 
                                    type="password" 
                                    variant="outlined" 
                                    label="Password" 
                                    name="data"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.data && Boolean(formik.errors.data)}
                                    helperText={formik.touched.data && formik.errors.data}
                                    style={{marginBottom : 18}}/> : null }
                        

                        
                            {props.item === "Phone" ? 
                                <TextField 
                                    id="Phone" 
                                    variant="outlined" 
                                    label="Phone"   
                                    name="data"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.data && Boolean(formik.errors.data)}
                                    helperText={formik.touched.data && formik.errors.data}
                                    style={{marginBottom : 18}}/> : null }


                            {props.item === "Level"? 
                            <TextField 
                                id="Level" 
                                select 
                                defaultValue="1" 
                                variant="outlined"  
                                label="Level" 
                                name="data"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.data && Boolean(formik.errors.data)}
                                helperText={formik.touched.data && formik.errors.data}
                                style={{marginBottom : 18 , width : '100%'}}>

                                <MenuItem value="1">1</MenuItem>
                                <MenuItem value="2">2</MenuItem>
                                <MenuItem value="3">3</MenuItem>
                            </TextField> : null }
                            
                            {props.item === "Saldo" ? 
                                <TextField 
                                    id="name" 
                                    label="Saldo" 
                                    variant="outlined" 
                                    name="data"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.data && Boolean(formik.errors.data)}
                                    helperText={formik.touched.data && formik.errors.data}
                                    style={{marginBottom : 18}} /> : null }
                        
                        
                    </div>  

                    <div>
                        <button onClick={() => formik.handleSubmit()} type="submit" className="staff-submit"> Submit </button>
                        <button onClick={() => props.handleClose()} className="staff-cancel"> Cancel </button>
                    </div>

             </form>
             </>
    )
}

export default MerchantFormUpdate
