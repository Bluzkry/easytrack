import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import './components/home/Home.scss';
import Home from './components/home/Home';
import Admin from './components/admin/Admin';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/admin'>
          <Admin />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
