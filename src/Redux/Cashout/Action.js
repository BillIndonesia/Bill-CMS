const Cashout = (data) => {
    return {
        type : "CASHOUT" ,
        payload : {
                id   : data.id , 
                name : data.name ,
                nominal : data.nominal
            
        }
    }
}

export {Cashout}