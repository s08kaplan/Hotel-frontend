import { Formik } from "formik";
import { loginSchema } from "../helpers/loginSchema";
import LoginForm from "../components/Login-Form/LoginForm";
import useAuthCalls from "../custom-hooks/useAuthCalls";

const Login = () => {
  const { login } = useAuthCalls()
  return (
    <main>
      <section>
        <Formik
          initialValues={{ username: "", email: "", password: "" }}
          validationSchema={loginSchema}
          onSubmit={(values, actions) => {
            login(values)
            actions.resetForm();
            actions.setSubmitting(false);
          }}
          component={(props) => <LoginForm {...props} />}
        ></Formik>
      </section>
    </main>
  );
};

export default Login;
