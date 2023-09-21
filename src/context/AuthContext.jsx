import { createContext, useContext, useState } from "react";


const AuthContext = createContext(null);

const AuthProvider = props => {
    const [info, setInfo] = useState({});
    console.log(info);
    return <AuthContext.Provider value={ [info, setInfo] } { ...props }></AuthContext.Provider>
}

const useAuth = () => {
    const context = useContext(AuthContext);
    if (typeof context === 'undefined') {
        throw new Error(`Component phai nam trong Provider`);
    }
    return context;
}

export { AuthProvider, useAuth }
