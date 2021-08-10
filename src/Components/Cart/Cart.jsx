import React, { useState } from 'react'
import {Container,Grid,Typography,Button} from '@material-ui/core'
import useStyles from '../Products/ProductStyle'


function Cart({cartData}) {
    const classes = useStyles()
    console.log(cartData);
    return (
        <Container>
            <div className={classes.ToolBar}/>
            <Typography className={classes.title} variant="h3">Your Shopping Cart</Typography>
            { cartData? (<div>
                <Grid container spacing={3}>
                    {cartData.map((element)=>(
                    <Grid element xs={12} sm={4} key={element.id}>
                        <div>{element?.name}</div>
                    </Grid>
                    ))}
                </Grid>
            </div>): 
            ( <Typography variant="subtitle1">You have no items in your Cart, start adding it</Typography>)}
        </Container>
    )
}

export default Cart
