import axios from 'axios'
import { Loading, Success, Failure, ResetReq , FinishReq} from '../Confirmation/Action'


// edit data 

const EditMerchant = (data) => {
    return {
        type: "EDIT MERCHANT",
        payload: {
            id: data.id,
            username: data.username,
            name: data.name,
            password: data.password,
            email: data.email,
            level: data.level,
            phone: data.phone,
            status: data.status,

        }
    }
}

// send request Edit

const RequestEdit = (data) => {
    if (data.merchant_password == '') {
        delete data.merchant_password;
    }
    return (dispatch) => {
        axios.patch(`https://bill-indonesia.com/api/merchant/update_profile_cms/${data.id}/`, data)
            .then(result => {
                dispatch(Success())

                dispatch(GetMerchants())

                setTimeout(() => {
                    dispatch(ResetReq())

                }, 3000)
            })

            .catch(() => {
                dispatch(Failure())

                setTimeout(() => {
                    dispatch(ResetReq())
                }, 3000)

            })

    }
}

//delete merchant

const DeleteMerchant = (data) => {
    let Data = []

    data.forEach(item => {
        Data.push({ merchant_username: item })
    })

    return (dispatch) => {
        dispatch(Loading)

        axios.post('https://bill-indonesia.com/api/merchant/delete/', Data)
            .then(() => {
                dispatch(Success())

                setTimeout(() => {
                    dispatch(ResetReq())
                }, 3000)
            })
            .catch(() => {
                dispatch(Failure())

                setTimeout(() => {
                    dispatch(ResetReq())
                }, 3000)
            })
    }
}


//get merchant list

const saveDataMerchants = (data) => {
    return {
        type: "SAVE MERCHANTS",
        payload: {
            data: data
        }
    }
}

const GetMerchants = () => {
    return (dispatch) => {
        axios.get('https://bill-indonesia.com/api/merchant/merchant-list/').then(
            result => dispatch(saveDataMerchants(result.data))
        )
    }
}

//create merchant

const RequestMerchant = (data) => {
    return (dispatch) => {
        dispatch(Loading())

        axios.post('https://bill-indonesia.com/api/merchant/register/', data)
            .then(() => {
                dispatch(Success())

                setTimeout(() => {
                    dispatch(ResetReq())

                }, 3000)

            })

            .catch(() => {
                dispatch(Failure())

                setTimeout(() => {
                    dispatch({ type: "RESET-REQ" })
                }, 3000)

            })
    }
}


const SearchData = (data = '') => {
    return (dispatch) => {
        dispatch(Loading())

        axios.get("https://jsonplaceholder.typicode.com/users/1/a")
                .then( response => {
                    setTimeout(() => dispatch(ResetReq()), 2000)
                })

                .catch( err => {
                    dispatch(Failure())

                    setTimeout(() => dispatch(ResetReq()), 2000)
                })        
    }
}

export { EditMerchant, DeleteMerchant, GetMerchants, RequestMerchant, RequestEdit , SearchData}