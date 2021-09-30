import React ,{useState , useEffect , useRef} from 'react'
import {useDispatch , useSelector} from 'react-redux'
import {DataGrid} from '@material-ui/data-grid'
import PopUpCashout from './GenerateCashout' 
import ModalError from '../../utilities/ErrorPopUp'
import {Button} from '@material-ui/core'
import {InputGroup , FormControl} from 'react-bootstrap'
import {Payment ,Search} from '@material-ui/icons'
import {getHistoryCashout , getNextHistori , SearchData} from '../../Redux/Cashout/Action'
import './cashout.css'


const columns = [
  { field: 'id', headerName: 'ID', flex : 1  , hide : true },
  { field: 'date', headerName: 'Date', flex : 1 , type : 'date'},
  { field: 'destination', headerName: 'Destination', flex : 1 },
  { field: 'pic' , headerName : 'PIC' , flex : 1  } ,
  { field: 'ammount', headerName: 'Nominal', flex : 1 , type : 'number' },
];

function Index() {

  const input = useRef(null)
  const dispatch = useDispatch() 

  const Data = useSelector( state => state.CashoutH)
  const Err = useSelector( state => state.Confirmation.failure)
  
  const [change, setChange] = useState(false)
  const [show , setShow] = useState(false)
  const [showDialog , setShowDialog] = useState(false)

  const handleClose = () => setShow(false)
  const handleProces = () => setChange(!change)
  const handleDialog = () => setShowDialog(!showDialog)


  
  useEffect( () => {
    dispatch( getHistoryCashout())  

  } ,[])

    return (
        <div className="cashout">
        
            <PopUpCashout 
                show={show} 
                handleDialog={handleDialog} 
                handleClose={handleClose} 
                handleProcess={handleProces}/> 

            <ModalError 
            />

            
            <h2 className="cashout-title">Cashout History</h2>
            
            <div className="cashout-data">
              <div className="data">
                <div className="main-search">
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

                  <div className="search">
                    <InputGroup>
                      <FormControl
                        placeholder="search"
                        ref={input}
                        
                      />
                    
                      <Button
                        variant="contained"
                        onClick={() => dispatch(SearchData(input.current.value))}
                        endIcon={<Search />}
                      />
                
                    </InputGroup>
                  </div>
                </div>

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
            </div>    
        </div>
    )
}

export default React.memo( Index )
