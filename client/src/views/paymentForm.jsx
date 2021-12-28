import { useParams } from 'react-router';
import Button from '@mui/material/Button';
import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";


let stripePromise
const getStripe = () => {
    if(!stripePromise) {
        stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);
    }

    return stripePromise;
}

export default function PaymentForm() {
    const { name } = useParams();
    const [stripeError, setStripeError] = useState(null);
    const [isLoading, setLoading] = useState(false);

    const redirectToCheckout = async () => {
        setLoading(true);
        const item = {
            price: "price_1KBlwwHVXQRoPqCbdqtY9yi5",
            quantity: 1
        }
    
        const checkoutOptions = {
            lineItems: [item],
            mode: "payment",
            successUrl: `${window.location.origin}/payment-success`,
            cancelUrl: `${window.location.origin}/payment-cancel`,
        }
    
        const stripe = await getStripe();
        const { error} = await stripe.redirectToCheckout(checkoutOptions);

        if(error) setStripeError(error.message);

        setLoading(false);
    }
    
    if(stripeError) alert(stripeError);

    return (
        <>
            <h1>Making a payment to {name}</h1>

            <Button
                label="Continue"
                onClick={redirectToCheckout}
                variant="contained"
                disabled={isLoading}
            >{isLoading ? "Loading..." :  "Pay"}</Button>
        </>
    )
}
 