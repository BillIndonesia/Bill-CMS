const initialValues = {
    username : '' ,
    name : '' ,
    email : '' ,
    phone : '' ,
    level : '' ,
    status : ''
}

const Reducer = (state = initialValues , action) => {
    switch(action.type){
        case "EDIT MERCHANT" :
            return {
                username : action.payload.username , 
                name : action.payload.name ,
                email : action.payload.email ,
                phone : action.payload.phone ,
                level : action.payload.level ,
                status : action.payload.status ,
            }
       
            
        default : 
            return state 
            
    }
}

export default Reducer