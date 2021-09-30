const initialValue = {
    loading : false ,
    data : [] ,
    failure : false 
}

const List = (data) => {
    let Data = [] 

    data.forEach( (item , index ) => {

        let date = new Date(item.create_date)
       
        Data.push({
            id     : index , 
            date   : `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}` ,
            ammount : item.cashout_amount ,
            pic    : item.cashout_by.staff_name ,
            destination : item.merchants.merchant_name ,
            
        })
    } ) 

    return Data
}

const Reducer = ( state = initialValue , action ) => {
    

    switch(action.type){
        case "CASHOUT_HISTORY" :
            return {
                loading : false ,
                data : List(action.payload.data) ,
               
            }

        case "LoadingCashout" :
            return {
                loading : true ,
                data : []
            }

        case "RESET-CASHOUT" : 
            return {
                loading : true ,
                data : []
            }


        default :
            return state 
    }
} 

export default Reducer