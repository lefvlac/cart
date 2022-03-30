import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";
const Register = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/login");
  };
  return (
    <>
      <section className="heading">
        <p>Register</p>
      </section>
      <section className="form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label forHtml="username">Username</label>
            <input
              id="username"
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <div className="form-group">
              <label forHtml="password">Password</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group">
            <button type="submit">Sign Up</button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Register;
