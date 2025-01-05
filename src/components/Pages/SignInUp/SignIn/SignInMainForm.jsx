import { useFormik } from "formik";
import * as yup from "yup";
import css from "./SignInMainForm.module.css";
import { useDispatch } from "react-redux";
import { loginWithEmail } from "../../../../redux/Auth/operations";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

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
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        const { email, password } = values;
        await dispatch(loginWithEmail(email, password));
        navigate("/");
        resetForm();
      } catch (error) {
        console.error("Login failed:", error);
        alert("Invalid credentials. Please try again.");
      }
    },
  });
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className={css.containerForm}>
      <form className={css.form} onSubmit={formik.handleSubmit}>
        <input
          className={css.input}
          id="email"
          name="email"
          type="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Email"
        />
        {formik.touched.email && formik.errors.email ? (
          <div className={css.error}>{formik.errors.email}</div>
        ) : null}

        <div className={css.passwordWrapper}>
          <input
            className={css.input}
            id="password"
            name="password"
            type={showPassword ? "text" : "password"} // Если showPassword true, показываем пароль
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Password"
          />
          {/* Иконка глаза для отображения/скрытия пароля */}
          <span
            className={css.eyeIcon}
            onClick={togglePasswordVisibility}
            role="button"
            aria-label="Toggle password visibility"
          >
            {showPassword ? "👁️" : "🙈"}
          </span>
        </div>
        {formik.touched.password && formik.errors.password ? (
          <div className={css.error}>{formik.errors.password}</div>
        ) : null}

        <button className={css.button} type="submit">
          Submit
        </button>
        <Link to="/signup" className={css.link}>
          <button className={css.button} type="button">
            Registration Now
          </button>
        </Link>
      </form>
    </div>
  );
};

export default SignInMainForm;
