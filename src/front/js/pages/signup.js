import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";
import "../../styles/home.css";

export const SignUp = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRolesChange = (e) => {
    setRoles(e.target.value);
  };

  const handleSubmit = (e) => {
    actions.signup(email, password, roles);
    setUser(true);
    console.log(e.target.value);
  };

  return (
    <div className="text-center mt-5">
      <h1>Signup</h1>
      <input placeholder="email" onChange={handleEmailChange}></input>
      <input placeholder="password" onChange={handlePasswordChange}></input>
      <button onClick={handleSubmit}> Click here to sign up </button>
    </div>
  );
};
