/* eslint-disable react/prop-types */
import React from 'react';
import {AuthContext} from "../context/AuthContext.jsx";
import {useContext} from "react";
import {Navigate} from "react-router-dom";

function ProtectedRoute ({children, allowedRoles}) {
    const {token, role} = useContext(AuthContext);
    //weryfikacja roli i sprawdzenie czy rola obecnego użytkownika zgodna jest z akceptowaną rolą
    const isRoleAllowed = allowedRoles.includes(role);
    // gdy weryfikacja roli nie przejdzie pomyślnie, użytkownik zostanie przekierowany do strony logowania
    const accessibleRoute = token && isRoleAllowed ? children : <Navigate to="/home" replace={true} />;

    return accessibleRoute;
}

export default ProtectedRoute;
