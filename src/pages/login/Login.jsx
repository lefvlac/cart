import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../store/auth-context";
import "./Login.css";
const Login = () => {
  const userCtx = useContext(AuthContext);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };
  return (
    <>
      <section className="heading">
        <p>Login and Start Shoping</p>
      </section>
      <section className="form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label forhtml="username">Username</label>
            <input
              id="username"
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <div className="form-group">
              <label forhtml="password">Password</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group">
            <button className="btn" type="submit" onClick={userCtx.onLogin}>
              Login
            </button>
          </div>
          <div>
            <p>
              If you have no account, please
              <a href="/register" className="link">
                {" "}
                register here
              </a>
            </p>
          </div>
        </form>
      </section>
    </>
  );
};

export default Login;
