import { useFormik } from "formik";
import * as yup from "yup";
import css from "./SignInMainForm.module.css";

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

const SignInMainForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className={css.containerForm}>
      <form className={css.form} onSubmit={formik.handleSubmit}>
        <input
          className={css.input}
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Email"
        />
        <input
          className={css.input}
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Password"
        />
        <button className={css.button} type="submit">
          Submit
        </button>
        <button className={css.button} type="button">
          Registration Now
        </button>
      </form>
    </div>
  );
};

export default SignInMainForm;
