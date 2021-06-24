import React from 'react'
import {  Dialog , DialogContent , DialogTitle } from '@material-ui/core'
import StaffForm from './StaffFormUpdate'
function MerchantDialogUpdate(props) {
      
    return (
        <Dialog open={props.open} onClose={props.handleClose} aria-labelledby="form-dialog-title" >
        <DialogTitle id="form-dialog-title" style={{color:'rgb(85, 85, 207)'}}>Update Selected Data</DialogTitle>
            <DialogContent>
            
                <StaffForm item={props.item} handleClose={props.handleClose}/>
            </DialogContent>
      </Dialog>
    )
}

export default MerchantDialogUpdate
