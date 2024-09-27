import React, { createContext, useState, useEffect, ReactNode } from "react";

interface IUser {
  name: string;
  email: string;
  role: string;
}

interface IAuthContext {
  user: any;
  login: (userData: IUser) => void;
  logout: () => void;
  update: (name: string) => void;
}

export const AuthContext = createContext<IAuthContext | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (userData: IUser) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const update = (name: string) => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const userData = JSON.parse(storedUser);
      userData.name = name;
      localStorage.setItem("user", JSON.stringify(userData));
      setUser(userData);
    } else {
      console.error("No user found in local storage");
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("accessToken");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, update }}>
      {children}
    </AuthContext.Provider>
  );
};
