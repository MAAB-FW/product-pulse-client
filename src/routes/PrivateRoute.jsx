import useAuth from "@/hooks/useAuth";
import React from "react";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import Loading from "@/components/Loading";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <Loading />
            </div>
        );
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
