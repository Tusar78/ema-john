import React from "react";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailBlur = e => {
    setEmail(e.target.value);
  }

  const handlePasswordBlur = (e) => {
    setPassword(e.target.value);
  }

  const handleSignIn = (e) => {
    e.preventDefault();
  };

  return (
    <section className="section">
      <div className="form-container">
        <div className="form">
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
          <div className="form__login-register">
            <span className="form__loginRegister-demo"></span>
            <div className="flex">
              <span className="form__loginRegister-demo">New To Ema-John?</span>
              <Link className="form__loginRegister-text" to="/registration">                
                Create An Account.
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
