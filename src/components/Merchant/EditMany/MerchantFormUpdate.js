import React from 'react'
import {TextField  } from '@material-ui/core'

import '../merchant.css'
function MerchantFormUpdate(props) {
    
    
    return (
        <div style={{height : 200}}>
                 
                     {props.item === "Name" ? <TextField id="name" variant="outlined" label="Name" className={'merchant-input'}style={{marginBottom : 18}}/> : null }
                     {/* <TextField id="Username" disabled variant="outlined" label="Username" className={'merchant-input'} style={{marginBottom : 18}}/> */}
                     {props.item === "Email" ? <TextField id="Email" variant="outlined" label="Email" className={'merchant-input'} style={{marginBottom : 18}}/> : null }
                     {/* {props.item === "Name" ? <TextField id="Password" variant="outlined" label="Password" className={'merchant-input'} style={{marginBottom : 18}}/> */}
                

                 
                 {props.item === "Phone" ? <TextField id="Phone" variant="outlined" label="Phone"  className={'merchant-input'} style={{marginBottom : 18}}/> : null }
                     {/* <TextField id="Level" select variant="outlined"  label="Level" className={'merchant-input'} style={{marginBottom : 18}}>
                         <MenuItem value="1">1</MenuItem>
                         <MenuItem value="2">2</MenuItem>
                         <MenuItem value="3">3</MenuItem>
                     </TextField> */}

                     {/* <TextField select id="Status" label="Status" variant="outlined" style={{marginBottom : 18}}>
                         <MenuItem value="Not Verified">Not Verified</MenuItem>
                         <MenuItem value="Verified">Verified</MenuItem>
                     </TextField> */}
                     {props.item === "Saldo" ? <TextField id="name" label="Saldo" variant="outlined" style={{marginBottom : 18}} /> : null }
                 
                
             </div>  
    )
}

export default MerchantFormUpdate
