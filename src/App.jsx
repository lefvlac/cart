import React, { useState, useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Cart from "./components/cart/Cart";
import AuthContext from "./store/auth-context";
import Home from "./pages/home/Home";
const App = () => {
  const userCtx = useContext(AuthContext);
  const [showCart, setShowCart] = useState(true);

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
