import {jwtDecode} from "jwt-decode";

import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext()


export const Provider = ({ children }) => {

    const token = localStorage.getItem("token");
    const decodedUser = token ? jwtDecode(token) : null
    const [user, setUser] = useState(decodedUser)
    const [isAuthenticated, setIsAuthenticated] = useState(!!token)


    return (
        <GlobalContext.Provider value={{ user, setUser, isAuthenticated, setIsAuthenticated }}>
            {children}
        </GlobalContext.Provider>

    )
}
