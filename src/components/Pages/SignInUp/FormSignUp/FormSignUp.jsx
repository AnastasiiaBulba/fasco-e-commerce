import css from "./FormSignUp.module.css";

const FormSignUp = ({ signUp }) => {
  return (
    <div className={css.containerForm}>
      <form className={css.form} onSubmit={signUp}>
        <div className={css.formGroup}>
          <input
            className={css.input}
            id="name"
            name="name"
            label="Name"
            placeholder="Name"
          />
          <input
            type="lastName"
            className={css.input}
            id="lastName"
            name="lastName"
            label="Last Name"
            placeholder="Last Name"
          />

          <input
            className={css.input}
            id="email"
            name="email"
            label="Email"
            placeholder="Adress Email"
          />
          <input
            className={css.input}
            id="phone"
            name="phoneNumber"
            label="Phone"
            placeholder="Phone Number"
          />
          <input
            className={css.input}
            id="password"
            name="password"
            label="Password"
            placeholder="Password"
          />
          <input
            className={css.input}
            id="confirmPassword"
            name="confirmPassword"
            label="Confirm Password"
            placeholder="Confirm Password"
          />
        </div>
        <button className={css.button} type="submit">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default FormSignUp;
