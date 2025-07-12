import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePageModule from 'pages/HomePageModule';

export const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePageModule />} />
        </Routes>
    );
};
