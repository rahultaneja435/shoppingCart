import React from 'react'
import {Card,CardMedia,CardContent,CardActions,Typography,IconButton} from "@material-ui/core"
import  {AddShoppingCart} from "@material-ui/icons"
import useStyles from './styles'

function Product({product, onAddCart}) {
    const classes = useStyles();
    return (
        <div>
            <Card className={classes.root}>
                <CardMedia className={classes.media} image={product[1]?.media?.source} title={product[1]?.name}/>
                <CardContent>
                    <div className={classes.cardContent}>
                        <Typography varient="h5" gutterBottom>{product[1]?.name}</Typography>
                        <Typography varient="h5">{product[1]?.price?.formatted_with_code}</Typography>
                    </div>
                    <Typography variant="body2" color="textSecondary">{product[1]?.description}</Typography>
                </CardContent>
                <CardActions disableSpacing className={classes.CardActions}></CardActions>
                 <IconButton aria-label="Add to Cart" onClick={()=>onAddCart(product[1].id,1)}>
                    <AddShoppingCart/>
                 </IconButton>
            </Card>
        </div>
    )
}

export default Product
