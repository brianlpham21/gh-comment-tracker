import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Navigation from './common/Navigation';
import Dashboard from './pages/Dashboard';
import DetailPage from './pages/DetailPage';
import Information from './pages/Information';

import '../styles/theme.scss';

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/details/:id" component={DetailPage} />
        <Route exact path="/information" component={Information} />
      </Switch>
    </Router>
  );
}

export default App;
