import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <>
        <Outlet></Outlet>
        <div>我是layout</div>
        </>
       
    );
};

export default Layout;