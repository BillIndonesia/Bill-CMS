import axios from "axios"
import {Loading , ResetReq , Success , Failure} from '../Confirmation/Action'

const saveDataTransaction = (data) => {
    return {
        type : 'TRANSACTION_HISTORY' ,
        payload : {
            data : data
        }
    }
}

// get history transaction

const getTransactionHistory = () => {
    return (dispatch) => {

        axios.get('https://dev.bill-indonesia.com/api/transaction/transaction-history/?page=1')
        .then( result => {
            dispatch(saveDataTransaction(result.data))
        })
    }
}


// next history transaction
const nextHistory = (params) => {
    return (dispatch) => {

        axios.get(`https://dev.bill-indonesia.com/api/transaction/transaction-history/?page=${params}`)
        .then( result => {
            dispatch(saveDataTransaction(result.data))
        })
    }
}

const filterTransaction = (id) => {
    return(dispatch) => {
        dispatch(Loading())

        axios.get(`https://dev.bill-indonesia.com/api/transaction/transaction-history/?transaction_type=${id}`)
             .then( result => dispatch(saveDataTransaction(result.data)))
    }
}

export { getTransactionHistory , nextHistory , filterTransaction}