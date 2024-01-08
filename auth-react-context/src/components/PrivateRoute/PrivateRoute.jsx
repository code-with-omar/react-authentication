import React, { Children, useContext } from 'react';
import { UserContext } from '../Provider/UserProviders';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user } = useContext(UserContext);
    if (user) {
        return children;
    }

    return <Navigate to="/login"></Navigate>

};

export default PrivateRoute;