import { createContext } from "react";
import Auth from "./utils/auth";

export const AuthContext = createContext({
    isLoggedIn: false,
    token: null,
    login: Auth.login(),
    logout: Auth.logout()
});