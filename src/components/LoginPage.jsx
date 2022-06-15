import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./LoginPage.module.css";

const LoginPage = () => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const onChangeCall = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  return (
    <div className={style.container}>
      <div className={style["login-card-Container"]}>
        <h2 className={style.loginH2}>Log In</h2>
        <input
          className={style.loginInput}
          type="email"
          name="email"
          placeholder="Email"
          onChange={onChangeCall}
        />
        <input
          className={style.loginInput}
          type="password"
          name="password"
          placeholder="Password"
          onChange={onChangeCall}
        />
        <div className={style.buttonContainer}>
          <button
            className={style.loginButton}
            onClick={() => {
              navigate("/createblog");
              console.log(state);
            }}
          >
            Log In
          </button>
          <button
            className={style.loginButton}
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

export default LoginPage;
