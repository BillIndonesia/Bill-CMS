import React , {useState , useEffect} from 'react'
import PopUpUpdate from './EditOne/StaffDialog'
import PopUpUpdateMany from './EditMany/StaffDialog'
import PopUpDelete from './Delete/DeleteDialog'
import PopUpVerification from './Verifikasi'
import { Button , Menu , MenuItem , ListItemIcon , Typography} from '@material-ui/core'
import {DataGrid } from '@material-ui/data-grid'
import {Person, Create , List , Delete , Check} from '@material-ui/icons'
import {useDispatch ,useSelector} from 'react-redux'
import PopUp from './Add/StaffAddDialog'
import  { ListGroup , Form} from 'react-bootstrap'
import {EditStaff , GetStaff} from '../../Redux/Staff/Action'

import 'bootstrap/dist/css/bootstrap.min.css';
import './staff.css'

const columns = [
  { field: 'id', headerName: 'ID', flex : 1 , hide : true },
  { field: 'username', headerName: 'Username', flex : 1 },
  { field: 'name', headerName: 'Name', flex : 1  },
  { field: 'password', headerName: 'Password', flex : 1 , hide : true },
  { field: 'email' , headerName: 'Email', flex : 1  },
  { field: 'phone' , headerName: 'Phone', flex : 1  },
  { field: 'level' , headerName: 'Level', flex : 1  },
 
  
];

const rows = [
  { id: 1, username: 'Snow', name: 'Jon', password : 'test111' , email: 'admin@gmail.com' , phone : '2129131' , level : '1' },
  { id: 2, username: 'Lannister', name: 'Cersei', password : 'test212' , email: 'admin@gmail.com' , phone : '2129131' , level : '1' },
  { id: 3, username: 'Lannister', name: 'Jaime', password : 'test101' , email: 'admin@gmail.com', phone : '2129131' , level : '1' },
  { id: 4, username: 'Stark', name: 'Arya', password : 'test10122' , email: 'admin@gmail.com' , phone : '2129131' , level : '1' },
  { id: 5, username: 'Targaryen', name: 'Daenerys', password : 'test101' , email: 'admin@gmail.com' , phone : '2129131' , level : '1' },
  { id: 6, username: 'Melisandre', name: 'Denish', password : 'test171' , email: 'admin@gmail.com' , phone : '2129131' ,  level : '1' },
  { id: 7, username: 'Mesaslisandre', name: 'Denish', password : 'test1022' , email: 'admin@gmail.com' , phone : '2129131' ,  level : '1' },
  { id: 8, username: 'Targaryen', name: 'Daenerys', password : 'test101111' , email: 'admin@gmail.com' , phone : '2129131' , level : '1' },
  { id: 9, username: 'Maaaelisandre', name: 'Denish', password : 'test1441' , email: 'admin@gmail.com' , phone : '2129131' ,  level : '1'  },
  { id: 10, username: 'Meliaaaasandre', name: 'Denish', password : 'test144441' , email: 'admin@gmail.com' , phone : '2129131' ,  level : '1' },

  
];

function Index() {
   
   
    const [openAdd , setOpenAdd ] = useState(false)
    const [openUpdateOne , setOpenUpdateOne ] = useState(false)
    const [openUpdateMany , setOpenUpdateMany ] = useState(false)
    const [openDelete , setOpenDelete ] = useState(false)
    const [openVerification ,setVerif ] = useState(null)
    const [ dropdown , setDropdown ] = useState(false)
    const [ anchorEl , setAnchor ] = useState(null)
    const [selectionModel, setSelectionModel] = React.useState([]);
    const [sizePage , setSizePage] = useState(5)

    
    const [ Option , setOption ] = useState(null)

    const handleCloseAdd = () => setOpenAdd(false)
    
    const handleCloseUpdateOne = () => setOpenUpdateOne(false)
    
    const handleCloseUpdateMany = () => setOpenUpdateMany(false)
    
    const handleCloseDelete = () => setOpenDelete(false)
    
    const handleOpenAdd = () => setOpenAdd(true)
    
    const handleOpenUpdateOne = () => {
      handleLogout()
      setOpenUpdateOne(true)
    }

    const handleOpenDelete = () => setOpenDelete(true)

    const handleCloseVerif = () => setVerif(false)

    const handleMenu = (event) => setAnchor(event.currentTarget)

    const handleLogout = () => setAnchor(null)

    const sizeChange = (params) => setSizePage(params.pageSize)
    
    const handleOption = e => {
      const {value } = e.target 
      setOption(value)  
    }

    const editStaff = (data) => dispatch(EditStaff(data))

    const Data = useSelector(state => state.StaffList.data)
    const dispatch = useDispatch()

    useEffect( () => {
      dispatch(GetStaff())
    },[])

    if(Data.length == 0 ) return null


    return(
      <div className={'merchant'}>
        {openAdd && <PopUp open={openAdd} handleClose={handleCloseAdd} handleOpen={handleOpenAdd} /> }
        {openUpdateOne && <PopUpUpdate open={openUpdateOne} handleClose={handleCloseUpdateOne} /> }
        {openUpdateMany && <PopUpUpdateMany open={openUpdateMany} handleClose={handleCloseUpdateMany} item={Option} data={selectionModel} /> }
        {openDelete && <PopUpDelete open={openDelete} handleClose={handleCloseDelete} data={selectionModel} /> }
        {openVerification && <PopUpVerification show={openVerification} handleClose={handleCloseVerif} data={selectionModel[0]} />}
        <div>
          <h2 className={'merchant-title'}>Data Staff</h2>
          <div className={'merchant-action'}>
            <div>
                <Button
                  variant="contained" 
                  style={{marginLeft : 10 }}
                  aria-controls="admin-menu" 
                  aria-haspopup="true"
                  onClick={handleMenu}
                  size="sm"
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
                            Add Staff
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
                    
                    {selectionModel.length === 1 ? 
                    <MenuItem onClick={() => {
                      handleLogout()
                      setVerif(true)
                    }} >
                        <ListItemIcon>
                            <Check fontSize="small" />
                        </ListItemIcon>
                        <Typography variant="inherit">  
                            Verify
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

                      <ListGroup.Item> 
                        <Form.Check onChange={handleOption} name="test" type="radio" label="Level" value="Level"/>
                      
                      </ListGroup.Item>

                      <ListGroup.Item > 
                        <Form.Check onChange={handleOption} name="test" type="radio" label="Email" value="Email" />
                          
                      </ListGroup.Item>
                      <ListGroup.Item> 
                        <Form.Check onChange={handleOption} name="test" type="radio" label="Phone" value="Phone" />
                      
                      </ListGroup.Item>

                      <ListGroup.Item> 
                        <Form.Check onChange={handleOption} name="test" type="radio" label="Password" value="Password"/>
                      
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
              rows={Data} 
              columns={columns}  
              checkboxSelection ={true}
              onSelectionModelChange={(newSelection) => {
                setSelectionModel(newSelection.selectionModel)
              }}
              onRowSelected={ item => {
                editStaff(item.data)
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
