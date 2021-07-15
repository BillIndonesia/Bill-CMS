import axios from 'axios'

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

const DeleteMerchant = () => {
    return () => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then( result => console.log(result.data))
        .catch( err => console.log(err.message))
    }
}


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

export {EditMerchant , DeleteMerchant , GetMerchants}