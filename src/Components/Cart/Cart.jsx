import React, { useState } from 'react'
import {Container,Grid,Typography,Button} from '@material-ui/core'
import useStyles from './styles'
import Cartitem from './CartItems/Cartitem'
import { Link } from 'react-router-dom'


function Cart({cartData,cartData1,handleUpdateQty,handleRemoveQty,handleemptyCart}) {
    const classes = useStyles()
    console.log(cartData);
    return (
        <Container>
            <div className={classes.ToolBar}/>
            <Typography className={classes.title} variant="h3" gutterBottom>Your Shopping Cart</Typography>
            { cartData.length > 0? (<div>
                <Grid container spacing={3}>
                    {cartData.map((element)=>(
                    <Grid element xs={12} sm={4} key={element.id}>
                        <Cartitem item={element} onUpdateQuantity={handleUpdateQty} onRemoveQuantity={handleRemoveQty}/>
                    </Grid>
                    ))}
                </Grid>
                <div className={classes.cardDetails}>
                        <Typography variant="h4">Subtotal:{cartData1?.subtotal?.formatted_with_symbol}</Typography>
                        <div>
                            <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={handleemptyCart}>Empty Cart</Button>
                            <Button  component={Link} to="/checkout"className={classes.checkoutButton} size="large" type="button" variant="contained"color="primary">Checkout</Button>
                        </div>
                </div>
            </div>): 
            ( <Typography variant="subtitle1">You have no items in your Cart  <Link to="/"> start adding it</Link>
            </Typography>)}
        </Container>
    )
}

export default Cart
