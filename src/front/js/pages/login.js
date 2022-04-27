import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useHistory } from "react-router-dom";

export const LogIn = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      actions.setToken(localStorage.getItem("token"));
      history.push("/");
    }
  }, []);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="text-center mt-5">
      <h1> Login</h1>
      <div>
        <input
          placeholder="email"
          value={email}
          onChange={handleEmailChange}
        ></input>
        <input
          placeholder="password"
          value={password}
          onChange={handlePasswordChange}
        ></input>
        <button onClick={handleClick}> Log in </button>
      </div>
    </div>
  );
};
