import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const ProtectedRoute = ({ children, allowedRoles = [] }) => {
    const { isAuthenticated, hasRole, user } = useAuth();

    // Check for third-party authentication (government officer)
    const thirdPartyToken = localStorage.getItem('thirdPartyToken');
    const thirdPartyUser = localStorage.getItem('thirdPartyUser');
    const isThirdPartyAuthenticated = thirdPartyToken && thirdPartyUser;

    // If not authenticated, redirect to appropriate login
    if (!isAuthenticated() && !isThirdPartyAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    // If roles are specified, check if user has required role
    if (allowedRoles.length > 0) {
        // Check if this is a third-party government officer request
        if (allowedRoles.includes('government_officer') && isThirdPartyAuthenticated) {
            const parsedThirdPartyUser = JSON.parse(thirdPartyUser);
            if (parsedThirdPartyUser.role === 'government_officer') {
                return children; // Allow third-party access
            }
        }

        // Check admin/lsa roles
        if (!hasRole(allowedRoles)) {
            // Redirect to appropriate dashboard based on user role
            if (user) {
                switch (user.role) {
                    case 'admin_lsa':
                    case 'super_admin':
                    case 'admin':
                    case 'financial_officer':
                        return <Navigate to="/adminLSA" replace />;
                    case 'admin_spa':
                        return <Navigate to="/adminSPA" replace />;
                    case 'government_officer':
                        return <Navigate to="/third-party-dashboard" replace />;
                    default:
                        return <Navigate to="/" replace />;
                }
            }
            return <Navigate to="/login" replace />;
        }
    }

    // User is authenticated and has correct role
    return children;
};

export default ProtectedRoute;
