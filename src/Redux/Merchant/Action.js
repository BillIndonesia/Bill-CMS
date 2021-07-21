import axios from 'axios'

const Loading = () => { return { type : "LOADING-REQ" } }

const Success = () => { return { type : "REQ-SUCCESS" } }

const Failure = () => { return { type : "REQ-FAILURE" } }


// edit merchant 

const EditMerchant = (data) => {
    return {
        type : "EDIT MERCHANT" , 
        payload : {
            id : data.id ,
            username : data.username ,
            name : data.name ,
            password : data.password ,
            email : data.email ,
            level : data.level ,
            phone : data.phone ,
            status : data.status ,
            saldo : data.saldo
        }
    }
}

//delete merchant

const DeleteMerchant = (data) => {
    let Data = []
    
    data.forEach( item => {
        Data.push({ merchant_username : item })
    })
    
    return (dispatch) => {
        dispatch(Loading)

        axios.post('https://dev.bill-indonesia.com/api/merchant/delete/' , Data)
                .then( () => {
                    dispatch(Success())

                    setTimeout( () => {
                        dispatch({ type : "RESET-REQ"})
                    } , 3000)
                })
                .catch( () => {
                    dispatch(Failure())

                    setTimeout( () => {
                        dispatch({ type : "RESET-REQ"})
                    } , 3000)
                })
    }
}


//get merchant list

const saveDataMerchants = (data) => {
    return {
        type : "SAVE MERCHANTS" ,
        payload : {
            data : data 
        }
    }
}

const GetMerchants = () => {
    return (dispatch) => {
        axios.get('https://dev.bill-indonesia.com/api/merchant/merchant-list/').then(
            result => dispatch(saveDataMerchants(result.data))
        )
    } 
}

//create merchant

const RequestMerchant = (data) => {
    return (dispatch) => {
        dispatch( Loading() )

        axios.post('https://dev.bill-indonesia.com/api/merchant/register/' , data)
                .then( () => {
                    dispatch( Success() )

                    setTimeout( () => {
                        dispatch({type : "RESET-REQ"})

                    } , 3000)
                    
                })
                
                .catch( () => {
                    dispatch(Failure())
                    
                    setTimeout( () => {
                        dispatch({ type : "RESET-REQ"})
                    } , 3000)

                })
    }
}

export {EditMerchant , DeleteMerchant , GetMerchants , RequestMerchant}