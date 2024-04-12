import { object, string } from "yup";

export const loginSchema = object({
    
  username: string().required("Please enter your username"),

  email: string()
    .email("Enter a valid email address please")
    .required("Email is necessary to keep in touch 😉")
    .test(
      "email-validation",
      "Please enter a valid email address",
      function (value) {
        return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(value);
      }
    ),

  password: string()
    .required("Password is required")
    .min(8, "min. 8 characters needed")
    .max(20, "Password must be max. 20 characters")
    .matches(/\d+/, "at least one number is required")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[A-Z]/, "Password must contain at least one UPPERCASE letter")
    .matches(
      /[!/[@$!%*?&]+/,
      "password must contain at least one special (!/[@$!%*?&) character"
    ),
});
