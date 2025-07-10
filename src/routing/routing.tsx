import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePageMF } from 'pages/HomePageMF';

export const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePageMF />} />
        </Routes>
    );
};
