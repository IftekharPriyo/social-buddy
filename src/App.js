import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar/NavBar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import DashBoard from './Components/DashBoard/DashBoard';

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <DashBoard></DashBoard>
      <Router>
      <Switch>
        <Route exact path= '/'>
          <DashBoard></DashBoard>
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
