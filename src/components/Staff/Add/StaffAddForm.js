import React from 'react'
import {TextField , MenuItem} from '@material-ui/core'
function StaffForm() {
    
    return (
        <div className={'staff-main'}>
                 <div className={'staff-form'}>
                     <TextField id="name" variant="outlined" label="Name" className={'merchant-input'}style={{marginBottom : 18}}/>
                     <TextField id="Username" variant="outlined" label="Username" className={'merchant-input'} style={{marginBottom : 18}}/>
                     <TextField id="Password" type="password" variant="outlined" label="Password" className={'merchant-input'} style={{marginBottom : 18}}/>
                 </div>

                 <div className={'staff-form'}>
                     <TextField id="Email" variant="outlined" label="Email" className={'merchant-input'} style={{marginBottom : 18}}/>
                     <TextField id="Phone" variant="outlined" label="Phone"  className={'merchant-input'} style={{marginBottom : 18}}/>
                     <TextField id="Level" select variant="outlined" label="Level" className={'merchant-input'} style={{marginBottom : 18}}>
                         <MenuItem>1</MenuItem>
                         <MenuItem>2</MenuItem>
                         <MenuItem>3</MenuItem>
                     </TextField>
                                      
                </div>
             </div>  
    )
}

export default StaffForm
