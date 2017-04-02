import 'whatwg-fetch';

export const login = (username, password) => {
  return function (dispatch) {
    dispatch({type: 'LOGIN_REQUEST'});
    fetch('http://localhost:4567/auth/login', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username: 'mitch145', password: 'snickers145'})
    }).then((response) => {
      response
        .json()
        .then((response) => {
          dispatch({type: 'LOGIN_SUCCESS', token: response.token})
          window.location = '/#/'
        })
    }).catch((error) => {
      dispatch({type: 'LOGIN_FAILURE'})
    })
  };
};

export const logout = () => {
  return function (dispatch) {
    dispatch({type: 'LOGOUT'})
    window.location = '/#/login'
  }
};
