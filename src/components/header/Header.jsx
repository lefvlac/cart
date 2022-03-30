import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../store/auth-context";

import "./Header.css";
const Header = () => {
  const userCtx = useContext(AuthContext);
  // const navigate = useNavigate();
  return (
    <header className="header">
      <div className="title">
        <Link to="/">My Shop</Link>
      </div>
      <ul>
        {!userCtx.isLoggedIn && (
          <li>
            <Link to="/login">
              <button className="btn">Login</button>
            </Link>
          </li>
        )}
        {userCtx.isLoggedIn && (
          <li>
            <button className="btn" onClick={userCtx.onLogout}>
              Logout
            </button>
          </li>
        )}
        {/* <li>
          <Link to="/register">Register</Link>
        </li> */}
        {userCtx.isLoggedIn && (
          <li>
            <button className="btn">Cart</button>
          </li>
        )}
      </ul>
    </header>
  );
};

export default Header;
