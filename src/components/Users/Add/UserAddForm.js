import React , {useState} from 'react'
import {TextField } from '@material-ui/core'
import {MuiPickersUtilsProvider , KeyboardDatePicker} from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
import * as Yup from 'yup'
import {useFormik} from 'formik'
import { useDispatch} from 'react-redux'
import {sendUser} from '../../../Redux/Users/Action'
import '../users.css'

const initialValue = {
    customer_name : '' ,
    customer_borndate : new Date() ,
    customer_password : '' ,
    phone_number : '' ,
    customer_bornplace : '' ,
    firebase_token : "ceSmwxzjQgmUKAp0A8oNG9:APA91bGXU9fENJQxwKVJd-gbKAGbP18XadsD_2C77KUmoGwBsWl7nExJN3dgywzMFrmerD1AXDyEGu5SbVL0LTHtGgYEiDF6uFWyQ-TkKyPdQcpx_eaHyH0kDWkVd-bqEomsC_AGPCr"
}

const validationSchema = Yup.object().shape({
    customer_name : Yup.string().required('This Field is required') ,
    customer_borndate : Yup.date() ,
    customer_password : Yup.string().required('This Field is required') ,
    phone_number : Yup.string().required('This Field is Required').matches(/08/g, "2 digit first should contain 08") ,
    customer_bornplace : '',
    

})



function UserAddForm(props) {
    

    const [ date , setDate ] = useState(new Date())
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues : initialValue ,
        validationSchema : validationSchema ,
        onSubmit : (values , action) => {
            dispatch(sendUser(values))

            action.resetForm()
        }
    }) 
    
    return (
        <>
        <form onSubmit={formik.handleSubmit}>
        <div className={'users-main'}>
                
                 <div className={'users-form'}>
                     <TextField 
                        id="name" 
                        variant="outlined" 
                        label="Name" 
                        style={{marginBottom : 18}}
                        value={formik.values.customer_name}
                        name="customer_name"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.customer_name && Boolean(formik.errors.customer_name)}
                        helperText={formik.touched.customer_name && formik.errors.customer_name}
                        />
                     
                     
                     <TextField 
                        id="Tempat Lahir" 
                        variant="outlined" 
                        label="Tempat Lahir" 
                        style={{marginBottom : 18}}
                        value={formik.values.customer_bornplace}
                        name="customer_bornplace"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.customer_bornplace && Boolean(formik.errors.customers_bornplace)}
                        helperText={formik.touched.customer_bornplace && formik.errors.customer_bornplace}

                    />

                     <TextField 
                        id="Password" 
                        variant="outlined" 
                        type="password"
                        label="Password" 
                        style={{marginBottom : 18}}
                        name="customer_password"
                        value={formik.values.customer_password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.customer_password && Boolean(formik.errors.customer_password)}
                        helperText={formik.touched.customer_password&& formik.errors.customer_password}

                    />
                 </div>

                 <div className={'users-form'}>
                     <MuiPickersUtilsProvider utils={DateFnsUtils}>
                     <KeyboardDatePicker 
                       
                        value={date}
                        variant="inline" 
                        format="yyyy-dd-MM"
                        id="Tanggal Lahir"
                        label="Tanggal Lahir"
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                          }}
                        style={{marginBottom : 20}}
                        name="customer_borndate"
                        onChange={ e => 
                            {formik.values.customer_borndate = `${e.getFullYear()}-${e.getMonth()}-${e.getDate()}`
                                setDate(e)
                        }}
                        onBlur={formik.handleBlur}
                        error={formik.touched.customer_borndate && Boolean(formik.errors.customer_borndate)}
                        helperText={formik.touched.customer_borndate && formik.errors.customer_borndate}
                        
                        
                      />

                      </MuiPickersUtilsProvider>
                     

                      <TextField 
                        id="Phone Number" 
                        variant="outlined" 
                        label="Phone Number" 
                        style={{marginBottom : 18}}
                        value={formik.values.phone_number}
                        name="phone_number"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.phone_number && Boolean(formik.errors.phone_number)}
                        helperText={formik.touched.phone_number && formik.errors.phone_number}

                    />
                                      
                </div>
                

                
             </div>  
             
             </form>
           
             <button onClick={() => props.handleClose()} className="merchant-cancel"> Cancel </button>
             <button type="submit" onClick={() => formik.handleSubmit()} className="merchant-submit">Submit</button>
             </>
    )
}

export default React.memo(UserAddForm)
