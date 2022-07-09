import React from 'react'
import {Outlet, Navigate} from "react-router-dom"


const PrivateRoute=()=> {
const isAuthenticated = localStorage.getItem('token');
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}

const  PrivateRouteLogRes=()=> {
const isAuthenticated = localStorage.getItem('token');
  return isAuthenticated ? <Navigate to="/Dashboard"/> : <Outlet />;
}
export {PrivateRoute, PrivateRouteLogRes };

// import React from 'react'
// import {Outlet, Navigate} from "react-router-dom"


// const PrivateRoute=()=> {
// const isAuthenticated = localStorage.getItem('token');
//   return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
// }

// const  PrivateRouteLogRes=()=> {
//   if(localStorage.getItem('roles') === "ADMIN" || localStorage.getItem('token') ){
//     return <Navigate to="/Dashboard"/>
//   } else{
//     return <Outlet />
//   }
// }
// const  PrivateSuperAdmin=()=> {
//   if(localStorage.getItem('roles') === "SUPER ADMIN" || localStorage.getItem('token') ){
//     return <Navigate to="/Dashboard"/>
//   } else{
//     return <Outlet />
//   }
// }
// export {PrivateRoute, PrivateRouteLogRes , PrivateSuperAdmin};