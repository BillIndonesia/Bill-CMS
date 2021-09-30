const initialValue = {
    loading: false,
    data: [],
    failure: false
}

const List = (data) => {
    let Data = [] 

    data.forEach((item, index) => {
        console.log(data[index]);
        let picname = item.cashout_by == null ? 'self' : item.cashout_by.staff_name
        let date = new Date(item.create_date)
        Data.push({
            id: index,
            date: `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`,
            ammount: item.cashout_amount,
            pic: picname,
            destination: item.merchants.merchant_name,

        })

    } ) 


    return Data
}
const Reducer = (state = initialValue, action) => {


    switch (action.type) {
        case "CASHOUT_HISTORY":
            return {
                loading: false,
                data: List(action.payload.data),

            }

        case "LoadingCashout":
            return {
                loading: true,
                data: []
            }

        case "RESET-CASHOUT":
            return {
                loading: true,
                data: []
            }


        default:
            return state
    }
}

export default Reducer