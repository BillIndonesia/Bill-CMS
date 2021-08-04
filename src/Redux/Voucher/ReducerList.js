const initialState = {
    loading : false ,
    data : []
}

const List = ( data ) => {
    let Data = [] 

    data.forEach( item => {
        let date = new Date(item.create_date)

        Data.push({
            id : item.voucher_code ,
            by : item.create_by ,
            date : `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}` ,
            status : item.voucherStatus == 1 ? "Active" : "Non Active" ,
            nominal : item.voucher_nominal
        })
    })

    return Data
}


const Reducer = (state = initialState , action ) => {

    switch( action.type ){
        case "SAVE VOUCHER" :
            return{
                loading : false ,
                data : List(action.payload.data)
            }
            
        case "LOADING VOUCHER" :
            return {
                loading : true ,
                data : []
            }

        default :
            return state 
    }
}

export default Reducer