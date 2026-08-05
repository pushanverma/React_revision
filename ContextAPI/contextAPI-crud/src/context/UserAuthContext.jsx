import { createContext, useState } from "react";

//1. Creating the context

export const AuthContext = createContext();

//2. Making a Provider Function , to make the syntax looks easy

export const AuthProvider = ({ children }) => {
  let [user, setUser] = useState();

  let logIn = () => {
    console.log("logIn Called");
    
  };

  let logOut = () => {
    console.log("logOut Called");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        logIn,
        logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
