import React from 'react'
import {TextField , MenuItem } from '@material-ui/core'
import {useSelector} from 'react-redux'
import '../merchant.css'
function MerchantFormUpdate() {
    
    const Data = useSelector(state => state.Merchant)
    return (
        <div className={'merchant-main'}>
                 <div className={'merchant-form'}>
                     <TextField id="name" value={Data.name} variant="outlined" label="Name" className={'merchant-input'}style={{marginBottom : 18}}/>
                     <TextField id="Username" disabled value={Data.username} variant="outlined" label="Username" className={'merchant-input'} style={{marginBottom : 18}}/>
                     <TextField id="Email" value={Data.email} variant="outlined" label="Email" className={'merchant-input'} style={{marginBottom : 18}}/>
                     <TextField id="Password" value={Data.password} variant="outlined" label="Password" className={'merchant-input'} style={{marginBottom : 18}}/>
                 </div>

                 <div className={'merchant-form'}>
                     <TextField id="Phone" variant="outlined" label="Phone"  className={'merchant-input'} style={{marginBottom : 18}}/>
                     <TextField id="Level" select variant="outlined"  label="Level" onChange={(event) => {
                         console.log(event.target.value)
                     } } className={'merchant-input'} style={{marginBottom : 18}}>
                         <MenuItem value="1">1</MenuItem>
                         <MenuItem value="2">2</MenuItem>
                         <MenuItem value="3">3</MenuItem>
                     </TextField>

                     <TextField select id="Status" label="Status" variant="outlined" style={{marginBottom : 18}}>
                         <MenuItem value="Not Verified">Not Verified</MenuItem>
                         <MenuItem value="Verified">Verified</MenuItem>
                     </TextField>
                     <TextField id="name" label="Saldo" variant="outlined" style={{marginBottom : 18}} />
                 
                </div>
             </div>  
    )
}

export default MerchantFormUpdate
