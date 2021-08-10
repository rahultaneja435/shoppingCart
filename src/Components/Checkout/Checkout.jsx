import React from 'react'
import useStyles from './styles';
import { useEffect, useState } from 'react';
import AddressForm from './Forms/AddressForm';
import PaymentForm from './Forms/PaymentForm';
import { commerce } from '../../Commerce/Commerce';
import { CssBaseline, Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button } from '@material-ui/core';

function Checkout({cart}) {
    const steps = ['Shipping address','Payment details'];
    const [activeStep, setActiveStep] = useState(0);
    const [token,setToken] = useState(null);
    const [shippingData,setShippingData] = useState({});
    const classes = useStyles();
    useEffect(()=>
    {
        const generateToken = async()=>
        {
            try {
                const token = await commerce.checkout.generateToken(cart.id,{type:'cart'});
                console.log(token.live);
                setToken(token)
            } catch (error) {
                
            }
        }
       generateToken();
    },[])

    const nextstep = ()=> setActiveStep((prevActiveStep) => prevActiveStep+1)
    const backStep = ()=> setActiveStep((prevActiveStep) => prevActiveStep-1)
    const next =(data)=>
    {
        setShippingData(data);
        nextstep();
        console.log(shippingData);
    }
    const Confirmation = ()=>
    {
        <div>hi</div>
    }
    const Form=()=> activeStep===0 ? 
    <AddressForm checkoutToken={token} next={next}/> : 
    <PaymentForm 
    checkOutToken={token}
    />
    return (
        <div>
        <div className={classes.toolbar} />
        <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography variant="h4" align="center">Checkout</Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? <Confirmation/>:token && <Form/>}
        </Paper>
      </main>
        </div>
    )
}

export default Checkout
