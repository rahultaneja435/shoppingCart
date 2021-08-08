import React from 'react'
import {Card,CardMedia,CardContent,CardActions,Typography,IconButton} from "@material-ui/core"
import  {AddShoppingCart} from "@material-ui/icons"
import useStyles from './styles'

function Product({product}) {
    const classes = useStyles();
    return (
        <div>
            <Card className={classes.root}>
                <CardMedia className={classes.media} image={product.image} title={product.name}/>
                <CardContent>
                    <div className={classes.cardContent}>
                        <Typography varient="h5" gutterBottom>{product.name}</Typography>
                        <Typography varient="h5">{product.price}</Typography>
                    </div>
                    <Typography variant="body2" color="textSecondary">{product.decription}</Typography>
                </CardContent>
                <CardActions disableSpacing className={classes.CardActions}></CardActions>
                 <IconButton aria-label="Add to Cart">
                    <AddShoppingCart/>
                 </IconButton>
            </Card>
        </div>
    )
}

export default Product
