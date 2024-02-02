import TaskList from './tasks/TaskList';
import Overview from './overview/Overview';
import Profile from './profile/profile';
import './App.css';
import Navigation from './navigation/Navigation';
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <>
    <div className="App">
    <Router>
      <Navigation/>
      <Switch>
        <Route path='/' exact component={TaskList} />
        <Route path='/overview' component={Overview} />
        <Route path='/profile' component={Profile} />
      </Switch>
    </Router>
    </div>
    </>
  );
}

export default App;
