"use client"

// src/context/AuthContext.js
import React, {useEffect, createContext, useState, useContext } from 'react';

// Create a Context
const AuthContext = createContext();

// Create a custom hook to use the AuthContext
const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const login = (userData) => {
        setUser(userData);
        setIsAuthenticated(true)
        localStorage.setItem('user', JSON.stringify(userData));
    };

    const logout = () => {
        setUser(null);
        setIsAuthenticated(false)
        localStorage.removeItem('user');
    };

    return (
        <AuthContext.Provider value={{isAuthenticated, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthProvider, useAuth };
