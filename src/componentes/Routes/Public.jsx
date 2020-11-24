import React from 'react'
import { Route, Redirect } from 'react-router-dom'
//Rutas Publicas
const Public = ({ component: Component, ...rest }) => {
  
    const userLogged = false
    //   const userLogged = localStorage.getItem('id')
    
       if (userLogged) {
         return <Redirect to="/" />
       }
    
      return (
        <Route {...rest} component={Component} />
      )
      }
export default Public
