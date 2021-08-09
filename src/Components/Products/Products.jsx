import React from 'react';
import { Grid } from '@material-ui/core';
import Product from './Product';
import useStyles from './ProductStyle';

const Products = ({ productData , onAddCart })=>
{
  const classes = useStyles()
  return (
      <main className={classes.content}>
       <div className={classes.toolbar}/>
      {productData? (<Grid container justify="center" spacing={4}>
           {productData.map((prod)=>(
               <Grid item key={prod[1]?.id} xs={12} sm={6} md={4} lg={3}><Product product={prod} onAddCart={onAddCart}/></Grid>
           ))}
      </Grid>):"no data"}
      </main>
  )
}

export default Products