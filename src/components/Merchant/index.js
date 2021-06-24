import React , {useState} from 'react'
import { Button , Menu , MenuItem , ListItemIcon , Typography} from '@material-ui/core'
import {DataGrid } from '@material-ui/data-grid'
import {Person, Create , List , Delete } from '@material-ui/icons'
import PopUp from './Add/merchantDialog'
import  { ListGroup , Form} from 'react-bootstrap'
import PopUpUpdate from './EditOne/MerchantDialog'
import PopUpUpdateMany from './EditMany/MerchantDialog'
import PopUpDelete from './Delete/MerchantDialog'
import {useDispatch , useSelector} from 'react-redux'
import {EditMerchant} from '../../Redux/Merchant/Action'
import 'bootstrap/dist/css/bootstrap.min.css';
import './merchant.css'

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
    const dispatch = useDispatch()
    const Test = useSelector(state => state.Merchant)
    const [openAdd , setOpenAdd ] = useState(false)
    const [openUpdateOne , setOpenUpdateOne ] = useState(false)
    const [openUpdateMany , setOpenUpdateMany ] = useState(false)
    const [openDelete , setOpenDelete ] = useState(false)
    const [ dropdown , setDropdown ] = useState(false)
    const [ anchorEl , setAnchor ] = useState(null)
    const [selectionModel, setSelectionModel] = React.useState([]);
    const [sizePage , setSizePage] = useState(5)



    const [ Option , setOption ] = useState(null)

    const handleCloseAdd = () => {
      setOpenAdd(false)
    }
    
    const handleCloseUpdateOne = () => setOpenUpdateOne(false)

    const handleCloseUpdateMany = () => setOpenUpdateMany(false)
    
    const handleCloseDelete = () => setOpenDelete(false)
    
    const handleOpenAdd = () => setOpenAdd(true)
  
    const handleOpenUpdateOne = () => {
      handleLogout()
      setOpenUpdateOne(true)
    }

    const handleOpenDelete = () => setOpenDelete(true)

    const handleMenu = (event) => setAnchor(event.currentTarget)
    
    const handleLogout = () => setAnchor(null)

    const sizeChange = (params) => setSizePage(params.pageSize)

    const editMerchant = (data) => dispatch(EditMerchant(data))

    const handleOption = e => {
      const {value } = e.target 

      setOption(value)
      
    }

    return(
      <div className={'merchant'}>
        { openAdd && <PopUp open={openAdd} handleClose={handleCloseAdd} handleOpen={handleOpenAdd} />  }
        { openUpdateOne && <PopUpUpdate open={openUpdateOne} handleClose={handleCloseUpdateOne} /> }
        { openUpdateMany && <PopUpUpdateMany open={openUpdateMany} handleClose={handleCloseUpdateMany} item={Option}/> }
        { openDelete && <PopUpDelete open={openDelete} handleClose={handleCloseDelete}/> }
        
        <div>
          <h2 className={'merchant-title'}>Data Merchant</h2>
          <div className={'merchant-action'}>
        
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
                      handleLogout()
                      handleOpenAdd() 
                    }} >
                        <ListItemIcon>
                            <Person fontSize="small" />
                        </ListItemIcon>
                        <Typography variant="inherit">  
                            Add Merchant
                        </Typography>
                    </MenuItem>

                    {selectionModel.length > 0 ?
                      <MenuItem onClick={handleOpenDelete} >
                        <ListItemIcon>
                            <Delete fontSize="small" />
                        </ListItemIcon>
                        <Typography variant="inherit">  
                            Delete
                        </Typography>
                    </MenuItem> : null 
                    }
                   
                    {selectionModel.length === 0 ? null :
                      selectionModel.length > 1 ? null :
                        <MenuItem onClick={handleOpenUpdateOne} >
                          <ListItemIcon>
                              <Create fontSize="small" />
                          </ListItemIcon>
                          <Typography variant="inherit">  
                              Edit
                          </Typography>
                      </MenuItem>
                  }

                    {selectionModel.length > 1 ? 
                      <MenuItem onClick={() => setDropdown(!dropdown)} >
                          <ListItemIcon>
                              <Create fontSize="small" />
                          </ListItemIcon>
                          <Typography variant="inherit">  
                              Edit
                          </Typography>
                      </MenuItem> : null 

                  }

                  {/* { selectionModel.length === 0 || selectionModel.length < 2 ? null : <DropdownButton show={dropdown} style={{width : 210}} variant="default" onClick={() => setDropdown(!dropdown)} >
                        <Dropdown.Item onClick={() => console.log('ok3')}><Form.Check label="Action"/></Dropdown.Item>
                        <Dropdown.Item ><Form.Check onch label="Action2"/></Dropdown.Item>
                        <Dropdown.Item ><Form.Check label="Action3"/></Dropdown.Item>
                      </DropdownButton>  } */}
                    { dropdown && <ListGroup>
                     
                      <ListGroup.Item> 
                        <Form.Check onChange={handleOption} name="test" type="radio" label="Name" value="Name"/>
                      
                      </ListGroup.Item>

                      <ListGroup.Item > 
                        <Form.Check onChange={handleOption} name="test" type="radio" label="Email" value="Email" />
                          
                      </ListGroup.Item>
                      <ListGroup.Item> 
                        <Form.Check onChange={handleOption} name="test" type="radio" label="Phone" value="Phone" />
                      
                      </ListGroup.Item>

                      <ListGroup.Item> 
                        <Form.Check onChange={handleOption} name="test" type="radio" label="Saldo" value="Saldo"/>
                      
                      </ListGroup.Item>

                      
                      <ListGroup.Item >
                          <Button variant="contained" color="primary" onClick={() => {
                            setDropdown(!dropdown)
                            handleLogout()
                            setOpenUpdateMany(!openUpdateMany)
                          }}>
                          Ok
                          </Button>
                        </ListGroup.Item>
                      
                    </ListGroup> 
                    } 
                </Menu>
            
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
                onRowSelected={ item => {
                  
                  editMerchant(item.data)
                  
                }} 
               
            /> 
        </div>
          <h3>{Test.level }</h3>
          {selectionModel.map(val =><h1>{val}</h1>)}
        <h1>{Option}</h1>
      </div>
    )
   

   
}

export default Index
