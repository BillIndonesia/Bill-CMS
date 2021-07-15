const initialValue = {
    data : []
}

const Reducer = ( state = initialValue , action ) => {
    let Data = []

    switch(action.type){
        case "CASHOUT_HISTORY" :
            let data = action.payload.data
            data.forEach( (item , index ) => {

                let date = new Date(item.create_date)
        
                Data.push({
                    id     : index , 
                    date   : `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}` ,
                    ammount : item.cashout_amount ,
                    pic    : item.cashout_by.staff_name ,
                    destination : item.merchants.merchant_name ,
                    
                })
            } ) 
            
            return {
                data : Data
            }

        default :
            return state 
    }
} 

export default Reducer