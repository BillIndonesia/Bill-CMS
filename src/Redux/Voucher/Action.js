import axios from 'axios'

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

export {GetVoucher}