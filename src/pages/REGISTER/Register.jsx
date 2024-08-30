import React from "react";
import { useSelector } from "react-redux";
import ErrorPage from "../../components/ERROR-PAGE/ErrorPage";
import AuthForm from "../../components/AUTH-FORM/AuthForm";

const Register = () => {
  const { error } = useSelector((state) => state.auth);


  return (
    <section>
      <main>
        {error ? (
          <ErrorPage />
        ) : (
          <AuthForm formType={"register"} schema={"registerSchema"} />
        )}
      </main>
    </section>
  );
};

export default Register;
