const initialValue = {
    success : false ,
    loading : false ,
    failure : false 

}

const Reducer = (state = initialValue , action) => {
    switch(action.type){
        case "VOUCHER_SUCCESS" :
            return { 
                   success : true  ,
                  
            }
            
        case "LOADING_VOUCHER" :
            return {
                ...state ,
                loading : true
            }
        
        case "VOUCHER_FAILURE" :
            return {
                ...state ,
                failure : true 
            }
            
        case "RESET_VOUCHER" :
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