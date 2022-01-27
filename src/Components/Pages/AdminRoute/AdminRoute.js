import { CircularProgress } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { selectData } from '../../../data/dataSlice';

const AdminRoute = ({ children }) => {
    const data = useSelector(selectData);
    let location = useLocation();
    if (data.loading) {
        return <div className='flex justify-center items-center h-screen'>
            <CircularProgress />
        </div>
    }
    if (!data?.user?.email) {
        return <Navigate to="/login" state={{ from: location }} />;
    }
    if (!data?.isAdmin) {
        return <Navigate to="/" state={{ from: location }} />;
    }
    return (
        <>
            {children}
        </>
    );
};

export default AdminRoute;