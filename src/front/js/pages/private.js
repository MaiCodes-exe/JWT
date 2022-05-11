import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

import "../../styles/home.css";

export const Private = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-5">
      <h1> Welcome. You are now logged in</h1>
      <button type="button" className="btn" id="los">
        <Link to="/">LogOut</Link>
      </button>
    </div>
  );
};
