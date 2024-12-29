import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./FormSignUp.module.css";
import { registration } from "../../../../redux/Auth/operations";
import { useDispatch } from "react-redux";

const FormSignUp = () => {
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phoneNumber: Yup.string()
      .matches(/^\+?[0-9]{10,15}$/, "Invalid phone number")
      .required("Phone number is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm password is required"),
  });

  const initialValues = {
    name: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  };

  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    console.log("Form values:", values);
    dispatch(registration(values));
    resetForm();
  };

  return (
    <div className={css.containerForm}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className={css.form}>
            <div className={css.formGroup}>
              <Field
                className={css.input}
                id="name"
                name="name"
                placeholder="Name"
              />
              <ErrorMessage className={css.error} name="name" component="div" />

              <Field
                className={css.input}
                id="lastName"
                name="lastName"
                placeholder="Last Name"
              />
              <ErrorMessage
                className={css.error}
                name="lastName"
                component="div"
              />

              <Field
                className={css.input}
                id="email"
                name="email"
                placeholder="Email"
              />
              <ErrorMessage
                className={css.error}
                name="email"
                component="div"
              />

              {/* Поле телефона */}
              <Field
                className={css.input}
                id="phone"
                name="phoneNumber"
                placeholder="Phone Number"
              />
              <ErrorMessage
                className={css.error}
                name="phoneNumber"
                component="div"
              />

              {/* Поле пароля */}
              <Field
                className={css.input}
                id="password"
                name="password"
                type="password"
                placeholder="Password"
              />
              <ErrorMessage
                className={css.error}
                name="password"
                component="div"
              />

              {/* Поле подтверждения пароля */}
              <Field
                className={css.input}
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="Confirm Password"
              />
              <ErrorMessage
                className={css.error}
                name="confirmPassword"
                component="div"
              />
            </div>

            {/* Кнопка отправки */}
            <button
              className={css.button}
              type="submit"
              disabled={isSubmitting}
            >
              Create Account
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormSignUp;
