import { createContext, useState } from "react";

const UserContext = createContext();

export function AuthProvider({ children }) {
  const userAuth = JSON.parse(localStorage.getItem('user'));
  const [user, setUser] = useState(userAuth);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  }

  const logoff = () => {
    setUser('');
    localStorage.removeItem('user');
  }

  return (
    <UserContext.Provider value={{ user, login, logoff }}>
      {children}
    </UserContext.Provider>
  );
}
