import React from 'react'
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import CircularProgress from 'material-ui/CircularProgress';
import * as actions from '../../actions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';


class SignUpPage extends React.Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            firstname: '',
            lastname: '',
            email: ''
        }
    }
    handleSubmit = () => {
        this.props.actions.signup(this.state.username, this.state.password, this.state.firstname, this.state.lastname, this.state.email);
    }
    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }
    render() {
        const style = {
            title: {},
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
            <div className="signup-page">
                    {this.state.confirmationLoading
                        ? <CircularProgress className="circular-progress" color='#8BC34A'/>
                        : ''}
                    {this.state.confirmationSent
                        ? <Paper zDepth={1} className="confirmation-card">
                                <h2 className="title">Confirmation sent!</h2>
                            </Paper>
                        : ''}
                    <Paper zDepth={1} className="card">
                        <h2 className="title">Create a New Account</h2>
                        <TextField
                            className="text-input"
                            style={style.textfield}
                            inputStyle={style.textFieldInput}
                            hintText="firstname"
                            name="firstname"
                            onChange={this.handleChange}
                            floatingLabelText="First Name"/>
                        <TextField
                            className="text-input"
                            style={style.textfield}
                            inputStyle={style.textFieldInput}
                            hintText="Smith"
                            name="lastname"
                            onChange={this.handleChange}
                            floatingLabelText="Last Name"/>
                        <TextField
                            className="text-input"
                            style={style.textfield}
                            inputStyle={style.textFieldInput}
                            hintText="musiclicenser"
                            name="username"
                            onChange={this.handleChange}
                            floatingLabelText="Username"/>
                        <TextField
                            className="text-input"
                            style={style.textfield}
                            inputStyle={style.textFieldInput}
                            hintText="me@musiclicenser.com"
                            onChange={this.handleChange}
                            name="email"
                            floatingLabelText="Email"/>
                        <TextField
                            className="text-input"
                            style={style.textfield}
                            inputStyle={style.textFieldInput}
                            hintText="password123"
                            type="password"
                            name="password"
                            onChange={this.handleChange}
                            floatingLabelText="Password"/>
                        <RaisedButton
                            onClick={this.handleSubmit}
                            style={style.button}
                            label="Sign Up"
                            fullWidth={true}
                            secondary={true}/>
                        <p className="login">Already have an account?&nbsp;
                            <a href="/#/login">Login</a>
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
export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage);