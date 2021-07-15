import React from 'react'
import {TextField , FormControl , FormLabel , RadioGroup , FormControlLabel , Radio} from '@material-ui/core'
import {useFormik} from 'formik'
import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
    name : Yup.string().required('error') ,
    level : Yup.string().required('error')
})

const initialValue = {
    name : '' ,
    level : ''
}

const onSubmit = (values , action ) => {
    console.log(values)
}

function Index() {
    const formik = useFormik({
        initialValues : initialValue ,
        validationSchema : validationSchema ,
        onSubmit : onSubmit
    })

    return (
        <>
        <form onSubmit={formik.handleSubmit}>
            <TextField
                id="name"
                value={formik.values.name}
                label="Name"
                variant="outlined"
                name="name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
            />

            <FormControl component="fieldset">
                <FormLabel component="legend">
                    Choice Level
                </FormLabel>
                <RadioGroup defaultValue="Master" name="level" onChange={formik.handleChange}> 
                    <FormControlLabel value="Master" control={<Radio />} label="Master" />
                    <FormControlLabel value="Diamond" control={<Radio />} label="Diamond" />
                    <FormControlLabel value="Champion" control={<Radio />} label="Champion" />
                </RadioGroup>
            </FormControl>
            
            
        </form>
        <button type="submit" onClick={() => formik.handleSubmit()}>Submit</button>
        </>
    )
}

export default Index
