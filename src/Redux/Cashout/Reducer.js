const initialValue = {
    id : '' ,
    name : '' ,
    nominal : ''
}

const Reducer = (state = initialValue , action) => {
    switch(action.type){
        case "CASHOUT" :
            return {
                id : action.payload.id ,
                name : action.payload.name ,
                nominal : action.payload.nominal
            }

            default : 
            return state 
    }
}

export default Reducer