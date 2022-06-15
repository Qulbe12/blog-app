import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import style from "./signup.module.css";

const SignUp = () => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeCall = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  return (
    <div className={style.mainContainer}>
      <div className={style.cardContainer}>
        <h2 className={style.signupH2}>Sign Up</h2>
        <input
          className={style.signupInput}
          type="text"
          name="name"
          placeholder="Full Name"
          onChange={onChangeCall}
        />
        <input
          className={style.signupInput}
          type="text"
          name="email"
          placeholder="Email"
          onChange={onChangeCall}
        />
        <input
          className={style.signupInput}
          type="password"
          name="password"
          placeholder="Password"
          onChange={onChangeCall}
        />
        <div className={style.buttonContainer}>
          <button
            className={style.signupButton}
            onClick={() => {
              console.log(state);
            }}
          >
            Sign Up
          </button>
          <button
            className={style.signupButton}
            onClick={() => {
              navigate("/");
              console.log(state);
            }}
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
