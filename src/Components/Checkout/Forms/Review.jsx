import { List, ListItem, ListItemText, Typography } from '@material-ui/core'
import React from 'react'

function Review({checkOutToken}) {
    return (
        <div>
            <Typography variant="h1">Order placed  succesfully</Typography>
            {/* <Typography variant="h6" gutterBottom>Order Summary</Typography>
            <List disablePadding>
                {checkOutToken.live.line_items.map((prod)=>
                (
                    <ListItem style={{padding: '10px 0'}} key={prod.name}>
                        <ListItemText primary={prod.name} secondary={`Quantity:${prod.quantity}`}/>
                        <Typography variant="body2">{prod.line_items.formatted_with_symbol}</Typography>
                    </ListItem>
                ))}
                <ListItem style={{padding: '10px 0'}}>
                        <ListItemText primary="Total"/>
                        <Typography variant="subtitle1" style={{fontWeight:700}}>
                        {checkOutToken.live.subtotal.formatted_with_symbol}
                        </Typography>
                </ListItem>
            </List> */}
        </div>
    )
}

export default Review
