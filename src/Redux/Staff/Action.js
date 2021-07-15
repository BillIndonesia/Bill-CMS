import axios from "axios"

const EditStaff = (data) => {
    return {
        type : "EDIT STAFF" ,
        payload : {
            id : data.id ,
            name : data.name ,
            password : data.password ,
            username : data.username ,
            phone : data.phone ,
            email : data.email ,
            level : data.level ,
            
        }
    }
}

const DeleteStaff = (data) => {
    console.log(data)
    return {
        type : 'iseng'
    }
}

const SaveDataStaff = (data) => {

    return {
        type : "SAVE STAFF" ,
        payload : {
            data : data
        }
    }
}

const GetStaff = () => {
   return (dispatch) => {
    axios.get('https://dev.bill-indonesia.com/api/employee/staff-list/')
    .then( result => dispatch( SaveDataStaff(result.data) ) )
    .catch( err => console.error(err.message ))
    }
   }

export {EditStaff , DeleteStaff , GetStaff}