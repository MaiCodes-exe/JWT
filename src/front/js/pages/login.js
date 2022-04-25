import React, { useContext, useState } from "react";
export const LogIn = () => {
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
