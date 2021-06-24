import React ,{useState} from 'react'
import {DataGrid} from '@material-ui/data-grid'
import PopUpCashout from './GenerateCashout' 


const columns = [
  { field: 'id', headerName: 'ID', flex : 1 },
  { field: 'name', headerName: 'Name', flex : 1 },
  { field: 'level', headerName: 'Level', flex : 1 },
  { field: 'date' , headerName : 'Date' , flex : 1 , type : 'date' } ,
  { field: 'ammount', headerName: 'Cashout Amount', flex : 1 , type : 'number' },
  
  
];

const row = [
  { id: 1, name : 'Vikral1' , level : '1' , date : '12/06/2017' ,  ammount : 50000 },
  { id: 2, name : 'Vikral4' , level : '2' , date : '02/08/2017' ,  ammount : 26000 },
  { id: 3, name : 'Vikral2' , level : '3' , date : '22/01/2017' ,  ammount : 100000 },
  { id: 4, name : 'Vikral3' , level : '1' , date : '29/09/2017' ,  ammount : 50200 },
]

function Index() {
  const [show , setShow] = useState(false)
  const [sizePage , setSizePage] = useState(5)

  const handleOpen = () => setShow(true)
  const handleClose = () => setShow(false)

    return (
        <div style={{ height : 600}}>
            <PopUpCashout show={show} handleClose={handleClose} />
            <h2 className="cashout-title">Cashout</h2>
            <DataGrid  
              rows={row} 
              columns={columns}
              rowsPerPageOptions={[5 , 15 ,25]} 
              pageSize={sizePage}
              onPageSizeChange={params => setSizePage(params.pageSize)}
              onRowSelected={item => {
                handleOpen()
                
              }}
            />

           
        </div>
    )
}

export default Index
