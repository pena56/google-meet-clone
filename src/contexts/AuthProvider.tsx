import React, { useContext, createContext, useState, FC } from "react";

interface AuthInterface {
  username: string;
  handleLogin: (name: string) => void;
}

const AuthContext = createContext<AuthInterface | null>(null);

export function useAuth() {
  return useContext(AuthContext) as AuthInterface;
}

const AuthProvider: FC = ({ children }) => {
  const [username, setUsername] = useState("");

  const handleLogin = (name: string) => {
    setUsername(name);
  };

  return (
    <AuthContext.Provider value={{ username, handleLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
