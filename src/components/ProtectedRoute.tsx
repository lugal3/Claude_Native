import React from "react";
import { useIsAuthenticated } from "@azure/msal-react";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
    children: React.ReactNode;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    const isAuthenticated = useIsAuthenticated();

    if (!isAuthenticated) {
        // Redirige a la página principal si no está autenticado
        return <Navigate to="/" />;
    }

    return <>{children}</>;
};
