import axios from 'axios'
import { Loading, Success, Failure, ResetReq } from '../Confirmation/Action'

const DeleteUsers = (data) => {

    console.log(data)
    return {
        type: "iseng"
    }
}


const SaveDataUser = (data) => {
    return {
        type: "SAVE_USER",
        payload: {
            data: data
        }
    }
}


const getUser = () => {

    return (dispatch) => {

        axios.get('https://bill-indonesia.com/api/customer/customer-list/')
            .then(result => {
                dispatch(SaveDataUser(result.data))

            })
    }
}


const sendUser = (data) => {

    return (dispatch) => {

        axios.post('https://bill-indonesia.com/api/customer/register/', data)
            .then(result => {
                dispatch(Success())


                setTimeout(() => {
                    dispatch(ResetReq())
                }, 3000);
            })

        .catch(err => {
            dispatch(Failure)
            console.log(err)

            setTimeout(() => {
                dispatch(ResetReq())
            }, 3000);
        })
    }
}

const searchData = (data = '') => {
    return (dispatch) => {
        dispatch(Loading())

        axios.get("https://jsonplaceholder.typicode.com/users/1/a")
                 .then( response => setTimeout(() => dispatch(ResetReq()) , 3000))

                 .catch( err => {
                     dispatch(Failure())

                     setTimeout(() => dispatch(ResetReq()) , 3000)
                 } )
    }
}

export { DeleteUsers, getUser, sendUser , searchData}