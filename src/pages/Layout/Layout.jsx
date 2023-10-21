import React from 'react';
import { Outlet } from 'react-router-dom';
import { Button } from 'antd-mobile';

const Layout = () => {
    return (
        <>
            <Outlet></Outlet>
            <div>我是layout</div>
            <Button color='primary'>測試</Button>
        </>

    );
};

export default Layout;