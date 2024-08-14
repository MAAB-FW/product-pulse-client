import React, { createContext, useState } from "react";
import PropTypes from "prop-types";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "@/firebase/firebase.config";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    const authInfo = { user, loading, googleLogin, setLoading };
    return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node,
};
