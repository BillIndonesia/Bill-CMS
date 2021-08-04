const initialValues = {
    data : []
}

const List = (data) => {
    let Data = []  

            data.forEach( item => {
                Data.push({
                    id : item.merchant_id ,
                    username : item.merchant_username ,
                    name : item.merchant_name ,
                    password : '11asa' ,
                    email : item.merchant_email ,
                    phone : item.phone_number ,
                    level : item.merchant_level.merchant_level_id ,
                    status : item.merchant_status.merchant_status_id == 1 ? "Active" : "Not Active" ,
                    saldo : item.balance
                })
            })

            return Data
}

const Reducer = ( state = initialValues , action ) => {
    
    switch( action.type ){
        case "SAVE MERCHANTS" :
            return {
                data : List(action.payload.data)
            }

        default : 
            return state 
    }
}

export default Reducer