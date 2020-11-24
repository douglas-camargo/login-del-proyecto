import React from 'react'
import { Route, Redirect } from 'react-router-dom'
//Rutas privadas
const Protected = ({ component: Component, ...rest }) => {
  
  const userLogged = true
//   const userLogged = localStorage.getItem('id')

   if (!userLogged) {
     return <Redirect to="/login" />
   }

  return (
    <Route {...rest} component={Component} />
  )
}

export default Protected