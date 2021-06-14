import React ,{useState} from 'react'
import {DataGrid} from '@material-ui/data-grid'
import './cashout.css'
const columns = [
  { field: 'id', headerName: 'ID', flex : 1 },
  { field: 'date' , headerName : 'Date' , flex : 1 , type : 'date' } ,
  { field: 'type', headerName: 'Type', flex : 1 },
  { field: 'ammount', headerName: 'Cashout Amount', flex : 1 , type : 'number' },
  { field: 'create', headerName: 'Create By', flex : 1  },
  
  
];

const row = [
  { id: 1, date : '12/06/2017' , type : 'user', ammount : 50000 , create : 'John1' },
  { id: 2, date : '02/08/2017' , type : 'user', ammount : 26000 , create : 'John12' },
  { id: 3, date : '22/01/2017' , type : 'user', ammount : 100000 , create : 'John13' },
  { id: 4, date : '29/09/2017' , type : 'user', ammount : 50200 , create : 'John11' },
]

function Index() {
  const [sizePage , setSizePage] = useState(5)
 
    return (
        <div style={{ height : 600}}>
            <h2 className="cashout-title">Cashout</h2>
            <DataGrid  
              rows={row} 
              columns={columns}
              rowsPerPageOptions={[5 , 15 ,25]} 
              checkboxSelection
              pageSize={sizePage}
              onPageSizeChange={params => setSizePage(params.pageSize)}
            />
        </div>
    )
}

export default Index
