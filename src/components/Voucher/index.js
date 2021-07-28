import React , {useState , useEffect} from 'react'
import {Button } from 'react-bootstrap'
import Modal from './GenerateVoucher'
import { DataGrid } from '@material-ui/data-grid';
import { Menu , MenuItem , ListItemIcon , Typography } from '@material-ui/core';
import {Person , Delete , Check , Payment} from '@material-ui/icons'
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
            {show && <Modal show={show} handleClose={handleClose}/> }
            
            <div>
                <h2 className="voucher-title">Voucher</h2>
                
                <div className={'voucher-action'}>
                    <div>
                        <Button style={{marginLeft : 8 , backgroundColor : 'rgb(85, 85, 207)'}} size="sm" onClick={handleShow}> <Payment /> Generate Voucher</Button>
                        <Menu
                            id="admin-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}    
                        >

                    <MenuItem >
                        <ListItemIcon>
                            <Person fontSize="small" />
                        </ListItemIcon>
                        <Typography variant="inherit">  
                            Add Merchant
                        </Typography>
                    </MenuItem>

                      <MenuItem>
                        <ListItemIcon>
                            <Delete fontSize="small" />
                        </ListItemIcon>
                        <Typography variant="inherit">  
                            Delete
                        </Typography>
                    </MenuItem>

                    <MenuItem >
                        <ListItemIcon>
                            <Check fontSize="small" />
                        </ListItemIcon>
                        <Typography variant="inherit">  
                            Verify
                        </Typography>
                    </MenuItem>
                    </Menu>
                    </div>
                </div>
            </div>


            <div className={'voucher-data'}>
                
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
    )
}

export default Index
