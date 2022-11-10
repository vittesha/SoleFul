import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from '../pages/App';
import Shop from '../pages/Shop';
import About from '../pages/About';
import Inventory from './Inventory';
import Login from './Login';

const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<App />} />
            <Route path="/about" element={<About />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    </BrowserRouter>
);

export default Router;