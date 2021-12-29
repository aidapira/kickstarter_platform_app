import { useParams } from 'react-router';
import Button from '@mui/material/Button';
import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';


let stripePromise
const getStripe = () => {
    if (!stripePromise) {
        stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);
    }

    return stripePromise;
}

export default function PaymentCheckout() {
    const { name, index } = useParams();
    const [stripeError, setStripeError] = useState(null);
    const [isLoading, setLoading] = useState(false);

    const ProcessCheckout = async () => {
        setLoading(true);
        const data = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        }
        const stripe = await getStripe();

        await fetch('/create-checkout-session', data)
            .then((response) => response.json())
            .then((session) => {
                stripe.redirectToCheckout({ sessionId: session.id });
                setLoading(false);
            })
            .catch((error) => {
                console.log('Error: ', error)
                setStripeError(error.message);
            })
    }

    if (stripeError) alert(stripeError);

    return (
        <Grid container style={styles.gridContainer} justifyContent="center" alignItems="center">
            <Grid item xs={4} sm={4} md={4}>
                <Card raised={true} style={styles.cardElement} >
                    <CardHeader
                        title={'Funding ' + name}
                    />
                    <CardMedia
                        component="img"
                        height="194"
                        image={require("../static/images/image" + index + ".jpg")}
                        alt="alt"
                    />
                    <CardActions disableSpacing style={styles.cardActionElement}>
                        <Button
                            size="small"
                            onClick={ProcessCheckout}
                            disabled={isLoading}
                            variant="contained"
                        >{isLoading ? "Loading..." : "Make a Payment"}</Button>
                    </CardActions>
                </Card>
            </Grid>
        </Grid>
    )
}

const styles = {
    gridContainer: {
        padding: "40px 60px 20px 60px",
        width: "100%",
    },
    cardElement: {
        backgroundColor: '#aa66cc',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardActionElement: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: '10px',
    }
}