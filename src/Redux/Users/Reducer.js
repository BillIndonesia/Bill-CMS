const initialValue = {
    data : []
}

const Reducer = (state = initialValue , action) => {
    switch(action.type){
        case "DELETE USERS" : 
            

        return {
            data : action.payload.data
        }

        default : 
            return state
    }
}

export default Reducer