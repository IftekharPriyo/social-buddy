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
import Post from './Components/Post/Post';

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Router>
      <Switch>
      <Route path = '/home'>
        <DashBoard></DashBoard>
      </Route>
        <Route path='/posts/:Id' >
          <Post></Post>
        </Route>
        <Route exact path= '/'>
          <DashBoard></DashBoard>
        </Route>
        {/* <Route path ='*'>
          <NotFound></NotFound>
        </Route> */}
      </Switch>
    </Router>
    </div>
  );
}

export default App;
