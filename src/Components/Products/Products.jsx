import React from 'react';
import { Grid } from '@material-ui/core';
import Product from './Product';

const products=[
    {
        id:1,
        name:"shoes",
        decription:"footwear",
        price:"5rs",
        image:"https://cdn.mos.cms.futurecdn.net/HvjfsxzQHCZxpUYTVgyBDM.jpg"
    },
    {
        id:2,
        name:"Macbook",
        decription:"Electronics",
        price:"5rs",
        image:"https://cdn.mos.cms.futurecdn.net/HvjfsxzQHCZxpUYTVgyBDM.jpg"
    }
]
const Products = ()=>
{
  return (
      <main>
      <Grid container justify="center" spacing={4}>
           {products.map((prod)=>(
               <Grid item key={prod.id} xs={12} sm={6} md={4} lg={3}><Product product={prod}/></Grid>
           ))}
      </Grid>
      </main>
  )
}

export default Products