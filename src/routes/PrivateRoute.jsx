import useAuth from "@/hooks/useAuth";
import React from "react";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    if (loading) {
        return <>Loading...</>;
    }
    if (!user) {
        return <Navigate to={"/login"}></Navigate>;
    }

    return <>{children}</>;
};

export default PrivateRoute;
PrivateRoute.propTypes = {
    children: PropTypes.node,
};
