import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const { user, loading } = useContext(AuthContext);

    if (loading) return <div>Loading...</div>; // Show a loading indicator while checking authentication

    return (
        <Route
            {...rest}
            render={(props) =>
                user ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/login" />
                )
            }
        />
    );
};

export default PrivateRoute;
