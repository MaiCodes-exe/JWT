import React, { Component, useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useHistory } from "react-router-dom";

export const LogIn = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const changeHandler = (e) => {
    setEmail(e.target.value);
  };

  const changeHandlerPassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    actions.login(email, password);
  };

  if (store.token && store.token != "" && store.token != undefined)
    history.push("/search");
  return (
    <div className="text-center mt-5">
      <h1> Login</h1>
      <div>
        <form action="/action_page.php" id="ff" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email address:</label>
            <input
              type="email"
              className="form-control"
              id="email"
              onChange={changeHandler}
            />
          </div>
          <div className="form-group">
            <label htmlFor="pwd">Password:</label>
            <input
              type="password"
              className="form-control"
              id="pwd"
              onChange={changeHandlerPassword}
            />
          </div>
          <button type="submit" className="btn btn-default" id="ll">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};
