import { createContext, useContext } from 'react'

export const AuthContext = createContext(


  {
    isAuthenticated: false,
    logout: () => { },
    googleSignIn: async () => { }
  }
)

export const useAuth = () => useContext(AuthContext);


