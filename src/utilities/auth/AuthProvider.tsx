import { useState } from "react";
import { AuthService } from "../../shared/services/Auth.service";
import { AuthContext } from "./AuthContext";

export const AuthProvider = (props: any) => {
    const { children } = props;
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(AuthService.getAuthStatus());

    const logout = () => {
        setIsAuthenticated(false);
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, logout }}>{children}</AuthContext.Provider>
    )
}
