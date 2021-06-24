import React , {useState , useEffect} from 'react'
import { DataGrid } from '@material-ui/data-grid';
import { Button } from 'react-bootstrap';
import { Payment } from '@material-ui/icons';
import PopUpVerifikasi from './Verifikasi'
import axios from 'axios';
const columns = [
    { field: 'id', headerName: 'Code', flex : 1 , hide : true },
    { field: 'date', headerName: 'Create Date', flex : 1 , type : 'date'},
    { field: 'by', headerName: 'CreateBy', flex : 1 },
    { field: 'count', headerName: 'Count', flex : 1 , type : 'number'},
    { field: 'nominal', headerName: 'Nominal', flex : 1  , type : 'number'},
]

const rows = [
  {id : 'adks11ki' , by : 'agus3' , date : '12/02/2019' , count : 10 , nominal : 90000} ,
  {id : 'a88s11ki' , by : 'agus2' , date : '22/04/2019' , count : 10 , nominal : 90000} ,
  {id : 'adjj11ki' , by : 'agus1' , date : '11/01/2019' , count : 10 , nominal : 90000} ,
  {id : 'adis91ki' , by : 'agus4' , date : '09/08/2019' , count : 10 , nominal : 90000} ,
  {id : 'adksddki' , by : 'agus6' , date : '02/07/2019' , count : 10 , nominal : 90000} ,
  {id : 'adks00ki' , by : 'agus7' , date : '24/05/2019' , count : 10 , nominal : 90000} ,
  {id : 'a2ls11ki' , by : 'agus8' , date : '21/02/2019' , count : 10 , nominal : 90000} ,
]  

function Index() {
  const [change , setChange] = useState(false)
  const [show , setShow] = useState(false)
  const [pageSize , setPageSize] = useState(5)  
  const [selectionModel, setSelectionModel] = useState([]);  
  const sizeChange = (params) => setPageSize(params.pageSize)

  const handleOpen = () => setShow(true)
  const handleClose = () => setShow(false)
  const handleProces = () => setChange(!change)

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users/1').then(result => console.log(result))
  } , [change])
    return (
        <div className={'voucher'}>
            <PopUpVerifikasi show={show} handleClose={handleClose} data={selectionModel} handleProces={handleProces} />
            <div>
                <h2 className="voucher-title">Voucher Request</h2>
                
                <div className={'voucher-action'}>
                    <div>
                       { selectionModel.length > 0  ? <Button style={{marginLeft : 8 , backgroundColor : 'rgb(85, 85, 207)'}} size="sm" onClick={handleOpen}> 
                            <Payment /> Verification
                        </Button> : null 
                        }
                    </div>
                </div>
            </div>


            <div className={'voucher-data'}>
                <DataGrid 
                    rows={rows}
                    columns={columns}
                    pageSize={pageSize}
                    checkboxSelection
                    rowsPerPageOptions={[5 , 10 , 25]}
                    onPageSizeChange={sizeChange}
                    onSelectionModelChange={(newSelection) => {
                        setSelectionModel(newSelection.selectionModel)
                     }}
                      selectionModel={selectionModel}
                />
            </div>
            {selectionModel.map(item => <h2>item</h2>)}
        </div>
    )
}

export default Index
