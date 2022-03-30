import React, { createContext, useEffect, useState } from "react";

const AuthContext = createContext({
  isLoggedIn: false,
  onLogin: () => {},
  onLogout: () => {},
});

export const AuthProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const storedUserInformation = localStorage.getItem("isLoggedIn");
    if (storedUserInformation === "1") {
      setIsLoggedIn(true);
    }
  }, []);
  const loginHandler = () => {
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };
  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogin: loginHandler,
        onLogout: logoutHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
