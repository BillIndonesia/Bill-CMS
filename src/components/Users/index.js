import React , {useState} from 'react'
import {DataGrid} from '@material-ui/data-grid'
import {Button , Menu , MenuItem , ListItemIcon , Typography} from '@material-ui/core'
import {Person ,Delete , Check , List } from '@material-ui/icons'
import PopUpAdd from './Add/UserAddDialog'
import PopUpDelete from './Delete/DeleteUserDialog'
import './users.css'

function Index() {
     
    const [open , setOpen ] = useState(false)
    const [openDelete , setOpenDelete ] = useState(false)
    const [ anchorEl , setAnchor ] = useState(null)
    const [sizePage , setSizePage] = useState(5)
    const [selectionModel, setSelectionModel] = React.useState([]);

      const handleMenu = (event) => {
        setAnchor(event.currentTarget)
      }

      const handleClose = () => {
        setOpen(false)
      }

      const handleOpen = () => {
        setOpen(true)
      }

      

      const handleOpenDelete = () => {
        setOpenDelete(true)
      }
  
      const handleLogout = () => {
        setAnchor(null)
      }

    

      
      const handleCloseDelete = () => {
        setOpenDelete(false)
      }

      const sizeChange = (params) => {
          setSizePage(params.pageSize)
      }


      

    const columns = [
        {field : 'id' , headerName : 'ID' , flex : 1 } ,
        {field : 'name' , headerName : 'Name' , flex : 1 } ,
        {field : 'email' , headerName : 'Email' , flex : 1 } ,
        {field : 'tempatlahir' , headerName : 'Tempat Lahir' , flex : 1 } ,
        {field : 'tangalahir' , headerName : 'TanggalLahir' , flex : 1 } ,
        {field : 'level' , headerName : 'Level' , flex : 1 } ,
        {field : 'status' , headerName : 'Status' , flex : 1 } ,
        {field : 'saldo' , headerName : 'Saldo' , flex : 1 , type : 'number' } ,
    ]


    const rows = [
        {id : 1 , name : 'sasa' , email : 'admiggn@gmail.com' , tempatlahir : 'tangerang2' , tangalahir : '22/03/2017', level : 'User' , status : 'verified' , saldo : 90000 } ,
        {id : 2 , name : 'sasasasa' , email : 'adminaa@gmail.com' , tempatlahir : 'tangerang1' , tangalahir : '21/05/2017' , level : 'User' , status : 'verified' , saldo : 23000 } ,
        {id : 3 , name : 'sasasfgfv' , email : 'admindas@gmail.com' , tempatlahir : 'tangerangg' , tangalahir : '22/03/2019' , level : 'User' , status : 'Not verified' , saldo : 90200 } ,
        {id : 4 , name : 'sasatefda' , email : 'admasin@gmail.com' , tempatlahir : 'tangerangm' , tangalahir : '20/03/2017', level : 'User' , status : 'verified' , saldo : 91000 } ,
        { id: 7, username: 'Mesaslisandre', name: 'Denish', email: 'admin@gmail.com' ,  tempatlahir : 'tang222erangg' , tangalahir : '22/03/2011' ,  level : '1' , status : 'verified' , saldo : 96000},
        { id: 8, username: 'Targaryen', name: 'Daenerys', email: 'admin@gmail.com' ,  tempatlahir : 'tange11rangg' , tangalahir : '22/08/2017' , level : '1' , status : 'Not verified' , saldo : 95000},
        { id: 9, username: 'Maaaelisandre', name: 'Denish', email: 'admin@gmail.com' ,  tempatlahir : 'tangessrangg' , tangalahir : '22/03/2012' , level : '1' , status : 'verified' , saldo : 90020},
        { id: 10, username: 'Meliaaaasandre', name: 'Denish', email: 'admin@gmail.com' , tempatlahir : 'taaasngerangg' , tangalahir : '22/01/2017' , level : '1' , status : 'verified' ,  saldo : 92000},
      
        
    ]

    return (
        <div>
            <PopUpAdd open={open} handleClose={handleClose} />
            <PopUpDelete open={openDelete} handleClose={handleCloseDelete} data={selectionModel} />
            
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
                            Add Merchant
                        </Typography>
                    </MenuItem>

                    <MenuItem onClick={() => {
                        handleOpenDelete()
                    }}>
                        <ListItemIcon>
                            <Delete fontSize="small" />
                        </ListItemIcon>
                        <Typography variant="inherit">  
                            Delete
                        </Typography>
                    </MenuItem>

                    <MenuItem>
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
            <div style={{height : 400 , marginTop : 20}}>
                
                    <DataGrid 
                        pageSize={sizePage} 
                        pagination
                        rowsPerPageOptions={[5 , 10 ,25]} 
                        rows={rows}
                        columns={columns}
                        onSelectionModelChange={item => {
                            setSelectionModel(item.selectionModel)
                        }}
                        selectionModel={selectionModel}
                        checkboxSelection
                        onPageSizeChange={sizeChange}
                        
                    /> 
                
            </div>
            <h3>{selectionModel.length}</h3>
           

            
        </div>
    )
}

export default Index
