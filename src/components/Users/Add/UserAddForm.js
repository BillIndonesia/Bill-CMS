import React from 'react'
import {TextField , MenuItem} from '@material-ui/core'
import '../users.css'
function UserAddForm() {
    
    return (
        <div className={'users-main'}>
                 <div className={'users-form'}>
                     <TextField id="name" variant="outlined" label="Name" style={{marginBottom : 18}}/>
                     <TextField id="Email" variant="outlined" label="Email" style={{marginBottom : 18}}/>
                     <TextField id="Password" type="password" variant="outlined" label="Password" style={{marginBottom : 18}}/>
                     <TextField id="Tempat Lahir" variant="outlined" label="Tempat Lahir" style={{marginBottom : 18}}/>
                 </div>

                 <div className={'users-form'}>
                     <TextField id="Tanggal Lahir" variant="outlined" label="Tempat Lahir" style={{marginBottom : 18}}/>
                     <TextField id="Level" select variant="outlined" label="Level" style={{marginBottom : 18}}>
                         <MenuItem value="1">1</MenuItem>
                         <MenuItem value="1">2</MenuItem>
                         <MenuItem value="1">3</MenuItem>
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
