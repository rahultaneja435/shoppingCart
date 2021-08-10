import React from 'react'
import { Typography, Button, Divider } from '@material-ui/core';
import { Elements, CardElement, ElementsConsumer } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Review from './Review';

function PaymentForm({checkOutToken}) {
    return (
        <div>
            <Review checkoutToken={checkOutToken}/>
        </div>
    )
}

export default PaymentForm
