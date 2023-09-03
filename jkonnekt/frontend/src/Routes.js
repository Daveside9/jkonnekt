import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Products from './components/Products';
import Login from './components/Login';
import Signup from './Components/Signup';
import ProductsPage from './views/ProductsPage';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/products" exact component={Products} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/products-page" exact component={ProductsPage} />
        {/* Add more routes as needed */}
      </Switch>
    </Router>
  );
}

export default Routes;
