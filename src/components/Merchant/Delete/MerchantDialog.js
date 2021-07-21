import React from 'react'
import { Button , Dialog , DialogActions , DialogContent , DialogTitle , Snackbar , LinearProgress} from '@material-ui/core'
import Alert from '@material-ui/lab/Alert'
import {useDispatch , useSelector} from 'react-redux'
import {DeleteMerchant} from '../../../Redux/Merchant/Action'

function MerchantDialogUpdate(props) {
      const dispatch = useDispatch()
      const Data = useSelector(state => state.Confirmation )
      
    return (
        <Dialog open={props.open} onClose={props.handleClose} aria-labelledby="form-dialog-title" >
        <DialogTitle id="form-dialog-title" style={{color:'rgb(85, 85, 207)'}}>Delete Data ?</DialogTitle>
            <DialogContent>
                      { 
                            Data.loading ? 
                              <LinearProgress /> :

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
                          </Snackbar> :
                    
               
                         <h4>Apakah anda yakin ingin menghapus data ? </h4>
                       }

            </DialogContent>

        <DialogActions>
          <Button onClick={props.handleClose} color="primary">
            Cancel
          </Button>

          <Button 
            variant="contained" 
            onClick={() => {
              dispatch(DeleteMerchant(props.data))
              props.change([])
            }} 
            color="primary"
          >
            Ok
          </Button>
          
        </DialogActions>
      </Dialog>
    )
}

export default MerchantDialogUpdate
