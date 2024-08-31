import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import useAuthCalls from "../../custom-hooks/useAuthCalls";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema, registerSchema } from "../../Helpers/formValidation";
import { formRegisterInputs, formLoginInputs } from "../../Helpers/formInputs";
// import { DevTool } from "@hookform/devtools";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from "./MyButton"

const schemaMap = {
  loginSchema,
  registerSchema,
};


export default function LoginForm() {
  const { registerUser, login } = useAuthCalls();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  
  const resolvedSchema = schemaMap[schema];

  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    setValue,
    getValues,
    reset,
  } = useForm({ resolver: yupResolver(resolvedSchema) });


  const onSubmit = (data) => {
    console.log("submit data", data);
    formType == "register"
      ? dispatch(registerUser(data))
      : dispatch(login(data));
  };

  useEffect(() => {
    isSubmitSuccessful && reset();
  }, [isSubmitSuccessful, reset]);

  const handleNavigate = () => {
    formType === "login" ? navigate("/register") : navigate("/login");
  };

  const handleLogin = () => {

  }

  return (
    <Box
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, display:"flex", justifyContent:"center", alignItems:"center"}}
      noValidate
      autoComplete="off"
    >
      <Stack sx={{justifyContent:"center", alignItems:"center",border:"2px solid gray", width:"25rem", height:"30rem", borderRadius:".4rem", boxShadow:"0 4px 10px rgba(0, 0, 0, 0.3)"}}>
        <TextField
          required
          id="outlined-username-input"
          label="Username"
          type='text'
        />
        <TextField
          required
          id="outlined-email-input"
          label="Email"
          type='text'
        />
        <TextField
        required
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
      <Button onClick={handleLogin}/>
      </Stack>
    </Box>
  );
}