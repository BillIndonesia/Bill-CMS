import axios from 'axios'

const EditMerchant = (data) => {
    return {
        type : "EDIT MERCHANT" , 
        payload : {
            username : data.username ,
            name : data.name ,
            email : data.email ,
            level : data.level ,
            phone : data.phone ,
            status : data.status
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

export {EditMerchant , DeleteMerchant}