import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Shop from './Shop';
import Edit from './Edit';
import SignIn from './SignIn';
import SignUp from './SignUp';

const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<App />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/edit" element={<Edit />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
        </Routes>
    </BrowserRouter>
);

export default Router;