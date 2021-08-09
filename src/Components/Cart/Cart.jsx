import React from 'react'
import {Container,Grid,Typography,Button} from '@material-ui/core'
import useStyles from '../Products/ProductStyle'


function Cart({cart}) {
    const classes = useStyles()
    const data = cart.line_items;
    console.log(data.length);
    const isEmpty=false;
    const EmptyCart = ()=>
    {
        <Typography variant="subtitle1">You have no items in your Cart, start adding it</Typography>
    }
    const FilledCart = ()=>
    {
        <div>
            <Grid container spacing={3}>
                {cart.line_items.map((element)=>
                (
                    <Grid element xs={12} sm={4} key={element.id}>
                       <div>{element?.name}</div>
                    </Grid>
                ))}
            </Grid>
        </div>
    }
    return (
        <Container>
            <div className={classes.ToolBar}/>
            <Typography className={classes.title} variant="h3">Your Shopping Cart</Typography>
            { isEmpty ? <EmptyCart/> : <FilledCart/> }
        </Container>
    )
}

export default Cart
