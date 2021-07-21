const initialValue = {
    success : false ,
    loading : false ,
    failure : false 

}

const Reducer = (state = initialValue , action) => {
    switch(action.type){
        case "CASHOUT_SUCCESS" :
            return {
                   loading : false ,
                   success : true 
            }
            
        case "LOADING_CASHOUT" :
            return {
                ...state ,
                loading : true
            }
        
        case "CASHOUT_FAILURE" :
            return {
                ...state ,
                failure : true 
            }
            
        case "RESET" :
            return{ 
                loading : false ,
                success : false ,
                failure : false 
            }

            default : 
            return state 
    }
}

export default Reducer