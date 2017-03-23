import React, {Component} from 'react';
import './App.css';
import Sidebar from './components/Sidebar'
import {Router, Route, hashHistory} from 'react-router';

// Routes
import Home from './routes/home'
import Test from './routes/test'

class App extends Component {
  render() {
    return (
      <div>
        <Sidebar/>
        <div className="pages">
          <Router history={hashHistory}>
            <Route path='/' component={Home}/>
            <Route path='/test' component={Test}/>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
