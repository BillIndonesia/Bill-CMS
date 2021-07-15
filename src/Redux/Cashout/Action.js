import axios from "axios"

const Cashout = (data) => {
    return {
        type : "CASHOUT" ,
        payload : {
                id   : data.id , 
                name : data.name ,
                nominal : data.nominal
            
        }
    }
}

const SaveDataHistory = (data) => {
    return{
        type : "CASHOUT_HISTORY" ,
        payload : {
            data : data 
        }
    }
}

const getHistoryCashout = (page , name) => {
    return (dispatch) => {
        axios.get('https://dev.bill-indonesia.com/api/cashout/cashout-history/')
                .then( result => dispatch( SaveDataHistory( result.data )) )
                .catch( err => console.log(err))
    }
}

export {Cashout , getHistoryCashout}