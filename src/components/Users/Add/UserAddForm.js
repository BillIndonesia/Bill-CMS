import React from 'react'
import {TextField , MenuItem} from '@material-ui/core'
import {MuiPickersUtilsProvider , KeyboardDatePicker} from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
import * as Yup from 'yup'
import {Formik} from 'formik'
import '../users.css'

const initialValue = {
    name : '' ,
    email : '' ,
    pin : '' ,
    ttl : '' ,

}



function UserAddForm() {
    
    return (
        <div className={'users-main'}>
                 <div className={'users-form'}>
                     <TextField id="name" variant="outlined" label="Name" style={{marginBottom : 18}}/>
                     <TextField id="Email" variant="outlined" label="Email" style={{marginBottom : 18}}/>
                     <TextField id="PIN" type="password" variant="outlined" label="PIN" style={{marginBottom : 18}}/>
                     <TextField id="Tempat Lahir" variant="outlined" label="Tempat Lahir" style={{marginBottom : 18}}/>
                 </div>

                 <div className={'users-form'}>
                     <MuiPickersUtilsProvider utils={DateFnsUtils}>
                     <KeyboardDatePicker 
                        variant="inline" 
                        format="dd/MM/yyy"
                        id="Tanggal Lahir"
                        label="Tanggal Lahir"
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                          }}
                          style={{marginBottom : 18}}
                      />
                      </MuiPickersUtilsProvider>
                     <TextField id="Level" select variant="outlined" label="Level" style={{marginBottom : 18}}>
                         <MenuItem value="1">1</MenuItem>
                         <MenuItem value="2">2</MenuItem>
                         <MenuItem value="3">3</MenuItem>
                     </TextField>

                     <TextField select id="Status" label="Status" variant="outlined" style={{marginBottom : 18}}>
                         <MenuItem value="Not Verified">Not Verified</MenuItem>
                         <MenuItem value="Verified">Verified</MenuItem>
                     </TextField>
                                      
                </div>
             </div>  
    )
}

export default UserAddForm
