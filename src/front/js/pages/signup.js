import React, { Component, useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useForm } from "react-hook-form";
import "../../styles/home.css";

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
  const newSign = () => {
    return alert("Thank your signing up");
  };
  return (
    <div className="text-center mt-5">
      <h1>Signup</h1>
      <form onSubmit={handleSubmit(onSubmit)} id="box">
        <input
          type="text"
          placeholder="First name"
          {...register("First name", { required: true, maxLength: 80 })}
          id="input1"
        />
        <input
          type="text"
          placeholder="Last name"
          {...register("Last name", { required: true, maxLength: 100 })}
          id="input2"
        />
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
        <button
          type="submit"
          className="btn btn-default"
          id="bb"
          onClick={newSign}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};
