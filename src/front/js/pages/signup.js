import React, { Component, useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useForm } from "react-hook-form";
import "../../styles/home.css";
import { Link, useHistory } from "react-router-dom";

export const SignUp = () => {
  const { store, actions } = useContext(Context);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    actions.signUp(data);
  };

  return (
    <div className="text-center mt-5">
      <h1>Signup</h1>
      <form onSubmit={handleSubmit(onSubmit)} id="box">
        <input
          type="text"
          placeholder="Email"
          {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
          id="input3"
        />
        <input
          type="password"
          placeholder="Password"
          {...register("Password", { required: true, maxLength: 40 })}
          id="input4"
        />
        <div>
          <button type="submit" className="btn btn-default" id="bb">
            Sign Up
          </button>
        </div>
      </form>
      <span>
        Already have an account? Click here to
        <Link to="/login"> log in</Link>
      </span>
    </div>
  );
};
