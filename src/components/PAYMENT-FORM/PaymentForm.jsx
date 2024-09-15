import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Box, Button, CircularProgress, TextField, Alert } from '@mui/material';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [paymentSucceeded, setPaymentSucceeded] = useState(false);
  
  const { handleSubmit, control, formState: { errors } } = useForm();
  

  const onSubmit = async (data) => {
    setLoading(true);
    setErrorMessage('');


    if (elements == null) {
      return;
    }
    
    // Get card details from CardElement
    const cardElement = elements.getElement(CardElement);

console.log(cardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      setErrorMessage(error.message);
      setLoading(false);
    } else {
      console.log('Payment method created:', paymentMethod);
      setPaymentSucceeded(true);
      setLoading(false);
      
      // Handle backend API call with paymentMethod.id
      

      // Make API call to save payment and finalize the transaction
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ maxWidth: 400, margin: '1rem auto', p:".5rem" }}>
      
      {/* Full Name Field */}
      <Controller
        name="fullName"
        control={control}
        defaultValue=""
        rules={{ required: "Full Name is required" }}
        render={({ field }) => (
          <TextField
            {...field}
            label="Full Name"
            fullWidth
            error={!!errors.fullName}
            helperText={errors.fullName ? errors.fullName.message : ''}
            sx={{ mb: 2 }}
          />
        )}
      />

      {/* Email Field */}
      <Controller
        name="email"
        control={control}
        defaultValue=""
        rules={{
          required: "Email is required",
          pattern: {
            value: /^\S+@\S+$/i,
            message: "Invalid email address",
          },
        }}
        render={({ field }) => (
          <TextField
            {...field}
            label="Email"
            fullWidth
            error={!!errors.email}
            helperText={errors.email ? errors.email.message : ''}
            sx={{ mb: 2 }}
          />
        )}
      />

      {/* Card Element */}
      <Box sx={{ mb: 2, p: 2, border: '1px solid #ccc', borderRadius: '8px' }}>
        <CardElement options={{ hidePostalCode: true }} />
      </Box>

      {/* Submit Button */}
      <Button
        type="submit"
        variant="contained"
        color="primary"
        disabled={!stripe || loading}
        fullWidth
        startIcon={loading ? <CircularProgress size={20} /> : null}
      >
        {loading ? 'Processing...' : 'Pay'}
      </Button>

      {/* Error Alert */}
      {errorMessage && (
        <Box mt={2}>
          <Alert severity="error">{errorMessage}</Alert>
        </Box>
      )}

      {/* Success Alert */}
      {paymentSucceeded && (
        <Box mt={2}>
          <Alert severity="success">Payment successful!</Alert>
        </Box>
      )}
    </Box>
  );
};

export default PaymentForm;
