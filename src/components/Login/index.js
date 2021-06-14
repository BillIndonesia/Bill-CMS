import React from 'react'
import {Formik , Form , Field , ErrorMessage} from 'formik'
import * as Yup from 'yup'
import './login.css'

function Index(props) {

    

    const validationSchema = Yup.object().shape({
        phone : Yup.string().required("Please Input Your Phone") ,
        pin   : Yup.string().required("Please Input Your Pin") 
    })

    const initialValues = { phone : '' , pin : ''}

    const onSubmit = (values , action ) => {
        
       if(values.phone === '111' && values.pin === '111'){
           localStorage.setItem('users' , 'admin')
           props.change()
       }
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
                        <label className={'label-field'}>No. Telp</label>
                        <Field type="text" name="phone" className={'login-field'} placeholder="No.Telp" /> 
                        <ErrorMessage name="phone" className={'login-err'}>
                            { msg => <span className={'err'}>{msg}</span>}
                        </ErrorMessage>
                    </div>

                    <div className={'gap'}>
                        <label className={'label-field'}>Pin</label>
                        <Field type="password" name="pin" className={'login-field'} placeholder="Pin"/> 
                        <ErrorMessage name="pin" className={'login-err'}>
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
