import React from 'react'
import {AppBar,Toolbar,IconButton,badge,MenuItem,Menu,Typography, Badge} from '@material-ui/core'
import {ShoppingCart} from '@material-ui/icons'
import {Link,useLocation} from 'react-router-dom'
import useStyles from '../Products/styles'
function Navbar({cartLength}) {
    const classes = useStyles() ;
    const location = useLocation();
    return (
        <div>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                   <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
                       <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmtPddxOs2WNkToEkviq8v8_R88NxSWzRzuQ&usqp=CAU"} alt="Intech" height="25px" className={classes.image}/>
                       Money heist Store
                   </Typography>
                   <div className={classes.grow}>
                   {location.pathname==='/' && (<div className={classes.button}>
                           <Link to="/cart">go to cart</Link>
                           <IconButton component={Link} aria-label="Show Cart Items" color="inherit">
                                <Badge badgeContent={cartLength} color="secondary">
                                    <ShoppingCart/>
                                </Badge>
                           </IconButton>
                       </div>)}
                   </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar
