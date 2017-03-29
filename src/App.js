import React, {Component} from 'react';
import './App.css';
import Sidebar from './components/Sidebar'
import {Router, Route, hashHistory} from 'react-router';

// Routes
import HomePage from './routes/Home';
import LoginPage from './routes/Login';
import ArtistPage from './routes/Profile/Artist';
import ArtistTracksPage from './routes/ArtistTracks';
import UserPage from './routes/Profile/User';
import TrackPage from './routes/Track';


class App extends Component {
  render() {
    return (
      <div>
        <Sidebar/>
        <div className="pages">
          <Router history={hashHistory}>
            <Route path='/' component={HomePage}/>
            <Route path='/login' component={LoginPage}/>
            <Route path='/profile/artist' component={ArtistPage}/>
            <Route path='/profile/artist/tracks' component={ArtistTracksPage}/>
            <Route path='/profile/user' component={UserPage}/>
            <Route path='/track' component={TrackPage}/>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
