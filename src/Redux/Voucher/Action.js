import axios from 'axios'
import {Loading , Success , Failure ,ResetReq } from '../Confirmation/Action'

//get voucher list
const SaveVoucher = (data) => {
    return {
        type : "SAVE VOUCHER" ,
        payload : {
            data : data
        }
    }
}

const GetVoucher = () => {

    return (dispatch) => {
        axios.get('https://dev.bill-indonesia.com/api/voucher/vouchers-list/')
        .then( result => dispatch( SaveVoucher(result.data.results) ))
    }
}


//voucher request

const VoucherRequest = (data) => {
    return (dispatch) => {
        dispatch( Loading() )

        axios.post('https://dev.bill-indonesia.com/api/voucher/generate-vouchers/' , data)
                .then( () => {
                    dispatch( Success() )

                    dispatch(GetVoucher())

                    setTimeout( () => {
                        dispatch(ResetReq())

                    } , 3000)
                    
                })
                .catch( () => dispatch( Failure() ))
    }
}

//get next data 
const getNextData = (params) => {
    return (dispatch) => {
        dispatch({type : "LOADING VOUCHER"})

        axios.get(`https://dev.bill-indonesia.com/api/voucher/vouchers-list/?page=${params}`)
                .then( result => {
                    dispatch(SaveVoucher(result.data.results))
                })
                .catch( err => console.log(err))
    }
}


export { GetVoucher , VoucherRequest , getNextData}