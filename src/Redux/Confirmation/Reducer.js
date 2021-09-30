const initialValue = {
    success : false ,
    loading : false ,
    failure : false 
}

const Reducer = (state = initialValue , action) => {
    switch(action.type){
        case "REQ-SUCCESS" :
            return { 
                    ...state , 
                   success : true ,
                   loading : false          
            }
            
        case "LOADING-REQ" :
            return {
                ...state ,
                loading : true
            }
        
        case "REQ-FAILURE" :
            return {
                ...state ,
                loading : false ,
                failure : true 
            }
            
        case "RESET-REQ" :
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