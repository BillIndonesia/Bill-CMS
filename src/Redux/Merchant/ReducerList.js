const initialValues = {
    data : []
}

const List = (data) => {
    let Data = []  

            data.forEach( item => {
                Data.push({
                    id : item.merchant_username ,
                    username : item.merchant_username ,
                    name : item.merchant_name ,
                    password : '11asa' ,
                    email : item.merchant_email ,
                    phone : item.phone_number ,
                    level : item.merchant_level_id.merchant_level_id ,
                    status : item.merchant_status_id.merchant_status_id ,
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