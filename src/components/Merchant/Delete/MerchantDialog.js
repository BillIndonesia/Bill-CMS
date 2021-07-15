import React from 'react'
import { Button , Dialog , DialogActions , DialogContent , DialogTitle } from '@material-ui/core'
import {useDispatch} from 'react-redux'
import axios from 'axios';


const deleteData = (data) => {
  let Data = [] ;

  data.forEach( (item , index ) => {
    Data.push({
      merchant_username : item
    })
  })

  axios.post('https://dev.bill-indonesia.com/api/merchant/delete/' , Data)
        .then(result => console.log(result.status))

}

function MerchantDialogUpdate(props) {
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

          <Button variant="contained" onClick={() => {
            deleteData(props.data)
            
          }} color="primary">
            Ok
          </Button>
          
        </DialogActions>
      </Dialog>
    )
}

export default MerchantDialogUpdate
