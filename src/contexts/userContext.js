import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export default function UserProvider({children}){
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("u")));

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("u", JSON.stringify(userData));
  };

  return(
    <UserContext.Provider value={{login, user}}>
      {children}
    </UserContext.Provider>
  )
};
