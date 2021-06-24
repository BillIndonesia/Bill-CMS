import React , { useState} from 'react'
import { Main , Login} from '../index'
function Index() {
    // const history = useHistory()
    // useEffect( () => {
    //     let data = localStorage.getItem('users')
    //     if(data !== "admin")  history.replace('/login')
    // } , [])
    const [ data , setData ] = useState(false)
    const changeData = () => {
        setData(!data)
    }

    const hasLogin = localStorage.getItem('users')

  return  ( hasLogin === "verif" ||  hasLogin === "staff" ? 
  <Main change={changeData} /> : <Login change={changeData} /> )
    
}


export default Index
