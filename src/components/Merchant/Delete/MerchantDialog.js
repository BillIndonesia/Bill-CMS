import React from 'react'
import { Button , Dialog , DialogActions , DialogContent , DialogTitle } from '@material-ui/core'
import {useSelector , useDispatch} from 'react-redux'
import {DeleteMerchant} from '../../../Redux/Merchant/Action'

function MerchantDialogUpdate(props) {
      const dispatch = useDispatch()
      const Data = useSelector( state => state.Merchant)
    return (
        <Dialog open={props.open} onClose={props.handleClose} aria-labelledby="form-dialog-title" >
        <DialogTitle id="form-dialog-title" style={{color:'rgb(85, 85, 207)'}}>Delete Data ?</DialogTitle>
            <DialogContent>
                <h4>Apakah anda yakin ingin menghapus data ini </h4>
                <p>Nama {Data.name} Email {Data.email}</p>
            </DialogContent>

        <DialogActions>
          <Button onClick={props.handleClose} color="primary">
            Cancel
          </Button>
          <Button variant="contained" onClick={() => {
            props.handleClose()
            dispatch(DeleteMerchant())
          }} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    )
}

export default MerchantDialogUpdate
