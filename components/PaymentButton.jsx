"use client"
import React, { useEffect } from "react";

const PaymentButton = () => {

    useEffect(() => {
        const Script = document.createElement("script");
        //id should be same as given to form element
        const Form = document.getElementById('donateForm');
        Script.setAttribute('src', 'https://checkout.razorpay.com/v1/payment-button.js')
        Script.setAttribute('data-payment_button_id', 'pl_NfV1jSlcH9A3L1')

        Form.appendChild(Script);

        // Handling success event
        // window.addEventListener('razorpay-payment-button-click', handlePaymentSuccess);

        // return () => {
        //     window.removeEventListener('razorpay-payment-button-click', handlePaymentSuccess);
        // }
    }, [])

    // const handlePaymentSuccess = (event) => {
    //     // Logic to generate serial number after successful payment
    //     const { payment } = event.detail;
    //     const paymentId = payment.id;
    //     const serialNumber = generateSerialNumber(paymentId);

    //     // Display or handle the serial number as required
    //     console.log('Serial Number:', serialNumber);
    // }

    // const generateSerialNumber = (paymentId) => {
    //     // Example logic to generate a serial number
    //     // You can replace this with your own logic
    //     return `SN-${paymentId.substring(0, 6).toUpperCase()}`;
    // }

    return (
        <form id='donateForm' />
    )
}

export default PaymentButton