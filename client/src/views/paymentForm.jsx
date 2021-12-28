import { useParams } from 'react-router';
import Button from '@mui/material/Button';
import { redirectToCheckout } from '../controllers/checkout.ts';


export default function PaymentForm() {
    const { name } = useParams();
    
    return (
        <>
            <h1>Making a payment to {name}</h1>

            <Button
                label="Continue"
                onClick={redirectToCheckout}
                variant="contained"
            >Pay</Button>
        </>
    )
}
 