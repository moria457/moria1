import React from 'react';
import logo from './logo.svg';
import './App.css';
import {HashRouter as Router, Switch, Route, Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <Router>
        <Link to='/'>Homepage</Link>
        <Link to='/page2'>2</Link>
        <Switch>
          <Route exact path='/' component={()=>{return <h1>Homepage</h1>}}/>
          <Route path='/page2' component={()=>{return <h1>page2</h1>}}/>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
