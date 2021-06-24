import React from 'react'
import { Dialog  , DialogContent , DialogTitle } from '@material-ui/core'
import MerchantForm from './MerchantFormUpdate'
function MerchantDialogUpdate(props) {
      
    return (
        <Dialog open={props.open} onClose={props.handleClose} aria-labelledby="form-dialog-title" >
        <DialogTitle id="form-dialog-title" style={{color:'rgb(85, 85, 207)'}}>Update Selected Data</DialogTitle>
            <DialogContent>
                <MerchantForm item={props.item} handleClose={props.handleClose}/>
            </DialogContent>
      </Dialog>
    )
}

export default MerchantDialogUpdate
