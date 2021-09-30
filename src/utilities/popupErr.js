import {makeStyles} from '@material-ui/core'

const useStyles = makeStyles(() => ({
    popupErr :{
        backgroundColor : 'white' ,
        width : 400 ,
        height : 300 , 
        display: 'flex' ,
        flexDirection : 'column' ,
        justifyContent : 'center' ,
        alignItems : 'center' ,
        boxSizing : 'border-box' ,
        padding : '20px'
      } ,
    modalDisplay : {
        display : 'flex' ,
        alignItems : 'center' ,
        justifyContent : 'center'
    }
}))


export {useStyles}