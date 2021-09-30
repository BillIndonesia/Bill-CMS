import React, { useState, useEffect} from 'react'
import { LinearProgress , Button , Menu , MenuItem , ListItemIcon , Typography , TextField} from '@material-ui/core'
import { DataGrid } from '@material-ui/data-grid'
import { useDispatch, useSelector } from 'react-redux'
import {getTransactionHistory , nextHistory , filterTransaction} from '../../Redux/Transaction/action'
import {FilterListOutlined , Payment , AccountBalanceWalletOutlined } from '@material-ui/icons'
import './transaction.css'



const columns = [
  { field: 'id', headerName: 'ID', flex: 1 },
  { field: 'date', headerName: 'Date', flex: 1 },
  { field: 'type', headerName: 'Type', flex: 1 },
  { field: 'name', headerName: 'Customer Name', flex: 1 },
  { field: 'merchant_voucher', headerName: 'Merchant \ Voucher', flex: 1 },
  { field: 'amount', headerName: 'Amount', flex: 1 , type : 'number'},

];


function Index() {
  const dispatch = useDispatch()
  const Data = useSelector(state => state.Transaction.data)
  const [anchor , setAnchor] = useState(null)

  const [sizePage, setSizePage] = useState(5)




  useEffect(() => {
    dispatch(getTransactionHistory())
  }, [])

  return (
    <div className={'transaction'}>

    <h2 className={'transaction-title'}>Data Transaction</h2>

      <div className={'transaction-data'}>

        <div className='transaction-menu'>
          <Button 
            variant='contained' 
            style={{marginBottom : 10}} 
            endIcon={<FilterListOutlined />}
            onClick={ event => setAnchor(event.currentTarget)}
            >
            
            Filter
          </Button>

          <Menu
            anchorEl={anchor}
            open={Boolean(anchor)}
            onClose={() => setAnchor(null)}
            keepMounted 
          >
          
          <MenuItem onClick={() => dispatch(filterTransaction(2))}>
            <ListItemIcon>
              <Payment />
            </ListItemIcon>
            <Typography variant="inherit">Payment</Typography>
          </MenuItem>

          <MenuItem onClick={() => dispatch(filterTransaction(1))}>
            <ListItemIcon>
              <Payment />
            </ListItemIcon>
            <Typography variant="inherit">TopUp</Typography>
          </MenuItem>

          <MenuItem>
            <ListItemIcon>
              <AccountBalanceWalletOutlined />
            </ListItemIcon>
            <TextField placeholder="Ammount" onKeyPress={(e) => console.log(e.key)} />
          </MenuItem>
            
          </Menu>


        </div>

        {Data.length === 0 ?
          <LinearProgress /> :
          <div className="data">
            
           
          <DataGrid
            rows={Data}
            columns={columns}
            pageSize={sizePage}
            onPageSizeChange={(params) => setSizePage(params.pageSize)}
            rowsPerPageOptions={[5, 7, 10, 25]}
            onPageChange={ params => dispatch(nextHistory(params.page + 1))}
            rowCount={1000}
            loading={Data.loading}
            paginationMode="server"
          />
          </div>
        }
      </div>
    </div>
  )



}

export default React.memo( Index )
