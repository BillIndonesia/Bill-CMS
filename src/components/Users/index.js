import React , {useState , useEffect} from 'react'
import {DataGrid} from '@material-ui/data-grid'
import {Button , Menu , MenuItem , ListItemIcon , Typography} from '@material-ui/core'
import {Person ,Delete , Check , List } from '@material-ui/icons'
import PopUpAdd from './Add/UserAddDialog'
import PopUpDelete from './Delete/DeleteUserDialog'
import PopUpVerification from './Verifikasi'
import {useSelector , useDispatch} from 'react-redux'
import {getUser} from '../../Redux/Users/Action'
import './users.css'

const columns = [
    {field : 'id' , headerName : 'ID' , flex : 1 } ,
    {field : 'name' , headerName : 'Name' , flex : 1 } ,
    {field : 'email' , headerName : 'Email' , flex : 1 } ,
    {field : 'tempatlahir' , headerName : 'Tempat Lahir' , flex : 1 } ,
    {field : 'tangalahir' , headerName : 'TanggalLahir' , flex : 1 } ,
    {field : 'level' , headerName : 'Level' , flex : 1 } ,
    {field : 'status' , headerName : 'Status' , flex : 1 } ,
    {field : 'balance' , headerName : 'Balance' , flex : 1 , type : 'number' } ,
]

function Index() {
     
    const [open , setOpen ] = useState(false)
    const [openDelete , setOpenDelete ] = useState(false)
    const [openVerification , setVerification] = useState(false)
    const [ anchorEl , setAnchor ] = useState(null)
    const [selectionModel, setSelectionModel] = React.useState([]);

    const Data = useSelector( state => state.User )
    const dispatch = useDispatch()

      const handleMenu = (event) => setAnchor(event.currentTarget)
      

      const handleClose = () =>  setOpen(false)
      

      const handleOpen = () => setOpen(true)
      

      const handleVerif = () => setVerification(true)

      const handleOpenDelete = () => setOpenDelete(true)
      
  
      const handleCloseVerif = () => setVerification(false)

      const handleLogout = () =>  setAnchor(null)
      
      const handleCloseDelete = () =>  setOpenDelete(false)
    

        
    useEffect( () => {
        dispatch( getUser() )
    } , [])
    return (
        <div>
            {open && <PopUpAdd open={open} handleClose={handleClose} /> }
            {openDelete && <PopUpDelete open={openDelete} handleClose={handleCloseDelete} data={selectionModel} /> }
            {openVerification && <PopUpVerification show={openVerification} handleClose={handleCloseVerif} data={selectionModel[0]}/> }
            <h2 className={'usertitle'}>Data Users</h2>
            <div className={'user-action'}>

                <div>
                    <Button
                        variant="contained"
                        style={{marginLeft : 10}}
                        aria-controls="admin-menu" 
                        aria-haspopup="true"
                        onClick={handleMenu}
                        endIcon={<List />}
                    >
                    
                        Action  
                    </Button>

                    <Menu
                        id="admin-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleLogout}
                    >

                    <MenuItem onClick={() => {
                        handleOpen()
                        handleLogout()
                    }}>
                        <ListItemIcon>
                            <Person fontSize="small" />
                        </ListItemIcon>
                        <Typography variant="inherit">  
                            Add User
                        </Typography>
                    </MenuItem>
                    
                    {selectionModel.length > 0 ? 
                    <MenuItem onClick={() => {
                        handleOpenDelete()
                    }}>
                        <ListItemIcon>
                            <Delete fontSize="small" />
                        </ListItemIcon>
                        <Typography variant="inherit">  
                            Delete
                        </Typography>
                    </MenuItem> : null 
                    }

                    {selectionModel.length === 1 ? 
                    <MenuItem onClick={() => {
                        handleLogout()
                        handleVerif()
                    }}>
                        <ListItemIcon>
                            <Check fontSize="small" />
                        </ListItemIcon>
                        <Typography variant="inherit">  
                            Verify
                        </Typography>
                    </MenuItem> : null 
                        }
    
                    </Menu>
                </div>
            </div>
            <div style={{height : 400 , marginTop : 20}}>
                
                    <DataGrid 
                        pageSize={10} 
                        rowsPerPageOptions={[5 , 10 ,25]} 
                        rows={Data.data}
                        rowCount={1000}
                        columns={columns}
                        onSelectionModelChange={item => {
                            setSelectionModel(item.selectionModel)
                        }}
                        loading={Data.loading}
                        paginationMode="server"
                        selectionModel={selectionModel}
                        onPageChange={() => console.log('ok')}
                        
                        
                    /> 
                
            </div>
        </div>
    )
}

export default Index
