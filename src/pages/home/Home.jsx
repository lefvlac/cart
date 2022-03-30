import React, { useContext } from "react";
import AuthContext from "../../store/auth-context";
import Cart from "../../components/cart/Cart";
import Login from "../login/Login";
const Home = () => {
  const userCtx = useContext(AuthContext);
  return (
    <>
      {userCtx.isLoggedIn && <Cart />}
      {!userCtx.isLoggedIn && <Login />}
    </>
  );
};

export default Home;
