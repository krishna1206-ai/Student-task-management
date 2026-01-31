import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="form-container">
      <h1 className="form-title">Welcome Back</h1>  
      {/* Login form   */}
      <form action="">
        {/* Email */}
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
          />
        </div>

        {/* Password */}
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"//attribute
            id="password"
            name="password"
            placeholder="Enter your password"
          />
          {/* Submit */}
          <button type="submit" className="btn-primary" >Login</button>
        </div>
      </form>
      <p className="link-text">
        Don't have an account? <Link to="/register">Register here</Link>
      </p>
    </div>
  );
};

export default Login;
