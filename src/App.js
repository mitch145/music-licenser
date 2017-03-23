import React, {Component} from 'react';
import './App.css';
import Sidebar from './components/Sidebar'
import {Router, Route, hashHistory} from 'react-router';

// Routes
import HomePage from './routes/home';
import ArtistPage from './routes/profile/artist';
import UserPage from './routes/profile/user';
import TrackPage from './routes/track';


class App extends Component {
  render() {
    return (
      <div>
        <Sidebar/>
        <div className="pages">
          <Router history={hashHistory}>
            <Route path='/' component={HomePage}/>
            <Route path='/profile/artist' component={ArtistPage}/>
            <Route path='/profile/user' component={UserPage}/>
            <Route path='/track' component={TrackPage}/>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
