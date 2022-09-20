import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Shop from './Shop';
import Edit from './Edit';

const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<App />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/edit" element={<Edit />} />
        </Routes>
    </BrowserRouter>
);

export default Router;