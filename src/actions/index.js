import 'whatwg-fetch';
import {hashHistory} from 'react-router';

export const login = (username, password) => {
  return function (dispatch) {
    dispatch({type: 'LOGIN_REQUEST'});
    fetch('http://localhost:4567/auth/login', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username: username, password: password})
    }).then((response) => {
      console.log(response)
      // Success
      if (response.status === 200) {
        response
          .json()
          .then((response) => {
            dispatch({type: 'LOGIN_SUCCESS', token: response.token})
            hashHistory.push('/');
          })
        // Failure
      } else {
        response
          .json()
          .then((response) => {
            dispatch({type: 'LOGIN_FAILURE', error: response.message})
          })
      }
    }).catch((error) => {
      dispatch({type: 'LOGIN_FAILURE', error: error.message})
    })
  };
};

export const signup = (username, password, firstname, lastname, email) => {
  return function (dispatch) {
    dispatch({type: 'LOGIN_REQUEST'});
    fetch('http://localhost:4567/users', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username: username, password: password, firstname: firstname, lastname: lastname, email:email})
    }).then((response) => {
      console.log(response)
      // Success
      if (response.status === 200) {
        response
          .json()
          .then((response) => {
            dispatch({type: 'SIGNUP_SUCCESS', token: response.token})
            hashHistory.push('/');
          })
        // Failure
      } else {
        response
          .json()
          .then((response) => {
            dispatch({type: 'SIGNUP_FAILURE', error: response.message})
          })
      }
    }).catch((error) => {
      dispatch({type: 'SIGNUP_FAILURE', error: error.message})
    })
  };
};


export const logout = () => {
  return function (dispatch) {
    dispatch({type: 'LOGOUT'})
    hashHistory.push('/login');
  }
};
