import React , {useState , useEffect , useRef} from 'react'
import PopUpUpdate from './EditOne/StaffDialog'
import PopUpUpdateMany from './EditMany/StaffDialog'
import PopUpDelete from './Delete/DeleteDialog'
import PopUpVerification from './Verifikasi'
import { Button , Menu , MenuItem , ListItemIcon , Typography , LinearProgress } from '@material-ui/core'
import {DataGrid } from '@material-ui/data-grid'
import {Person, Create , List , Delete , Check , Search } from '@material-ui/icons'
import {useDispatch ,useSelector} from 'react-redux'
import PopUp from './Add/StaffAddDialog'
import ModalError from '../../utilities/ErrorPopUp'
import  { ListGroup , Form , InputGroup , FormControl } from 'react-bootstrap'
import {EditStaff , GetStaff , SearchData} from '../../Redux/Staff/Action'
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


function Index() {
   
    const input = useRef(null)
    const dispatch = useDispatch()

    const Data = useSelector(state => state.StaffList.data)
    const Err = useSelector( state => state.Confirmation.failure)
    
   
    const [openAdd , setOpenAdd ] = useState(false)
    const [err , setErr] = useState(true)
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
      setAnchor(null)
      setOpenUpdateOne(true)
    }

    const handleCloseVerif = () => setVerif(false)

    const sizeChange = (params) => setSizePage(params.pageSize)
    
    const handleOption = e => { 
      setOption(e.target.value)  
    }

    const editStaff = (data) => dispatch(EditStaff(data))


    useEffect( () => {
      dispatch(GetStaff())
    },[])


    return(
      <div className={'staff'}>
        <PopUp 
          open={openAdd} 
          handleClose={handleCloseAdd} 
          handleOpen={handleOpenAdd} />

        <PopUpUpdate 
          open={openUpdateOne} 
          handleClose={handleCloseUpdateOne} />

        <PopUpUpdateMany 
          open={openUpdateMany} 
          handleClose={handleCloseUpdateMany} 
          item={Option} 
          data={selectionModel} />

        <PopUpDelete 
          open={openDelete} 
          handleClose={handleCloseDelete} 
          data={selectionModel} />

        <PopUpVerification 
          show={openVerification} 
          handleClose={handleCloseVerif} 
          data={selectionModel[0]} />

        <ModalError 
          open={Err}
        />

        <h2 className={'merchant-title'}>Data Staff</h2>
        

        <div className={'staff-data'}>
          
          { Data.length === 0 ? 
             <LinearProgress /> :
             <div className="data">
             <div className="main-search">
             <div>
                <Button
                  variant="contained" 
                  style={{marginLeft : 10 }}
                  aria-controls="admin-menu" 
                  aria-haspopup="true"
                  onClick={ event => setAnchor(event.currentTarget)}
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
                    onClose={() => setAnchor(null)}
                      
                >

                    <MenuItem onClick={() => {
                      setAnchor(null)
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
                      <MenuItem onClick={() => setOpenDelete(true)} >
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
                      setAnchor(null)
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
                            setAnchor(null)
                            setOpenUpdateMany(!openUpdateMany)
                          }}>
                          Ok
                          </Button>
                        </ListGroup.Item>
                    </ListGroup> 
                    } 
                </Menu>
            
            </div>

              <div className="search">
                <InputGroup className="mb-3">
                  <FormControl
                    placeholder="search"
                    ref={input}
                  />
                  
                  <Button
                    variant="contained"
                    onClick={() => dispatch(SearchData(input.current.value))}
                    endIcon={<Search />}
                  />
              
                </InputGroup>
              </div>
            </div>
                <DataGrid 
                  rows={Data} 
                  columns={columns}  
                  checkboxSelection={true}
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
            }
        </div>
      </div>
    )
   

   
}

export default Index
