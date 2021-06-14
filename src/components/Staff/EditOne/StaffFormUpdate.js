import React from 'react'
import {TextField , MenuItem } from '@material-ui/core'
import {useSelector} from 'react-redux'
function MerchantFormUpdate() {
    const Data = useSelector(state => state.Staff )
    return (
        <div className={'merchant-main'}>
                 <div className={'merchant-form'}>
                     <TextField id="name" value={Data.name} variant="outlined" label="Name" style={{marginBottom : 18}}/>
                     <TextField id="Username" aria-readonly value={Data.username} disabled variant="outlined" label="Username" style={{marginBottom : 18}}/>
                     <TextField id="Password" type="password" value={Data.password} variant="outlined" label="Password"  style={{marginBottom : 18}}/>
                 </div>

                 <div className={'merchant-form'}>
                     <TextField id="Email" value={Data.email} variant="outlined" label="Email" style={{marginBottom : 18}}/>
                     <TextField id="Phone" value={Data.phone} variant="outlined" label="Phone" style={{marginBottom : 18}}/>
                     <TextField id="Level" select defaultValue={Data.level} variant="outlined" label="Level" style={{marginBottom : 18}}>
                         <MenuItem value="1">1</MenuItem>
                         <MenuItem value="2">2</MenuItem>
                         <MenuItem value="3">3</MenuItem>
                     </TextField>
                     
                 
                </div>
             </div>  
    )
}

export default MerchantFormUpdate
