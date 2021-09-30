const initialValue = {
    loading : false ,
    data : [] ,

}

const List = (data) => {
    let Data = []

    data.forEach(item => {
        let {transaction , merchant , voucher , customer} = item
        let date = new Date(transaction.create_date)
        let merchant_voucher = transaction.transaction_type == 'payment' ? merchant.merchant_name : voucher.voucher_code 
        let nominal = transaction.transaction_type == 'payment' ? transaction.amount : voucher.voucher_nominal 

        Data.push({
            id : transaction.transaction_id ,
            date : `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}` ,
            type : transaction.transaction_type ,
            name : customer.customer_name ,
            merchant_voucher : merchant_voucher ,
            amount : nominal
        })
    })

    return Data
}

const reducer = (state = initialValue , action) => {
    switch(action.type){
        case "TRANSACTION_HISTORY" :
            return { data : List(action.payload.data)}  

        default :
            return state

    }
}

export default reducer