import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const PublicRoute = () => {
    const {loggedIn} = useSelector((state) => state.auth);

    console.log('PublicRoute loggedIn:', loggedIn);

    if (loggedIn) {
        return (
            <Navigate to='/' replace />
        );
    }

    return (
        <Outlet />
    );
}

export default PublicRoute;