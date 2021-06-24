import React , {useState} from 'react'
import {Link} from 'react-router-dom'
import {Menu , MenuItem , Button , ListItemIcon , Typography } from '@material-ui/core'
import {useHistory} from 'react-router-dom'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import Exit from '@material-ui/icons/ExitToApp'
import './header.css'
function Index(props) {
    const users = localStorage.getItem('users')
    const level = localStorage.getItem('level')

    const history = useHistory()
    const [ anchorEl , setAnchor ] = useState(null)

    const handleLogout = () => {
        localStorage.removeItem('users')
        localStorage.removeItem('level')
        history.replace('/home')
        props.change()
    }

    const handleClose = () => {
        setAnchor(null)
    }



    const handleMenu = (event) => {
        setAnchor(event.currentTarget)
    }

    return (
        <div className={'navbarr'}>
            <div className={'navbar-bodyy'}>
                
                <ul className={'navbar-listt'}>
                    <li className={'navbar-itemm'}><Link to="/home/vendor" className={'navlinkk'}>Vendors</Link></li>
                    <li className={'navbar-itemm'}><Link to="/home/parent-vendor" className={'navlinkk'}>All Parent Vendors</Link></li>
                    <li className={'navbar-itemm'}><Link to="/home/users" className={'navlinkk'}>Users</Link></li>
                    <li className={'navbar-itemm'}><Link to="/home/admin-menu" className={'navlinkk'}>Admin Menu</Link></li>
                    <li className={'navbar-itemm'}><Link to="/home/voucher" className={'navlinkk'}>Bill Voucher</Link></li>
                    <li className={'navbar-itemm'}><Link to="/home/Staff" className={'navlinkk'}>Staff</Link></li>
                    <li className={'navbar-itemm'}><Link to="/home/cashout" className={'navlinkk'}>Cashout</Link></li>
                    <li className={'navbar-itemm'}><Link to="/home/request" className={'navlinkk'}>Request</Link></li>
                    { users === "verif" && level === "3" ? 
                    <li className={'navbar-itemm navlinkk'}>Verification
                        <ul className={'nav-dropdown'}>
                            <li className={'item-dropdown'}><Link to="/home/voucher-request" className={'navlinkk'}>Voucher</Link></li>
                            <li className={'item-dropdown'}><Link to="/home/merchant-request" className={'navlinkk'}>Merchant</Link></li>
                            <li className={'item-dropdown'}><Link to="/home/cashout-request" className={'navlinkk'}>Cashout</Link></li>
                        </ul>
                    </li> : null
                }
                </ul>
            </div>

            <div className={'navbar-actionn'}>
                <Button
                 
                 className={'button-option'}
                 aria-controls="admin-menu" 
                 aria-haspopup="true"
                 onClick={handleMenu}
                 endIcon={<ArrowDropDownIcon />}
                 >
                 
                    Administrator 
                </Button>

                <Menu
                    id="admin-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    
                >
                    <MenuItem onClick={handleLogout} >
                        <ListItemIcon>
                            <Exit fontSize="small" />
                        </ListItemIcon>
                        <Typography variant="inherit">
                            Log Out
                        </Typography>
                    </MenuItem>
                    
                </Menu>
            </div>
            
        </div>
    )
}

export default Index
