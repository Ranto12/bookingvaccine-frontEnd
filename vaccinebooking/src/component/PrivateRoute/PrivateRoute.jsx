import React from 'react'
import {Route, Navigate} from "react-router-dom"
import Cookies from 'universal-cookie'; 
import { Outlet } from 'react-router-dom'
const cookies = new Cookies();


const PrivateRoute=()=> {
const isAuthenticated = localStorage.getItem('token');
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}

const  PrivateRouteLogRes=()=> {
const isAuthenticated = localStorage.getItem('token');
  return isAuthenticated ? <Navigate to="/login"/>: <Outlet />;
}
export {PrivateRoute, PrivateRouteLogRes };