import React from 'react';
import { PayPalButton } from "react-paypal-button-v2";

export default function PaypalButton(props) {
    let env = 'sandbox'; // Set to 'production' for production
    let currency = 'USD';
    let vndToUsdExchangeRate = 23812;
    let total = (props.total / vndToUsdExchangeRate).toFixed(2);

    const client = {
        sandbox: 'AShELslT1WPSRdSFds8e3x4z0HGdFWr_XskIT-TSyOtzDWkYzRPK9gJGoA8xgYNAVHXN34oaKqf00IKG',
        production: 'YOUR-PRODUCTION-APP-ID',
    }

    const onSuccess = (payment) => {
        console.log("The payment was succeeded!", payment);
        props.tranSuccess(payment)
    }

    const onCancel = (data) => {
        console.log('The payment was cancelled!', data);
    }

    const onError = (err) => {
        console.log("Error!", err);
    }

    return (
        <PayPalButton
            amount={total}
            currency={currency}
            onSuccess={onSuccess}
            onCancel={onCancel}
            onError={onError}
            options={{
                clientId: env === 'production' ? client.production : client.sandbox
            }}
            client={client}
        />
    );
}
