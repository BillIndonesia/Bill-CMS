import React from 'react'
import {TextField  } from '@material-ui/core'
import * as Yup from 'yup'
import {useFormik} from 'formik'
import '../merchant.css'

const validationSchema = Yup.object().shape({
    item : Yup.string() ,
    data : Yup.string().required('Should Not Empty')
})

const onSubmit = (values , action) => {
    console.log(values)
}

function MerchantFormUpdate(props) {
   const formik = useFormik({
       initialValues : {
           item : props.item ,
           data : '' ,
           type : 'many' ,
           dataList : props.data
           
       } ,

       validationSchema : validationSchema ,

       onSubmit : onSubmit
   })
    
    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <div style={{height : 180}}>
                        
                            {props.item === "Name" ? 
                            <TextField 
                                id="name" 
                                variant="outlined" 
                                label="Name" 
                                name="data"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className={'merchant-input'}
                                style={{marginBottom : 18}} /> : null 
                            }

                            {props.item === "Email" ? 
                            <TextField 
                                id="Email" 
                                variant="outlined" 
                                label="Email"
                                name="data" 
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className={'merchant-input'} 
                                style={{marginBottom : 18}}/> : null }

                            {props.item === "Phone" ?
                            <TextField 
                                id="Phone" 
                                variant="outlined" 
                                label="Phone" 
                                name="data" 
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className={'merchant-input'} 
                                style={{marginBottom : 18}}/> : null }
                            
                            {props.item === "Saldo" ? 
                            <TextField 
                                id="name" 
                                label="Saldo" 
                                type="number"
                                name="data"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                variant="outlined" 
                                style={{marginBottom : 18}} /> : null }
                        
                        
                    </div>  

             </form>
                    <div>
                        <button onClick={() => formik.handleSubmit()} type="submit" className="merchant-submit"> Submit </button>
                        <button onClick={() => props.handleClose()} className="merchant-cancel"> Cancel </button>
                    </div>
             </>
    )
}

export default MerchantFormUpdate
