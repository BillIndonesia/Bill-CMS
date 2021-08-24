import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import axios from 'axios'
import * as Yup from 'yup'
import './login.css'

const validationSchema = Yup.object().shape({
    staff_username: Yup.string().required("Please Input Your Phone"),
    staff_password: Yup.string().required("Please Input Your Pin")
})


const sendData = () => {

}

const initialValues = { staff_username: '', staff_password: '' }

function Index(props) {

    const [err, setErr] = useState(false)

    const onSubmit = (values, action) => {
        console.log(values)
        axios.post('https://dev.bill-indonesia.com/api/employee/login/', values)
            .then(result => {
                
                if (result.status === 200) {
                    localStorage.setItem('users', 'verif')
                    localStorage.setItem('level', '3')
                    localStorage.setItem('name', result.data.staff_name)
                    props.change()
                    return null
                }

            })
            .catch(err => {
                if (err.response.status === 401) {
                    setErr(true)
                }
            })

    }


    return (<
        div className={'login-container'} >

        <
        div className={'login-body'} >
            <
        h4 > Silahkan Login Menggunakan Akun Staff < /h4> <
        div className={'login-main'} >
                    <
        Formik initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={onSubmit} >
                        <
        Form >
                            <
        div className={'gap'} >
                                <
        label className={'label-field'} > Username < /label> <
                                        Field type="text"
                                        name="staff_username"
                                        className={"login-field " + (err ? 'errors' : null)}
                                        placeholder="Username" /
                                    >

                                    <
        /div>

                                    <
        div className={'gap'} >
                                        <
        label className={'label-field'} > Password < /label> <
                                                Field type="password"
                                                name="staff_password"
                                                className={"login-field " + (err ? 'errors' : null)}
                                                placeholder="Password" /
                                            >

                                            {
                                                err ? < span className={'err'} > Username / Password Incorrect < /span> : null }

                                                    <
            /div>



                                                    <
            div className={'gap'} >
                                                        <
            button type="submit"
                                                            className={'btn-login'} > Log In < /button> <
            div className={'login-action'} >
                                                                <
            span > Lupa PIN ? < /span> < /
            div > <
            /div> < /
            Form >

                                                                    <
            /Formik> < /
            div > <
            /div> < /
            div >
                                                                    )
    }

                                                                    export default Index