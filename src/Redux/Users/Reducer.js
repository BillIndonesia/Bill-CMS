const initialValues = {
    loading : false ,
    data : []
}

const List = (data) => {
    let Data = [] 

    data.forEach(item => {
        Data.push({
            id : item.customer_id , 
            name : item.customer_name ,
            email : item.customer_email ,
            tempatlahir : item.customer_bornplace ,
            tangalahir : item.customer_borndate ,
            level : item.customer_level.customer_level_id ,
            status : item.customer_status.customer_status_name ,
            balance : item.balance
        })
    })

    return Data
}

const Reducer = (state = initialValues , action ) => {
    switch(action.type){
        case "SAVE_USER" :
            return {
                loading : false ,
                data : List(action.payload.data) 
            }

        case "LOADING_USER" :
            return {
                loading : true ,
                data : [] 
            }

        default : 
            return state 
    }
}

export default Reducer