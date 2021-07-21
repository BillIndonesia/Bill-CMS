import React from 'react'
import { Dialog , DialogContent , DialogTitle , Snackbar} from '@material-ui/core'
import Alert from '@material-ui/lab/Alert'
import {useSelector} from 'react-redux'
import MerchantForm from './StaffAddForm'
function StaffDialog(props) {
    const Data = useSelector( state => state.Confirmation )
    
    return (
        <Dialog open={props.open} onClose={props.handleClose} aria-labelledby="form-dialog-title" fullWidth={600}>
        <DialogTitle id="form-dialog-title" style={{color:'rgb(85, 85, 207)'}}>Data Staff</DialogTitle>
            <DialogContent>
                    { 
                            Data.success ? 
                            <Snackbar open={Data.success} autoHideDuration={3000}>
                                <Alert severity="success">
                                    Create Berhasil
                                </Alert>
                             </Snackbar> : 
                             
                             Data.failure ? 
                             <Snackbar open={Data.failure} autoHideDuration={3000}>
                             <Alert severity="error">
                                 Create Gagal
                             </Alert>
                          </Snackbar> : null
                    }
                <MerchantForm handleClose={props.handleClose} />
            </DialogContent>
      </Dialog>
    )
}

export default React.memo( StaffDialog )
