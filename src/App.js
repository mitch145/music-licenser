import React, {Component} from 'react';
import './App.css';
import Navbar from './components/Navbar'
import {Router, Route, hashHistory} from 'react-router';

// Routes
import HomePage from './routes/home';
import LoginPage from './routes/login';
import SignupPage from './routes/signup';
import ArtistPage from './routes/profile/artist';
import ArtistTracksPage from './routes/artist-tracks';
import UserPage from './routes/profile/user';
import TrackPage from './routes/track';
import PurchasePage from './routes/purchase';


class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <div className="pages">
          <Router history={hashHistory}>
            <Route path='/' component={HomePage}/>
            <Route path='/login' component={LoginPage}/>
            <Route path='/signup' component={SignupPage}/>
            <Route path='/profile/artist' component={ArtistPage}/>
            <Route path='/profile/artist/tracks' component={ArtistTracksPage}/>
            <Route path='/profile/user' component={UserPage}/>
            <Route path='/track' component={TrackPage}/>
            <Route path='/purchase' component={PurchasePage}/>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
