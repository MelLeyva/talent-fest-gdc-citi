import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from '../components/SideBar';

const Services = () => {
    return (
        <div>
            <SideBar />
            <Outlet />
        </div>
    )
}

export default Services
