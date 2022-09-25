import React from "react";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../../firebase.init.js";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [toggle, setToggle] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);

  if (user) {
    navigate('/')
  }

  const handleEmailBlur = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordBlur = (e) => {
    setPassword(e.target.value);
  };
  const handleConfirmedPasswordBlur = (e) => {
    setConfirmedPassword(e.target.value);
  };

  const handleSignIn = (e) => {
    e.preventDefault();
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    if (password !== confirmedPassword) {
      setError("Password not match");
      return;
    }

    if (password < 6) {
      setError("Password should be more than 6 character!");
      return;
    }

    createUserWithEmailAndPassword(email, password);
  };

  const handleCheckbox = (e) => {
    setToggle(e.target.checked);
  };

  return (
    <section className="section">
      <div className="form-container">
        <div className="form">
          {toggle ? (
            <form onClick={handleSignUp}>
              <h2 className="form__title">Sign Up</h2>
              <div className="form__group">
                <label htmlFor="email" className="form__label">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="form__input email"
                  onBlur={handleEmailBlur}
                  required
                />
              </div>
              <div className="form__group">
                <label htmlFor="password" className="form__label">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="form__input password"
                  onBlur={handlePasswordBlur}
                />
              </div>
              <div className="form__group">
                <label htmlFor="confirmedPassword" className="form__label">
                  Confirmed Password
                </label>
                <input
                  type="password"
                  name="confirmed-password"
                  id="confirmedPassword"
                  className="form__input confirmed-password"
                  onBlur={handleConfirmedPasswordBlur}
                />
              </div>
              <button type="submit" className="form__button">
                Sign Up
              </button>
            </form>
          ) : (
            <form onSubmit={handleSignIn}>
              <h2 className="form__title">Login</h2>
              <div className="form__group">
                <label htmlFor="email" className="form__label">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="form__input email"
                />
              </div>
              <div className="form__group">
                <label htmlFor="password" className="form__label">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="form__input password"
                />
              </div>
              <button type="submit" className="form__button">
                Login
              </button>
            </form>
          )}
          <div className="form__login-register">
            <span className="form__loginRegister-demo"></span>
            <div className="flex">
              <span className="form__loginRegister-demo">
                {toggle ? "Already have an account?" : "New To Ema-John?"}
              </span>

              <input
                type="checkbox"
                name="checkbox"
                className="hidden"
                id="loginRegister"
                onClick={handleCheckbox}
              />
              <label
                htmlFor="loginRegister"
                className="form__loginRegister-text"
              >
                {toggle ? "Log in" : "Create An Account"}
              </label>
            </div>
          </div>
          <p className="form__divider">or</p>

          <button className="form__google-btn">
            <FcGoogle className="form__google-btn-icon" />
            <span>Continue with Google</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Login;
