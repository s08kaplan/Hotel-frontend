import React from "react";
import { useSelector } from "react-redux";
import ErrorPage from "../../components/ERROR-PAGE/ErrorPage";
import AuthForm from "../../components/AUTH-FORM/AuthForm";
import  Stack  from "@mui/material/Stack";
import ErrorModal from "../../components/ERROR-MODAL/ErrorModal"


const Register = () => {
  // const { error } = useSelector((state) => state.auth);


  return (
   
      <Stack sx={{marginTop:"5rem", justifyContent:"center", alignItems: "center"}}>
          {/* <ErrorPage/> */}
          <ErrorModal/>
          <AuthForm formType={"register"} schema={"registerSchema"} />
      </Stack>
   
  );
};

export default Register;
