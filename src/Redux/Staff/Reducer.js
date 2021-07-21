const initialValues = {
    id : '' ,
    username : '' ,
    name : '' ,
    password : '' ,
    email : '' ,
    phone : '' ,
    level : '' 
}

const Reducer = (state = initialValues , action) => {
    switch(action.type){
        case "EDIT STAFF" :
            const data = action.payload
            
            return {
                id : data.id ,
                username : data.username ,
                name : data.name ,
                password : data.password ,
                email : data.email ,
                phone : data.phone ,
                level : data.level ,
                
            }

        default : 
            return state 
    }
}

export default Reducer