import React from "react";
import { useSelector } from "react-redux";
import ErrorPage from "../../components/ERROR-PAGE/ErrorPage";
import AuthForm from "../../components/AUTH-FORM/AuthForm";
import LoginForm from "../../components/FORM-INPUTS/LoginForm";
import { Stack } from "@mui/material";

const Login = () => {
  const { error } = useSelector((state) => state.auth);
 
  return (
      <Stack sx={{justifyContent:"center", alignItems: "center"}}>
        {error ? (
          <ErrorPage/>
        ) : (
          <Stack sx={{justifyContent:"center", alignItems: "center"}}>
            <AuthForm formType={"login"} schema={"loginSchema"}/>
          </Stack>
        )}
      </Stack>
    
  );
};

export default Login;
