import React, { useState, useEffect , useRef} from 'react'
import { Button, Menu, MenuItem, ListItemIcon, Typography, LinearProgress } from '@material-ui/core'
import { DataGrid } from '@material-ui/data-grid'
import { Person, Create, List, Delete , Search } from '@material-ui/icons'
import PopUp from './Add/merchantDialog'
import { ListGroup, Form , InputGroup , FormControl } from 'react-bootstrap'
import PopUpUpdate from './EditOne/MerchantDialog'
import PopUpUpdateMany from './EditMany/MerchantDialog'
import PopUpDelete from './Delete/MerchantDialog'
import ModalError from '../../utilities/ErrorPopUp'
import { useDispatch, useSelector } from 'react-redux'
import { EditMerchant, GetMerchants , SearchData } from '../../Redux/Merchant/Action'
import 'bootstrap/dist/css/bootstrap.min.css';
import './merchant.css'



const columns = [
  { field: 'id', headerName: 'ID', flex: 1 },
  { field: 'type', headerName: 'type', flex: 1 },
  { field: 'username', headerName: 'Username', flex: 1 },
  { field: 'name', headerName: 'Name', flex: 1 },
  { field: 'password', headerName: 'Password', flex: 1, hide: true },
  { field: 'email', headerName: 'Email', flex: 1 },
  { field: 'phone', headerName: 'Phone', flex: 1 },
  { field: 'level', headerName: 'Level', flex: 1 },
  { field: 'status', headerName: 'Status', flex: 1 },
  { field: 'saldo', headerName: 'Saldo', flex: 1, type: 'number' }

];


function Index() {
  const dispatch = useDispatch()

  const Data = useSelector(state => state.MerchantList.data)
  

  const input = useRef(null)
  const [openAdd, setOpenAdd] = useState(false)
  const [openUpdateOne, setOpenUpdateOne] = useState(false)
  const [openUpdateMany, setOpenUpdateMany] = useState(false)
  const [openDelete, setOpenDelete] = useState(false)
  const [dropdown, setDropdown] = useState(false)
  const [anchorEl, setAnchor] = useState(null)
  const [selectionModel, setSelectionModel] = React.useState([]);
  const [sizePage, setSizePage] = useState(5)
  const [Err , setErr] = useState(false)


  const [Option, setOption] = useState(null)

  const handleCloseAdd = () => {
    setOpenAdd(false)
  }

  const handleCloseUpdateOne = () => setOpenUpdateOne(false)

  const handleCloseUpdateMany = () => setOpenUpdateMany(false)

  const handleCloseDelete = () => setOpenDelete(false)

  const handleOpenAdd = () => setOpenAdd(true)

  const handleOpenUpdateOne = () => {
    setAnchor(null)
    setOpenUpdateOne(true)
  }

  const handleOpenDelete = () => setOpenDelete(true)

  const editMerchant = (data) => dispatch(EditMerchant(data))

  const handleOption = e => setOption(e.target.value)

  const Reset = () => setSelectionModel([])


  useEffect(() => {
    dispatch(GetMerchants())
  }, [])

  return (
    <div className={'merchant'}>
      
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
          data={selectionModel}
          change={Reset}
        />

        <ModalError />

        <h2 className={'merchant-title'}>Data Merchant</h2>

      <div className={'merchant-data'}>

        {Data.length === 0 ?
          <LinearProgress /> :
          <div className="data">
            <div className="main-search">
              <div>
                <Button
                  variant="contained"
                  style={{ marginLeft: 10 }}
                  aria-controls="admin-menu"
                  aria-haspopup="true"
                  onClick={ event => setAnchor(event.currentTarget) }
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


                {dropdown && <ListGroup>

                  <ListGroup.Item>
                    <Form.Check 
                      onChange={handleOption} 
                      name="test" 
                      type="radio" 
                      label="Name" 
                      value="Name" 
                    />
                  </ListGroup.Item>

                  <ListGroup.Item >
                    <Form.Check 
                      onChange={handleOption} 
                      name="test" 
                      type="radio" 
                      label="Email" 
                      value="Email" 
                    />

                  </ListGroup.Item>
                  
                  <ListGroup.Item>
                    <Form.Check 
                      onChange={handleOption} 
                      name="test" 
                      type="radio" 
                      label="Phone" 
                      value="Phone"
                    />

                  </ListGroup.Item>

                  <ListGroup.Item >
                    <Button 
                      variant="contained" 
                      color="primary" 
                      onClick={() => {
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
                <InputGroup>
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
            selectionModel={selectionModel}
            pageSize={sizePage}
            onPageSizeChange={(params) => setSizePage(params.pageSize)}
            rowsPerPageOptions={[5, 7, 10, 25]}
            onRowSelected={item => {

              editMerchant(item.data)

            }}

          />
          </div>
        }
      </div>
    </div>
  )



}

export default React.memo( Index )
