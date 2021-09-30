import React , {useState , useEffect , useRef} from 'react'
import {DataGrid} from '@material-ui/data-grid'
import {Button , Menu , MenuItem , ListItemIcon , Typography , LinearProgress } from '@material-ui/core'
import {InputGroup , FormControl} from 'react-bootstrap'
import {Person ,Delete , Check , List , Search } from '@material-ui/icons'
import PopUpAdd from './Add/UserAddDialog'
import PopUpDelete from './Delete/DeleteUserDialog'
import PopUpVerification from './Verifikasi'
import ModalError from '../../utilities/ErrorPopUp'
import {useSelector , useDispatch} from 'react-redux'
import {getUser , searchData} from '../../Redux/Users/Action'
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

    const Data = useSelector( state => state.User )
    const Err = useSelector(state => state.Confirmation.failure)

    const dispatch = useDispatch()
     
    const input = useRef(null)
    const [open , setOpen ] = useState(false)
    const [openDelete , setOpenDelete ] = useState(false)
    const [openVerification , setVerification] = useState(false)
    const [ anchorEl , setAnchor ] = useState(null)
    const [selectionModel, setSelectionModel] = React.useState([]);
      
      const handleClose = () =>  setOpen(false)
      
      const handleVerif = () => setVerification(true)

      const handleOpenDelete = () => setOpenDelete(true)
      
      const handleCloseVerif = () => setVerification(false)

      const handleLogout = () =>  setAnchor(null)
      
      const handleCloseDelete = () =>  setOpenDelete(false)
    

        
    useEffect( () => {
        dispatch( getUser() )
    } , [])

    return (
        <div className="users">
            <PopUpAdd 
                open={open} 
                handleClose={handleClose} /> 
            
            <PopUpDelete 
                open={openDelete} 
                handleClose={handleCloseDelete} 
                data={selectionModel} />

            <PopUpVerification 
                show={openVerification} 
                handleClose={handleCloseVerif} 
                data={selectionModel[0]} /> 

            <ModalError 
            />

            <h2 className={'usertitle'}>Data Customers</h2>

            <div className="users-data">
                { Data.data.length === 0 ? 
                    <LinearProgress /> : 
                    <div className="data">
                        <div className="main-search">
                            <div>
                                <Button
                                    variant="contained"
                                    style={{marginLeft : 10}}
                                    aria-controls="admin-menu" 
                                    aria-haspopup="true"
                                    onClick={event =>  setAnchor(event.currentTarget)}
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
                                    setOpen(true)
                                    setAnchor(null)
                                }}>
                                    <ListItemIcon>
                                        <Person fontSize="small" />
                                    </ListItemIcon>
                                    <Typography variant="inherit">  
                                        Add User
                                    </Typography>
                                </MenuItem>
                                
                                {selectionModel.length > 0 ? 
                                <MenuItem onClick={() => handleOpenDelete() }>
                                    <ListItemIcon>
                                        <Delete fontSize="small" />
                                    </ListItemIcon>
                                    <Typography variant="inherit">  
                                        Delete
                                    </Typography>
                                </MenuItem> : null 
                                }

                                {selectionModel.length === 1 ? 
                                <MenuItem 
                                    onClick={() => {
                                        setAnchor(null)
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
                
                            <div className="search">
                                <InputGroup>
                                    <FormControl
                                        placeholder="search"
                                        ref={input}
                                    />

                                    <Button
                                        variant="contained"
                                        endIcon={<Search />} 
                                        onClick={() => dispatch(searchData())}
                                    />
                
                                </InputGroup>
                            </div>
                        </div>
                    
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
                    </div> }
            </div>
        </div>
    )
}

export default Index
