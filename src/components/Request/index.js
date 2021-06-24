import React , {useState} from 'react'
import {DataGrid} from '@material-ui/data-grid'
import './request.css'
const columns = [
    {field : 'id' , headerName : 'ID' , flex : 1 } ,
    {field : 'name' , headerName : 'Name' , flex : 1 } ,
    {field : 'email' , headerName : 'Email' , flex : 1 } ,
    {field : 'request' , headerName : 'Request' , flex : 1 } ,
    {field : 'status' , headerName : 'Status' , flex : 1 } ,

]


const rows = [
    {id : 1 , name : 'sasa' , email : 'admiggn@gmail.com' , request : 'Voucher' , status : 'verified' } ,
    {id : 2 , name : 'sasasasa' , email : 'adminaa@gmail.com' , request : 'Voucher' , status : 'verified' } ,
    {id : 3 , name : 'sasasfgfv' , email : 'admindas@gmail.com' , request : 'Voucher' , status : 'Not verified'  } ,
    {id : 4 , name : 'sasatefda' , email : 'admasin@gmail.com' , request : 'Voucher', status : 'verified'  } ,
   
    
]

function Index() {
    
    const [sizePage , setSizePage] = useState(5)
    const [selectionModel, setSelectionModel] = React.useState([]);
    
      const sizeChange = (params) => setSizePage(params.pageSize)

    return (
        <div>
           
            <h2 className={'request-title'}>Data Request</h2>
            
            <div className={'request-body'} style={{}}>
                
                    <DataGrid 
                        pageSize={sizePage} 
                        pagination
                        rowsPerPageOptions={[5 , 10 ,25]} 
                        rows={rows}
                        columns={columns}
                        onSelectionModelChange={item => {
                            setSelectionModel(item.selectionModel)
                        }}
                        selectionModel={selectionModel}
                        checkboxSelection
                        onPageSizeChange={sizeChange}
                        
                    /> 
                
            </div>
       
           

            
        </div>
    )
}

export default Index
