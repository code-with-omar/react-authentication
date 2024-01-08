import React, { Children, useContext } from 'react';
import { UserContext } from '../Provider/UserProviders';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user,userLoding } = useContext(UserContext);
    if(userLoding){
       return <h2>Waiting</h2>
    }
    if (user) {
        return children;
    }

    return <Navigate to="/login"></Navigate>

};

export default PrivateRoute;