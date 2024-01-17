import { Navigate, Outlet } from "react-router-dom";
import React from "react";


const Safe = ( ) => {
  var test = localStorage.getItem("testing");
  if (JSON.parse( test) == false) {
    return <Navigate to="/" replace />;
  }
  return <Outlet/>
};
export default Safe; 