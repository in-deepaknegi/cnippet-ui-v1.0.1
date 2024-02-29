"use client"
import React, { useEffect } from "react";

const PaymentButton = () => {

    useEffect(() => {
        const Script = document.createElement("script");
        const Form = document.getElementById('donateForm');
        Script.setAttribute('src', 'https://checkout.razorpay.com/v1/payment-button.js')
        Script.setAttribute('data-payment_button_id', 'pl_NfV1jSlcH9A3L1')

        Form.appendChild(Script);

    }, [])

    return (
        <form id='donateForm' />
    )
}

export default PaymentButton