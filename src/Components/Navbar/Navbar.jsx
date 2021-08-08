import React from 'react'
import {AppBar,ToolBar,IconBar,badge,MenuItem,Menu,Typography} from '@material-ui/core'
import {ShoppingCart} from '@material-ui/icons'
import useStyles from './styles'
function Navbar() {
    const classes = useStyles() ;
    return (
        <div>
            <AppBar position="fixed" className={classes.AppBar}/>
        </div>
    )
}

export default Navbar
