import React from 'react'
import { Button , Dialog , DialogActions , DialogContent , DialogTitle } from '@material-ui/core'
// import {useSelector , useDispatch} from 'react-redux'
// import {DeleteMerchant} from '../../../Redux/Merchant/Action'
import {DeleteUsers} from '../../../Redux/Users/Action'
import {useDispatch} from 'react-redux'
function UserDialogUpdate(props) {
      const dispatch = useDispatch()

    return (
        <Dialog open={props.open} onClose={props.handleClose} aria-labelledby="form-dialog-title" >
        <DialogTitle id="form-dialog-title" style={{color:'rgb(85, 85, 207)'}}>Delete Data ?</DialogTitle>
            <DialogContent>
            <h4>Apakah anda yakin ingin menghapus data ini </h4>
            </DialogContent>

        <DialogActions>
          <Button onClick={props.handleClose} color="primary">
            Cancel
          </Button>
          <Button variant="contained" color="primary" onClick={() => {
            dispatch(DeleteUsers(props.data))
            props.handleClose()
          }}>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    )
}

export default UserDialogUpdate
