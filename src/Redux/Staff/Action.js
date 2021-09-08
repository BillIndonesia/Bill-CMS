import axios from "axios"

//global confirmation 

const Loading = () => { return { type: "LOADING-REQ" } }

const Success = () => { return { type: "REQ-SUCCESS" } }

const Failure = () => { return { type: "REQ-FAILURE" } }


//edit staff

const EditStaff = (data) => {
    return {
        type: "EDIT STAFF",
        payload: {
            id: data.id,
            name: data.name,
            password: data.password,
            username: data.username,
            phone: data.phone,
            email: data.email,
            level: data.level,

        }
    }
}

const DeleteStaff = (data) => {
    console.log(data)
    return {
        type: 'iseng'
    }
}

//get list staff data

const SaveDataStaff = (data) => {

    return {
        type: "SAVE STAFF",
        payload: {
            data: data
        }
    }
}

const GetStaff = () => {
    return (dispatch) => {
        axios.get('https://bill-indonesia.com/api/employee/staff-list/')
            .then(result => dispatch(SaveDataStaff(result.data)))
            .catch(err => console.error(err.message))
    }
}


//create staff 

const ReqStaff = (data) => {
    return (dispatch) => {
        dispatch(Loading())

        axios.post('https://bill-indonesia.com/api/employee/register/', data)
            .then(() => {
                dispatch(Success())

                setTimeout(() => {
                    dispatch({ type: "RESET-REQ" })
                    dispatch(GetStaff())
                }, 3000)
            })

        .catch(() => dispatch(Failure()))
    }
}

export { EditStaff, DeleteStaff, GetStaff, ReqStaff }