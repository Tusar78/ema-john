import React from "react";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from "../../firebase.init";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');
  const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);
  const navigate = useNavigate();

  const handleEmailBlur = (e) => {
    setEmail(e.target.value);
  }

  const handlePasswordBlur = e => {
    setPassword(e.target.value);
  }

  const handleConfirmedPassword = e => {
    setConfirmedPassword(e.target.value);
  }

  const handleSignUp = (e) => {
    e.preventDefault();

    if (password !== confirmedPassword) {
      return;
    }

    if (password < 6) {
      return
    }

    createUserWithEmailAndPassword(email, password);
  };

  if (user) {
    navigate('/');
  }

  return (
    <section className="section">
      <div className="form-container">
        <div className="form">
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
                  onBlur={handleConfirmedPassword}
                />
              </div>
              <button type="submit" className="form__button">
                Sign Up
              </button>
            </form>
         
          <div className="form__login-register">
            <span className="form__loginRegister-demo"></span>
            <div className="flex">
              <span className="form__loginRegister-demo">
                Already have an account?
              </span>

              <Link className="form__loginRegister-text" to="/login">                
                Login
              </Link>
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
