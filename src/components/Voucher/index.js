import React , {useState , useEffect, useRef ,} from 'react'
import Modal from './GenerateVoucher'
import { DataGrid } from '@material-ui/data-grid';
import { Button} from '@material-ui/core'
import {InputGroup , FormControl} from 'react-bootstrap'
import {Payment , Search} from '@material-ui/icons'
import {useDispatch , useSelector} from 'react-redux'
import {GetVoucher , getNextData} from '../../Redux/Voucher/Action'
import './voucher.css'


const columns = [
    { field: 'id', headerName: 'Voucher Code', flex : 1 },
    { field: 'date', headerName: 'Create Date', flex : 1 , type : 'date'},
    { field: 'by', headerName: 'CreateBy', flex : 1 },
    { field: 'status', headerName: 'Status', flex : 1 },
    { field: 'nominal', headerName: 'Nominal', flex : 1  , type : 'number'},
]

function Index() { 
  const input = useRef(null)
  const [show, setShow] = useState(false);
  const [ anchorEl , setAnchor ] = useState(null)
  const Data = useSelector( state => state.VoucherList) 
  const dispatch = useDispatch()

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  useEffect( () => {
    dispatch(GetVoucher())

  } , [])

    return (
        <div className={'voucher'}>
            <Modal show={show} handleClose={handleClose}/> 
            
                <h2 className="voucher-title">Voucher</h2>
                    <div className="voucher-data">
                        <div className="data">
                            <div className="main-search">
                                <Button variant="contained" color="primary" onClick={handleShow}> <Payment /> 
                                    Generate Voucher
                                </Button>
                            
                                <div className="search">
                                    <InputGroup>
                                        <FormControl
                                            placeholder="search"
                                            aria-label="Recipient's username"
                                            ref={input}
                                            aria-describedby="basic-addon2"
                                        />

                                        <Button
                                            variant="contained"
                                            onClick={() => console.log('ok')}
                                            endIcon={<Search />}
                                        />
                                
                                    </InputGroup>
                                </div>
                            </div>
                            <DataGrid 
                                rows={Data.data}
                                columns={columns}
                                pageSize={10}
                                rowCount={1000}
                                rowsPerPageOptions={[5 , 10 , 25]}
                                loading={Data.loading}
                                paginationMode="server"
                                onPageChange={params => dispatch(getNextData(params.page + 1))}

                            />
                        </div>
                    </div>
                     
                     

        </div>
    )
}

export default Index
