import { createContext } from "react";

export const UserContext = createContext(null);
const UserProviders = ({ children }) => {
    const user = { displayName: "Omar Faruk" }
    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProviders;