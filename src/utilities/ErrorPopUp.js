import React from 'react'
import {Modal , Backdrop } from '@material-ui/core'
import {useStyles} from './popupErr'
import {useDispatch , useSelector} from 'react-redux'
import {ResetReq} from '../Redux/Confirmation/Action'
import {CircularProgress} from '@material-ui/core'

const ModalError = (props) => {
    
    const classes = useStyles()
    const confirmation = useSelector( state => state.Confirmation)
    const dispatch = useDispatch()

    return (
    <>
        <Modal
            className={classes.modalDisplay}
            open={(confirmation.loading || confirmation.failure)}
            onClose={() => dispatch(ResetReq())}
            BackdropComponent={Backdrop}
            BackdropProps={{timeout : 500 }}
            closeAfterTransition
        >
        
        
                <div className={classes.popupErr}>
                    { confirmation.loading ? 
                        <CircularProgress size={50} /> : 
                            confirmation.failure ?  
                                <h3>Sorry Data Not Found</h3> : null
                    }
                </div>  
             

        
        

        </Modal>
    </>
)
}

export default React.memo( ModalError ) 