import { Form, Field, ErrorMessage } from "formik";
import { loginFormHelper } from "../../helpers/loginFormHelper";
import "./LoginForm.css";
const LoginForm = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting,
}) => {
  return (
    <main>
      <Form onSubmit={handleSubmit}>
        {loginFormHelper.map((info) => (
         
            <div className="form" key={info.name}>
              <label htmlFor={info.id}>{info.label}</label>

              <Field
                as="input"
                label={info.label}
                type={info.type}
                id={info.id}
                name={info.name}
                value={values[info.name]}
                onChange={handleChange}
                onBlur={handleBlur}
              />

              {errors[info.name] && touched[info.name] && (
                <ErrorMessage
                  name={info.name}
                  component="div"
                  className="error"
                />
              )}
            </div>
        ))}
            <select name="gender">
              Gender
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="noGender">Not wanna Share</option>
            </select>
         
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Loading" : "Submit"}
        </button>
      </Form>
    </main>
  );
};

export default LoginForm;
