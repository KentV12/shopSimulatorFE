import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

const ProtectedRoutes = ({JWT}) => {

  const validate = () => {
    return JWT !== "";
  }

  return validate() ? <Outlet /> : <Navigate to='/' />
}

export default ProtectedRoutes