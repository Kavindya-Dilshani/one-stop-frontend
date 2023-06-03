import { createContext, useContext } from 'react'

export const AuthContext = createContext(
  {
    isAuthenticated: false,
    logout: () => { }
  }
)

export const useAuth = () => useContext(AuthContext);