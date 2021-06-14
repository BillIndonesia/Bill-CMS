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

export {EditStaff , DeleteStaff}