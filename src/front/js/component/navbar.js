import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">JWT Project</span>
        </Link>
        <div className="ml-auto">
          <div>
            <div className="d-flex">
              <button type="button" className="btn" id="button1">
                <Link to="/login" id="log">
                  Login
                </Link>
              </button>
              <button type="button" className="btn" id="sign">
                <Link to="/signup" id="ss">
                  Sign Up
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
