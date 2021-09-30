import axios from "axios"
import { Loading, Success, Failure, ResetReq } from '../Confirmation/Action'

//cashout request

const Cashout = (data) => {
    return (dispatch) => {
        dispatch(Loading())

        axios.post('https://dev.bill-indonesia.com/api/cashout/request-cashout/', data)
            .then(() => {
                dispatch(Success())

                dispatch(getHistoryCashout())

                setTimeout(() => {
                    dispatch(ResetReq())
                }, 3000)

            })
            .catch(err => {
                dispatch(Failure())

                setTimeout(() => {
                    dispatch(ResetReq())
                }, 3000)
            })
    }
}


//get data history

const SaveDataHistory = (data) => {
    return {
        type: "CASHOUT_HISTORY",
        payload: {
            data: data
        }
    }
}

const LoadingCashoutData = () => {
    return {
        type: 'LoadingCashout'
    }
}

const getHistoryCashout = () => {
    return (dispatch) => {


        axios.get('https://dev.bill-indonesia.com/api/cashout/cashout-history/?page=1')
            .then(result => dispatch(SaveDataHistory(result.data)))
            .catch(err => console.log(err))

    }
}


//get next history data 

const getNextHistori = (params) => {
    return (dispatch) => {
        dispatch(LoadingCashoutData())

        axios.get(`https://dev.bill-indonesia.com/api/cashout/cashout-history/?page=${params}`)
            .then(result => {
                dispatch(SaveDataHistory(result.data))

            })
            .catch(err => console.log(err))
    }

}


const SearchData = (data = '') => {
    return (dispatch) => {
        dispatch(Loading())
        
        axios.get("https://jsonplaceholder.typicode.com/users/1/a")
                .then( response => {
                    setTimeout(() => dispatch(ResetReq()) , 3000)
                })
                .catch( err => {
                    dispatch(Failure())

                    setTimeout( () => dispatch(ResetReq()) , 3000)
                })
    }
}

export { Cashout, getHistoryCashout, getNextHistori , SearchData}