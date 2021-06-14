import React , {useState} from 'react'
import { Button , Menu , MenuItem , ListItemIcon , Typography} from '@material-ui/core'
import {DataGrid } from '@material-ui/data-grid'
import {Person, Create , List , Delete , Check} from '@material-ui/icons'
import PopUp from './Add/merchantDialog'
import  { ListGroup , Form} from 'react-bootstrap'
import PopUpUpdate from './EditOne/MerchantDialog'
import PopUpUpdateMany from './EditMany/MerchantDialog'
import PopUpDelete from './Delete/MerchantDialog'
import PopUpVerification from './Verifikasi'
import {useDispatch , useSelector} from 'react-redux'
import {EditMerchant} from '../../Redux/Merchant/Action'
import 'bootstrap/dist/css/bootstrap.min.css';
import './merchant.css'

const columns = [
  { field: 'id', headerName: 'ID', flex : 1 },
  { field: 'username', headerName: 'Username', flex : 1 },
  { field: 'name', headerName: 'Name', flex : 1  },
  { field: 'email' , headerName: 'Email', flex : 1  },
  { field: 'phone' , headerName: 'Phone', flex : 1  },
  { field: 'level' , headerName: 'Level', flex : 1  },
  { field: 'status' , headerName: 'Status', flex : 1  },
  
];

const rows = [
  { id: 1, username: 'Snow', name: 'Jon', email: 'admin@gmail.com' , phone : '2129131' , level : '1' , status : 'verified' },
  { id: 2, username: 'Lannister', name: 'Cersei', email: 'admin@gmail.com' , phone : '2129131' , level : '1' , status : 'verified'},
  { id: 3, username: 'Lannister', name: 'Jaime', email: 'admin@gmail.com', phone : '2129131' , level : '1' , status : 'verified' },
  { id: 4, username: 'Stark', name: 'Arya', email: 'admin@gmail.com' , phone : '2129131' , level : '1' , status : 'Not verified'},
  { id: 5, username: 'Targaryen', name: 'Daenerys', email: 'admin@gmail.com' , phone : '2129131' , level : '1' , status : 'Not verified'},
  { id: 6, username: 'Melisandre', name: 'Denish', email: 'admin@gmail.com' , phone : '2129131' ,  level : '1' , status : 'verified' },
  { id: 7, username: 'Mesaslisandre', name: 'Denish', email: 'admin@gmail.com' , phone : '2129131' ,  level : '1' , status : 'verified'},
  { id: 8, username: 'Targaryen', name: 'Daenerys', email: 'admin@gmail.com' , phone : '2129131' , level : '1' , status : 'Not verified'},
  { id: 9, username: 'Maaaelisandre', name: 'Denish', email: 'admin@gmail.com' , phone : '2129131' ,  level : '1' , status : 'verified' },
  { id: 10, username: 'Meliaaaasandre', name: 'Denish', email: 'admin@gmail.com' , phone : '2129131' ,  level : '1' , status : 'verified'},

  
];

function Index() {
    const dispatch = useDispatch()
    const Test = useSelector(state => state.Merchant)
    const [openAdd , setOpenAdd ] = useState(false)
    const [openUpdateOne , setOpenUpdateOne ] = useState(false)
    const [openUpdateMany , setOpenUpdateMany ] = useState(false)
    const [openDelete , setOpenDelete ] = useState(false)
    const [openVerification , setVerification ] = useState(false)
    const [ dropdown , setDropdown ] = useState(false)
    const [ anchorEl , setAnchor ] = useState(null)
    const [selectionModel, setSelectionModel] = React.useState([]);
    const [sizePage , setSizePage] = useState(5)



    const [ Option , setOption ] = useState(null)

    const handleCloseAdd = () => {
      setOpenAdd(false)
    }
    
    const handleCloseUpdateOne = () => {
      setOpenUpdateOne(false)
    }

    const handleCloseUpdateMany = () => {
      setOpenUpdateMany(false)
    }

    const handleCloseDelete = () => {
      setOpenDelete(false)
    }

    const handleOpenAdd = () => {
      setOpenAdd(true)
    }

    const handleOpenUpdateOne = () => {
      handleLogout()
      setOpenUpdateOne(true)
    }

    // const handleOpenUpdateMany = () => {
    
    //   setOpen3(true)
    // }

    const handleOpenDelete = () => {
      setOpenDelete(true)
    }

    const handleVerif = () => setVerification(true)

    const handleMenu = (event) => {
      setAnchor(event.currentTarget)
    }

    const handleLogout = () => {
      setAnchor(null)
    }

    const handleCloseVerif = () => setVerification(false)

    const sizeChange = (params) => {
      setSizePage(params.pageSize)
    }

    const editMerchant = (username , name , email , phone , level , status) => {
      dispatch(EditMerchant({username , name , email , phone , level , status}))
    }

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
        { openVerification && <PopUpVerification show={openVerification} handleClose={handleCloseVerif} handleLogout={handleLogout}/> }
        <div>
          <h2 className={'merchant-title'}>Data Merchant</h2>
          <div className={'merchant-action'}>
            {/* <div className={'merchant-button'}>
              <Button variant="contained" style={{marginRight : 10}} color="primary" startIcon={<Add />} onClick={handleOpen}>Add Merchant</Button>
              
            </div> */}

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

                      <MenuItem onClick={handleOpenDelete} >
                        <ListItemIcon>
                            <Delete fontSize="small" />
                        </ListItemIcon>
                        <Typography variant="inherit">  
                            Delete
                        </Typography>
                    </MenuItem>

                    {selectionModel.length === 1 ? 
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
                  const {username , name , email , phone , level , status } = item.data
                  editMerchant(username , name , email , phone , level , status)
                  
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
