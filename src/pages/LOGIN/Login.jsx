import React from "react";
import { useSelector } from "react-redux";
import ErrorPage from "../../components/ERROR-PAGE/ErrorPage";
import AuthForm from "../../components/AUTH-FORM/AuthForm";
import LoginForm from "../../components/FORM-INPUTS/LoginForm";
import { Stack } from "@mui/material";

const Login = () => {
  const { error } = useSelector((state) => state.auth);
 
  return (
      <section>
        {error ? (
          <ErrorPage/>
        ) : (
          <Stack>
            <LoginForm/>
          </Stack>
        )}
      </section>
    
  );
};

export default Login;
