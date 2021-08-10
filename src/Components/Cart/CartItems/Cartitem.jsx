import React from 'react'
import {Card,CardMedia,CardContent,CardActions,Typography,Button} from "@material-ui/core"
import useStyles from './styles'

function Cartitem({item,onUpdateQuantity,onRemoveQuantity}) {
    const classes = useStyles();
    return (
        <div>
            <Card>
                <CardMedia image={item.media.source} alt={item.name} className={classes.media}/>
                <CardContent className={classes.cardContent}>
                    <Typography variant="h4">{item?.name}</Typography>
                    <Typography variant="h4">{item?.line_total?.formatted_with_symbol}</Typography>
                </CardContent>
                <CardActions className={classes.cardActions}>
                    <div className={classes.button}> 
                        <Button type="button" size="small" onClick={()=>onUpdateQuantity(item.id,item.quantity-1)}>-</Button>
                        <Typography>{item?.quantity}</Typography>
                        <Button type="button" size="small" onClick={()=>onUpdateQuantity(item.id,item.quantity+1)}>+</Button>
                    </div>
                  <Button variant="contained" type="button" color="secondary" onClick={()=>onRemoveQuantity(item.id)}>Remove</Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default Cartitem
