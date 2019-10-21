import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_3cnaaJYKej4ZqPMljydHlSmP00WLd4vmgd';

    const onToken = token => {
        alert('Payment Successful');
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='Ecomerace JSC'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your to tal is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;