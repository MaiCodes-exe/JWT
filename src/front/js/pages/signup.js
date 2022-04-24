import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const SignUp = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-5">
      <input placeholder="email"></input>
      <input placeholder="password"></input>
      <button> Click here to sign up </button>
    </div>
  );
};
