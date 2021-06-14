import React from 'react'
import { Button , Dialog , DialogActions , DialogContent , DialogTitle } from '@material-ui/core'
import StaffForm from './StaffFormUpdate'
function MerchantDialogUpdate(props) {
      
    return (
        <Dialog open={props.open} onClose={props.handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title" style={{color:'rgb(85, 85, 207)'}}>Data Merchant</DialogTitle>
            <DialogContent>
            
                <StaffForm />
            </DialogContent>

        <DialogActions>
          <Button onClick={props.handleClose} color="primary">
            Cancel
          </Button>
          <Button variant="contained" onClick={props.handleClose} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    )
}

export default MerchantDialogUpdate
