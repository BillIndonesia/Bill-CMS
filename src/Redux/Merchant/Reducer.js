const initialValues = {
    id : '' ,
    username : '' ,
    name : '' ,
    password : '' ,
    email : '' ,
    phone : '' ,
    level : '' ,
    status : '' ,
    saldo : ''
}

const Reducer = (state = initialValues , action) => {
    switch(action.type){
        case "EDIT MERCHANT" :
            return {
                id : action.payload.id ,
                username : action.payload.username , 
                name : action.payload.name ,
                password : action.payload.password ,
                email : action.payload.email ,
                phone : action.payload.phone ,
                level : action.payload.level ,
                status : action.payload.status ,
                saldo : action.payload.saldo
            }
       
            
        default : 
            return state 
            
    }
}

export default Reducer