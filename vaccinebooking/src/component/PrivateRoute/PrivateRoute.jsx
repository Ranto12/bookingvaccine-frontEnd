import React from 'react'
import {Outlet, Navigate} from "react-router-dom"


const PrivateRoute=()=> {
const isAuthenticated = localStorage.getItem('token');
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}

const  PrivateRouteLogRes=()=> {
const isAuthenticated = localStorage.getItem('token');
  return isAuthenticated ? <Navigate to="/login"/> : <Outlet />;
}
export {PrivateRoute, PrivateRouteLogRes };