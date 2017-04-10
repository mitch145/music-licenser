const initialState = {
  isLoggingIn: false,
  loginError: null,
  token: null,
  account: {
    id: -1,
    firstname: null,
    lastname: null,
    username: null,
    email: null
  }
};

export default function MusicLicenser(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN_REQUEST':
      return Object.assign({}, state, {isLoggingIn: true});
    case 'LOGIN_SUCCESS':
      return Object.assign({}, state, {isLoggingIn: false, token: action.token, loginError: null});
    case 'LOGIN_FAILURE':
      return Object.assign({}, state, {isLoggingIn: false, loginError: action.error });
    case 'LOGOUT':
      return initialState;
  }
}