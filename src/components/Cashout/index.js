import React ,{useState , useEffect} from 'react'
import {useDispatch , useSelector} from 'react-redux'
import {DataGrid} from '@material-ui/data-grid'
import PopUpCashout from './GenerateCashout' 
import {Button} from '@material-ui/core'
import {Payment} from '@material-ui/icons'
import {getHistoryCashout , getNextHistori} from '../../Redux/Cashout/Action'
import './cashout.css'


const columns = [
  { field: 'id', headerName: 'ID', flex : 1  , hide : true },
  { field: 'date', headerName: 'Date', flex : 1 , type : 'date'},
  { field: 'destination', headerName: 'Destination', flex : 1 },
  { field: 'pic' , headerName : 'PIC' , flex : 1  } ,
  { field: 'ammount', headerName: 'Nominal', flex : 1 , type : 'number' },
  
  
];

// const row = [
//   { id: 1, date : new Date("2021-07-08T20:51:59.976795+07:00").getFullYear() , destination : 'Vikral 1', pic : 'Yola3' , ammount : 50000 },
//   { id: 2, date : '14/01/2021',  destination : 'Vikral 2', pic : 'Yola2' ,  ammount : 26000 },
//   { id: 3, date : '09/09/2011',  destination : 'Vikral 5', pic : 'Yola1' , ammount : 100000 },
//   { id: 4, date : '12/05/2021' ,  destination : 'Vikral 6', pic : 'Yola6' ,  ammount : 50200 },
// ]

function Index() {
  const [change, setChange] = useState(false)
  const [show , setShow] = useState(false)
  const [showDialog , setShowDialog] = useState(false)
  const handleClose = () => setShow(false)
  
  const handleProces = () => setChange(!change)
  const handleDialog = () => setShowDialog(!showDialog)

  const dispatch = useDispatch() 
  const Data = useSelector(state => state.CashoutH)
  
  useEffect( () => {
    dispatch( getHistoryCashout())  

  } ,[])

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
              Create Cashout
            </Button>

            
              <DataGrid  
                rows={Data.data} 
                columns={columns}
                rowsPerPageOptions={[5 , 15 ,25]} 
                pageSize={10}
                onPageChange={ params => dispatch(getNextHistori(params.page + 1))}
                rowCount={1000}
                loading={Data.loading}
                paginationMode="server"
              /> 

            

        </div>
    )
}

export default Index
