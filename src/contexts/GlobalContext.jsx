import { createContext, useState } from "react";

export const GlobalContext = createContext()




export const Provider = ({ children }) => {

    //const [isAuthenticated, setIsAuthenticated] = useState(false || localStorage.getItem('username'))
    const [user, setUser] = useState([])
    return (
        <GlobalContext.Provider value={{ user, setUser }}>
            {children}
        </GlobalContext.Provider>
        // <GlobalContext.Provider value={{ isAuthenticated, setIsAuthenticated, user, setUser }}>
        //     {children}
        // </GlobalContext.Provider>
    )
}