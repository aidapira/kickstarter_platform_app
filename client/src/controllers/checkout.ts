import { loadStripe } from "@stripe/stripe-js";

let stripePromise
const getStripe = () => {
    if(!stripePromise) {
        stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);
    }

    return stripePromise;
}


export const redirectToCheckout = async () => {
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
    const { error} = await stripe.redirectToCheckout(checkoutOptions)
    console.log("Stripe checkout error", error)

}