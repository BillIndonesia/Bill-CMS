import React , {useState} from 'react'
import { Button , Menu , MenuItem , ListItemIcon , Typography} from '@material-ui/core'
import {DataGrid } from '@material-ui/data-grid'
import { List , Check} from '@material-ui/icons'
import PopUpVerification from './Verifikasi'


const columns = [
  { field: 'id', headerName: 'ID', flex : 1 , hide : true },
  { field: 'username', headerName: 'Username', flex : 1 },
  { field: 'name', headerName: 'Name', flex : 1  },
  { field: 'password' , headerName : 'Password' , flex : 1 , hide : true} ,
  { field: 'email' , headerName: 'Email', flex : 1  },
  { field: 'phone' , headerName: 'Phone', flex : 1  },
  { field: 'level' , headerName: 'Level', flex : 1  },
  { field: 'status' , headerName: 'Status', flex : 1  },
  { field: 'saldo' , headerName: 'Saldo' , flex : 1 , type : 'number' }
  
];

const rows = [
  { id: 1, username: 'Snow', name: 'Jon', password : '112' , email: 'admin@gmail.com' , phone : '2129131' , level : '1' , status : 'Verified' , saldo : 10000},
  { id: 2, username: 'Lannister', name: 'Cersei',  password : '112' , email: 'admin@gmail.com' , phone : '2129131' , level : '1' , status : 'Verified' , saldo : 91000},
  { id: 3, username: 'Lannister', name: 'Jaime', password : '112' , email: 'admin@gmail.com', phone : '2129131' , level : '1' , status : 'Verified' , saldo : 90200 },
  { id: 4, username: 'Stark', name: 'Arya', password : '112' ,  email: 'admin@gmail.com' , phone : '2129131' , level : '1' , status : 'Not Verified' , saldo : 50000},
  { id: 5, username: 'Targaryen', name: 'Daenerys', password : '112' , email: 'admin@gmail.com' , phone : '2129131' , level : '1' , status : 'Not Verified' , saldo : 92000},
  { id: 6, username: 'Melisandre', name: 'Denish', password : '112' , email: 'admin@gmail.com' , phone : '2129131' ,  level : '1' , status : 'Verified' , saldo : 22000},
  { id: 7, username: 'Mesaslisandre', name: 'Denish', password : '112' , email: 'admin@gmail.com' , phone : '2129131' ,  level : '1' , status : 'Verified' , saldo : 60000},
  { id: 8, username: 'Targaryen', name: 'Daenerys', password : '112' , email: 'admin@gmail.com' , phone : '2129131' , level : '1' , status : 'Not Verified' , saldo : 90000},
  { id: 9, username: 'Maaaelisandre', name: 'Denish', password : '112' , email: 'admin@gmail.com' , phone : '2129131' ,  level : '1' , status : 'Verified', saldo : 90500 },
  { id: 10, username: 'Meliaaaasandre', name: 'Denish', password : '112' , email: 'admin@gmail.com' , phone : '2129131' ,  level : '1' , status : 'Verified' , saldo : 20000},

  
];

function Index() {
    const [openVerification , setVerification ] = useState(false)
    const [ anchorEl , setAnchor ] = useState(null)
    const [selectionModel, setSelectionModel] = React.useState([]);
    const [sizePage , setSizePage] = useState(5)
    
    const handleVerif = () => setVerification(true)

    const handleMenu = (event) => setAnchor(event.currentTarget)
    
    const handleLogout = () => setAnchor(null)

    const handleCloseVerif = () => setVerification(false)

    const sizeChange = (params) => setSizePage(params.pageSize)

    return(
      <div className={'merchant'}>
        
        <div>
          <h2 className={'merchant-title'}>Merchant Request</h2>
          <div className={'merchant-action'}>
          { openVerification && <PopUpVerification show={openVerification} handleClose={handleCloseVerif} handleLogout={handleLogout} data={selectionModel[0]}/> }

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

                {selectionModel.length === 1 ? 
                <Menu
                    id="admin-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleLogout}
                      
                >

                    
                      <MenuItem onClick={() => {
                        handleLogout()
                        handleVerif()

                      }} >
                          <ListItemIcon>
                              <Check fontSize="small" />
                          </ListItemIcon>
                          <Typography variant="inherit">  
                              Verify
                          </Typography>
                      </MenuItem>
                    
                </Menu> : null }
              
            </div>
           
          
          </div>
        </div>

        <div className={'merchant-data'}>
          
            <DataGrid 
              rows={rows} 
              columns={columns}  
              checkboxSelection ={true}
              onSelectionModelChange={(newSelection) => {
                setSelectionModel(newSelection.selectionModel)
             }}
              selectionModel={selectionModel}
              pageSize={sizePage} 
              onPageSizeChange={sizeChange}
              rowsPerPageOptions={[5 , 7 , 10 , 25]} 
                
               
            /> 
        </div>
      </div>
    )
   

   
}

export default Index
