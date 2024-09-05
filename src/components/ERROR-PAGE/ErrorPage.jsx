import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { clearError } from '../../Features/authSlice';
import { clearBookingError } from '../../Features/bookingSlice';

const ErrorPage = () => {
    const { errorMessage, error: authError  } = useSelector((state) => state.auth);
    const { bookingErrorMessage, error: bookingError } = useSelector((state) => state.booking);
    const [message, setMessage] = useState("");

    const dispatch = useDispatch();
    const location = useLocation()

    console.log(location.pathname);

    const path = location?.pathname.split("/")[1]

    useEffect(() => {
        let timer;
    
        switch (authError || bookingError) {
          case errorMessage?.includes("duplicate") &&
            errorMessage?.includes("username"):
            setMessage("Username has taken");
            timer = setTimeout(() => {
              dispatch(clearError());
            }, 3000);
    
            return () => clearTimeout(timer);
           
    
          case errorMessage?.includes("duplicate") && errorMessage?.includes("email"):
            setMessage("Email has taken");
            timer = setTimeout(() => {
              dispatch(clearError());
            }, 3000);
    
            return () => clearTimeout(timer);

          case errorMessage?.includes("duplicate") &&
            errorMessage?.includes("password"):
            setMessage("Password has taken");
            timer = setTimeout(() => {
              dispatch(clearError());
            }, 3000);
    
            return () => clearTimeout(timer);

          case errorMessage?.includes("check your username/email and password"):
            setMessage(" Credentials are wrong please check your username/email and password");
            timer = setTimeout(() => {
              dispatch(clearError());
            }, 3000);
    
            return () => clearTimeout(timer);

            case bookingErrorMessage?.includes("valid dates"):
              setMessage("Please check your dates");
              timer = setTimeout(() => {
                dispatch(clearBookingError());
              }, 3000);
      
              return () => clearTimeout(timer);
             
      
            case bookingErrorMessage?.includes("not empty at the period of time"):
              setMessage("The room you are looking for is reserved at the period of time you chose please change the date");
              timer = setTimeout(() => {
                dispatch(clearBookingError());
              }, 3000);
      
              return () => clearTimeout(timer);
  
            // case bookingErrorMessage?.includes("E11000 duplicate key error collection: blogAPI.categories"):
            //   setMessage("The category already exists");
            //   timer = setTimeout(() => {
            //     dispatch(clearBookingError());
            //   }, 3000);
      
            //   return () => clearTimeout(timer);
  
            // case bookingErrorMessage?.includes("Comment not found"):
            //   setMessage("Sorry there is no such a comment");
            //   timer = setTimeout(() => {
            //     dispatch(clearBookingError());
            //   }, 3000);
      
            //   return () => clearTimeout(timer);
  
            // case bookingErrorMessage?.includes("Blog not found"):
            //   setMessage("Blog not found");
            //   timer = setTimeout(() => {
            //     dispatch(clearBookingError());
            //   }, 3000);
      
            //   return () => clearTimeout(timer);
      
      
          default:
            setMessage("Sorry there is an error occurred just wait for 3 seconds");
            timer = setTimeout(() => {
              dispatch(clearError());
              dispatch(clearBookingError());
            }, 3000);
    
            return () => clearTimeout(timer);
        }
      }, [error, bookingError]);

    
      // console.log("error from auth : ",error);
      // console.log("errorMessage from auth : ",errorMessage);
      // console.log(" from bookingError : ",);
      // console.log("bookingError from bookingError : ",bookingError);
    
  return (
    <Box>
        <Stack>
             <Typography variant='h3'>{message}</Typography> 
             <Typography variant='h5'> 
              You will be navigated to {path} page automatically in 3 seconds
            </Typography>
        </Stack>
    </Box>
  )
}

export default ErrorPage