const initialValues = {
    data : []
}

const List = (data) => {
    let Data = []

            data.forEach( item => {
                Data.push({
                    id : item.staff_id ,
                    username : item.staff_username ,
                    name : item.staff_name ,
                    password : 'asas'  ,
                    email : item.staff_email ,
                    phone : '0999212 ',
                    level : item.staff_level.staff_level_id ,
                })
            })

            return Data
}


const Reducer = ( state = initialValues , action ) => {

    switch(action.type){
        case "SAVE STAFF" :
            return {
                data : List(action.payload.data)
            }
            
        default :
            return state 
    }
}

export default Reducer