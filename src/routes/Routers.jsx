import React from 'react';
import Home from "../pages/Home.jsx";
import Services from "../pages/Services.jsx";
import Login from "../pages/Login.jsx";
import Signup from "../pages/Signup.jsx";
import Contact from "../pages/Contact.jsx";
import Mechanics from "../pages/Mechanics/Mechanics.jsx";
import MechanicDetails from "../pages/Mechanics/MechanicDetails.jsx";
import Warehouse from "../pages/WarehouseSystem.jsx";
import MyAccount from "../Dashboard/user-account/MyAccount.jsx";
import Dashboard from "../Dashboard/mechanic-account/Dashboard.jsx";
import {Routes, Route} from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute.jsx";
import CheckoutSuccess from "../pages/CheckoutSuccess.jsx";

const Routers = () => {
    return <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/mechanics" element={<Mechanics/>}/>
        <Route path="/mechanics/:id" element={<MechanicDetails/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Signup/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route
            path="/warehouse"
            element={
            <ProtectedRoute allowedRoles={["mechanic"]}>
                <Warehouse/>
            </ProtectedRoute>
        }
        />
        <Route
            path="/users/profile/me"
            element={
            <ProtectedRoute allowedRoles={["customer"]}>
                <MyAccount/>
            </ProtectedRoute>
        }
        />
        <Route
            path="/mechanics/profile/me"
            element={
            <ProtectedRoute allowedRoles={["mechanic"]}>
                <Dashboard/>
            </ProtectedRoute>
        }
        />
        <Route path="/checkout-success" element={<CheckoutSuccess />} />
    </Routes>
};

export default Routers;
