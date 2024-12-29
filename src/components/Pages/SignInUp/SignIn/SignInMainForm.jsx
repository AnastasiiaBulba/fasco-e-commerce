import { useFormik } from "formik";
import * as yup from "yup";
import css from "./SignInMainForm.module.css";
import { useDispatch } from "react-redux";
import { login } from "../../../../redux/Auth/operations";
import { Link } from "react-router-dom";

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
  const dispatch = useDispatch();
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
  const handleSubmit = (values, { resetForm }) => {
    dispatch(login(values));
    resetForm();
  };

  return (
    <div className={css.containerForm}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.input}
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Email"
          required
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
          required
        />
        <button className={css.button} type="submit">
          Submit
        </button>
        <button className={css.button} type="button">
          <Link to="/signup" className={css.Link}>
            {" "}
            Registration Now
          </Link>
        </button>
      </form>
    </div>
  );
};

export default SignInMainForm;
