import React , {useState} from 'react'
import {Formik , Form , Field , ErrorMessage} from 'formik'
import axios from 'axios'
import * as Yup from 'yup'
import './login.css'

const validationSchema = Yup.object().shape({
    staff_username : Yup.string().required("Please Input Your Phone") ,
    staff_password : Yup.string().required("Please Input Your Pin") 
})

const initialValues = { staff_username : '' , staff_password : '' }

function Index(props) {

    const [err , setErr ] = useState(true)
    const onSubmit = (values , action ) => {

        console.log(values)

        axios.post('https://dev.bill-indonesia.com/api/employee/login/' , values)
                .then( result => {
                    if(result.status === 200){
                        props.change()
                    }else if(result.status !== 200){
                        props.change()
                    }
                })
                .catch( err => {
                    props.change()
                })

    //    if(values.staff_username === '111' && values.staff_password === '111')
    //    {
    //        localStorage.setItem('users' , 'verif')
    //        localStorage.setItem('level' , '3')
    //        props.change()
    //        return null
    //    }

    //    else if(values.staff_username === '222' && values.staff_password === '222')
    //    {
    //     localStorage.setItem('users' , 'staff')
    //     localStorage.setItem('level' , '2')
    //     props.change()
    //     }

      

    }
    return (
        <div className={'login-container'}>
          
          <div className={'login-body'}>
            <h4>Silahkan Login Menggunakan Akun Vendor</h4>
            <div className={'login-main'}>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                >
                <Form>
                    <div className={'gap'}>
                        <label className={'label-field'}>Username</label>
                        <Field 
                            type="text" 
                            name="staff_username" 
                            className={"login-field " + (err ? 'errors' : null)} 
                            placeholder="Username"
                         /> 
                        
                        <ErrorMessage name="staff_username" className={'login-err'}>
                            { msg => <span className={'err'}>{msg}</span>}
                        </ErrorMessage>
                    </div>

                    <div className={'gap'}>
                        <label className={'label-field'}>Password</label>
                        <Field 
                            type="password" 
                            name="staff_password" 
                            className={"login-field " + (err ? 'errors' : null)} 
                            placeholder="Password"
                        />

                        <ErrorMessage name="staff_password" className={'login-err'}>
                            { msg => <span className={'err'}>{msg}</span>}
                        </ErrorMessage>
                    </div>

                    

                    <div className={'gap'}>
                        <button type="submit" className={'btn-login'}>Log In</button>
                        <div className={'login-action'}>
                        <span>Belum Punya Akun Vendor?</span>
                        <span>Lupa PIN?</span>
                        </div>
                    </div>
                </Form>

                </Formik>
            </div>
          </div>  
        </div>
    )
}

export default Index
