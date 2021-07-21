import React from 'react'
import { Dialog , DialogContent , DialogTitle } from '@material-ui/core'
import MerchantForm from './MerchantFormUpdate'
function MerchantDialogUpdate(props) {
      
    return (
        <Dialog open={props.open} onClose={props.handleClose} aria-labelledby="form-dialog-title" fullWidth={600}>
        <DialogTitle id="form-dialog-title" style={{color:'rgb(85, 85, 207)'}}>Data Merchant</DialogTitle>
            <DialogContent>
                <MerchantForm handleClose={props.handleClose} />
            </DialogContent>
      </Dialog>
    )
}

export default React.memo( MerchantDialogUpdate )