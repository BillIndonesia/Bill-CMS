import React ,{useState , useEffect} from 'react'
import {DataGrid} from '@material-ui/data-grid'
import PopUpCashout from './GenerateCashout' 
import axios from 'axios'
import {Button} from '@material-ui/core'
import {Payment} from '@material-ui/icons'
import './cashout.css'


const columns = [
  { field: 'id', headerName: 'ID', flex : 1  , hide : true },
  { field: 'date', headerName: 'Date', flex : 1 , type : 'date'},
  { field: 'destination', headerName: 'Destination', flex : 1 },
  { field: 'pic' , headerName : 'PIC' , flex : 1  } ,
  { field: 'ammount', headerName: 'Nominal', flex : 1 , type : 'number' },
  
  
];

const row = [
  { id: 1, date : '12/09/2021' , destination : 'Vikral 1', pic : 'Yola3' , ammount : 50000 },
  { id: 2, date : '14/01/2021',  destination : 'Vikral 2', pic : 'Yola2' ,  ammount : 26000 },
  { id: 3, date : '09/09/2011',  destination : 'Vikral 5', pic : 'Yola1' , ammount : 100000 },
  { id: 4, date : '12/05/2021' ,  destination : 'Vikral 6', pic : 'Yola6' ,  ammount : 50200 },
]

function Index() {
  const [change, setChange] = useState(false)
  const [show , setShow] = useState(false)
  const [showDialog , setShowDialog] = useState(false)
  const [sizePage , setSizePage] = useState(5)
  const handleClose = () => setShow(false)
  
  const handleProces = () => setChange(!change)
  const handleDialog = () => setShowDialog(!showDialog)

  useEffect( () => {
    axios.get('https://jsonplaceholder.typicode.com/users/1').then(result => console.log(result))
  } , [change])
 
    return (
        <div style={{ height : 600}}>
           

           {show &&  
            <PopUpCashout 
                show={show} 
                handleDialog={handleDialog} 
                handleClose={handleClose} 
                handleProcess={handleProces}/> 
           }
            
            <h2 className="cashout-title">Cashout History</h2>
            
            <Button 
              style={{marginBottom : 15}} 
              title="Create Cashout" 
              color="primary" 
              onClick={() => setShow(true)} 
              variant="contained"
              startIcon={<Payment />}
              >
              Creare Cashout
            </Button>

            <DataGrid  
              rows={row} 
              columns={columns}
              rowsPerPageOptions={[5 , 15 ,25]} 
              pageSize={sizePage}
              onPageSizeChange={params => setSizePage(params.pageSize)}
             
            />
        </div>
    )
}

export default Index
