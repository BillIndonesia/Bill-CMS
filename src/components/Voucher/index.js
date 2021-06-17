import React , {useState} from 'react'
import {Button } from 'react-bootstrap'
import Modal from './GenerateVoucher'
import { DataGrid } from '@material-ui/data-grid';
import { Menu , MenuItem , ListItemIcon , Typography} from '@material-ui/core';
import {Person , Delete , Check , Payment} from '@material-ui/icons'
import './voucher.css'
const columns = [
    { field: 'id', headerName: 'Voucher Code', flex : 1 },
    { field: 'date', headerName: 'Create Date', flex : 1 , type : 'date'},
    { field: 'nominal', headerName: 'Nominal', flex : 1  , type : 'number'},
]

const rows = [
  {id : 'adks11ki' , date : '12/02/2019' , nominal : 90000} ,
  {id : 'a88s11ki' , date : '22/04/2019' , nominal : 90000} ,
  {id : 'adjj11ki' , date : '11/01/2019' , nominal : 90000} ,
  {id : 'adis91ki' , date : '09/08/2019' , nominal : 90000} ,
  {id : 'adksddki' , date : '02/07/2019' , nominal : 90000} ,
  {id : 'adks00ki' , date : '24/05/2019' , nominal : 90000} ,
  {id : 'a2ls11ki' , date : '21/02/2019' , nominal : 90000} ,
]  

function Index() {
  const [pageSize , setPageSize] = useState(5)  
  const [show, setShow] = useState(false);
  const [ anchorEl , setAnchor ] = useState(null)


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const sizeChange = (params) => setPageSize(params.pageSize)

    return (
        <div className={'voucher'}>
            <Modal show={show} handleClose={handleClose}/>
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

                      <MenuItem  >
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
                    rows={rows}
                    columns={columns}
                    pageSize={pageSize}
                    checkboxSelection
                    rowsPerPageOptions={[5 , 10 , 25]}
                    onPageSizeChange={sizeChange}
                />
            </div>
        </div>
    )
}

export default Index
