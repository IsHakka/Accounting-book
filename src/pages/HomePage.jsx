import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import Year from './Year/Year';
import Month from './Month/Month';


const HomePage = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout></Layout>}>
                    <Route path='year' element={<Year></Year>} />
                    <Route path='month' element={<Month></Month>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default HomePage;