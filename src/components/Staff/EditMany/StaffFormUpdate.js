import React from 'react'
import {TextField , MenuItem } from '@material-ui/core'
function MerchantFormUpdate(props) {
    
    
    return (
        <div style={{height : 200}}>
                 
                     {props.item === "Name" ? <TextField id="name" variant="outlined" label="Name" style={{marginBottom : 18}}/> : null }
                     {/* <TextField id="Username" disabled variant="outlined" label="Username" className={'merchant-input'} style={{marginBottom : 18}}/> */}
                     {props.item === "Email" ? <TextField id="Email" variant="outlined" label="Email"  style={{marginBottom : 18}}/> : null }
                     {props.item === "Password" ? <TextField id="Password" type="password" variant="outlined" label="Password" style={{marginBottom : 18}}/> : null }
                

                 
                 {props.item === "Phone" ? <TextField id="Phone" variant="outlined" label="Phone"   style={{marginBottom : 18}}/> : null }
                     {props.item === "Level"? 
                     <TextField id="Level" select defaultValue="1" variant="outlined"  label="Level" style={{marginBottom : 18 , width : '100%'}}>
                         <MenuItem value="1">1</MenuItem>
                         <MenuItem value="2">2</MenuItem>
                         <MenuItem value="3">3</MenuItem>
                     </TextField> : null 
                 }
                     
                     {props.item === "Saldo" ? <TextField id="name" label="Saldo" variant="outlined" style={{marginBottom : 18}} /> : null }
                 
                
             </div>  
    )
}

export default MerchantFormUpdate
