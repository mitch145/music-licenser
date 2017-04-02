const initialState = {
  isLoggingIn: false,
  token: null,
  account: {
    id: -1,
    firstname: '',
    lastname: '',
    username: '',
    email: ''
  }
};

export default function MusicLicenser(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN_REQUEST':
      return Object.assign({}, state, {isLoggingIn: true});
    case 'LOGIN_SUCCESS':
      return Object.assign({}, state, {isLoggingIn: false, token: action.token});
    case 'LOGIN_FAILURE':
      return Object.assign({}, state, {isLoggingIn: false});
    case 'LOGOUT':
      return initialState;
  }
}