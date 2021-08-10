import React from 'react'
import useStyles from './styles';
import { useEffect, useState } from 'react';
import AddressForm from './Forms/AddressForm';
import PaymentForm from './Forms/PaymentForm';
import { CssBaseline, Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button } from '@material-ui/core';
function Checkout() {
    const steps = ['Shipping address','Payment details'];
    const [activeStep, setActiveStep] = useState(0);
    const classes = useStyles();
    const Confirmation = ()=>
    {
        <div>hi</div>
    }
    const Form=()=> activeStep===0 ? <AddressForm/> : <PaymentForm/>
    return (
        <div>
        <div className={classes.toolbar} />
        <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography variant="h4" align="center">Checkout</Typography>
          <Stepper activeStep={0} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? <Confirmation/> : <Form/>}
        </Paper>
      </main>
        </div>
    )
}

export default Checkout
