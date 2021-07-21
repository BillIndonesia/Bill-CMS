import axios from "axios"


//cashout request

const Loading = () => { return { type : "REQ-CASHOUT" } }

const Success = () => { return { type : "REQ-SUCCESS"} }

const Failure = () => { return { type : "REQ-FAILURE" } }

const Cashout = (data) => {
    return (dispatch) => {
        dispatch(Loading())

        axios.post('https://dev.bill-indonesia.com/api/cashout/request-cashout/' , data)
        .then( () => {
            dispatch(Success())

            setTimeout(() => {
                dispatch({type : "RESET-REQ"})
            } , 3000)
            
        })
        .catch( err => {
            dispatch(Failure())

            setTimeout( () => {
                dispatch({ type : "RESET-REQ"})
            } , 3000 )
        })
    }
}


//get data history

const SaveDataHistory = (data) => {
    return{
        type : "CASHOUT_HISTORY" ,
        payload : {
            data : data 
        }
    }
}

const LoadingCashoutData = () => {
    return {
        type : 'LoadingCashout' 
    }
}

const getHistoryCashout = () => {
    return (dispatch) => {
        dispatch(LoadingCashoutData())
        
        axios.get('https://dev.bill-indonesia.com/api/cashout/cashout-history/?page=1')
                .then( result => dispatch( SaveDataHistory( result.data )) )
                .catch( err => console.log(err))
        
    }
}


//get next history data 

const getNextHistori = (params) => {
    return (dispatch) => {
    dispatch(LoadingCashoutData())
        
        axios.get(`https://dev.bill-indonesia.com/api/cashout/cashout-history/?page=${params}`)
                .then( result => {
                        dispatch( SaveDataHistory( result.data ))
                      
                } )
                .catch( err => console.log(err))
          }

}
export {Cashout , getHistoryCashout , getNextHistori}