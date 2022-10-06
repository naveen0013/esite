import React from 'react'
import { Outlet ,Navigate } from 'react-router-dom'

function ProtectedRoute(data) {
  console.log(data)
  if(data.data.activeUser&&data.data.activeUser.username==='admin'){
    return <Outlet />
  }else{
    return <Navigate to={'/login'} />
  }
}

export default ProtectedRoute