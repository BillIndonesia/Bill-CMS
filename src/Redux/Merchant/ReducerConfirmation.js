const initialValue = {
    success : false ,
    loading : false ,
    failure : false 
}

const Reducer = (state = initialValue , action) => {
    switch(action.type){
        case "MERCHANT_SUCCESS" :
            return { 
                   success : true          
            }
            
        case "LOADING_MERCHANT" :
            return {
                ...state ,
                loading : true
            }
        
        case "MERCHANT_FAILURE" :
            return {
                ...state ,
                failure : true 
            }
            
        case "RESET_MERCHANT" :
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