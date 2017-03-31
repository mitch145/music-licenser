import React from 'react'
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import CircularProgress from 'material-ui/CircularProgress';

export default class SignUpPage extends React.Component {
    constructor() {
        super()
        this.state = {
            confirmationSent: false,
            confirmationLoading: false
        }
    }
    handleSubmit = () => {
        this.setState({confirmationLoading: true})
        setTimeout(() => {
            this.setState({confirmationSent: true, confirmationLoading: false})
        }, 3000)
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
                            hintText="John"
                            floatingLabelText="First Name"/>
                        <TextField
                            className="text-input"
                            style={style.textfield}
                            inputStyle={style.textFieldInput}
                            hintText="Smith"
                            floatingLabelText="Last Name"/>
                        <TextField
                            className="text-input"
                            style={style.textfield}
                            inputStyle={style.textFieldInput}
                            hintText="musiclicenser"
                            floatingLabelText="Username"/>
                        <TextField
                            className="text-input"
                            style={style.textfield}
                            inputStyle={style.textFieldInput}
                            hintText="me@musiclicenser.com"
                            floatingLabelText="Email"/>
                        <TextField
                            className="text-input"
                            style={style.textfield}
                            inputStyle={style.textFieldInput}
                            hintText="password123"
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
