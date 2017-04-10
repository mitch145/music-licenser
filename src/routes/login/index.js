import React from 'react'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as actions from '../../actions';

import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import CircularProgress from 'material-ui/CircularProgress';

class LoginPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }
    handleSubmit = () => {
        this.props.actions.login(this.state.username, this.state.password);
    }
    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }
    render() {
        const style = {
            title: {
                margin: 0,
                fontWeight: 300,
                textAlign: 'center'
            },
            textfield: {
                width: '100%',
                marginTop: -15
            },
            textFieldInput: {
                color: '#FFFFFF'
            },
            button: {
                marginTop: 10
            }
        }
        return (
            <div className="login-page">
                {this.props.isLoggingIn
                    ? <CircularProgress className="circular-progress" color='#8BC34A'/>
                    : ''}
                <p className="errors">{this.props.loginError}</p>
                <Paper zDepth={1} className="card">
                    <h2 style={style.title}>Music-Licenser</h2>
                    <TextField
                        className="text-input"
                        style={style.textfield}
                        inputStyle={style.textFieldInput}
                        name="username"
                        value={this.state.username}
                        onChange={this.handleChange}
                        hintText="musiclicenser"
                        floatingLabelText="Username"/>
                    <TextField
                        className="text-input"
                        style={style.textfield}
                        inputStyle={style.textFieldInput}
                        name="password"
                        type="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        hintText="password123"
                        floatingLabelText="Password"/>
                    <RaisedButton
                        onTouchTap={this.handleSubmit}
                        style={style.button}
                        label="Login"
                        fullWidth={true}
                        secondary={true}/>
                    <p className="signup">Don't have an account?&nbsp;
                        <a href="/#/signup">Sign Up</a>
                    </p>
                </Paper>
            </div>
        )
    }
};

const mapStateToProps = (state, ownProps) => {
  return state;
};
const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);