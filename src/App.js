import React from 'react';
import './styles/styles.scss';
import Login from  './componentes/Pages/Login'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Page404 from './componentes/Pages/Page404'
import DashboardCompras from './componentes/Pages/DashboardCompras'
import DashboardVentas from './componentes/Pages/DashboardVentas'
import SeguridadMain from './componentes/Pages/SeguridadMain'
import Protected from './componentes/Routes/Protected'
import Public from './componentes/Routes/Public'

const App = () =>(

<Router>
    <Switch>

      <Protected path="/seguridadmain" exact component={SeguridadMain} />
      <Protected path="/dashboardventas" exact component={DashboardCompras} />
      <Protected path="/dashboardcompras" exact component={DashboardVentas} />

      <Public path="/" exact component={Login} />

      <Route component={Page404} />

    </Switch>
  </Router>
)
export default App