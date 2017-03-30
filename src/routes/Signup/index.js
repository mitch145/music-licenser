import React from 'react'
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

export default class SignUpPage extends React.Component {
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
            <div className="signup-page">
                <div>
                    <Paper zDepth={1} className="card">
                        <h2 style={style.title}>Create a New Account</h2>
                        <TextField
                            className="text-input"
                            style={style.textfield}
                            inputStyle={style.textFieldInput}
                            hintText="musiclicenser"
                            floatingLabelText="First Name"/>
                        <TextField
                            className="text-input"
                            style={style.textfield}
                            inputStyle={style.textFieldInput}
                            hintText="musiclicenser"
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
                            hintText="musiclicenser"
                            floatingLabelText="Email"/>
                        <TextField
                            className="text-input"
                            style={style.textfield}
                            inputStyle={style.textFieldInput}
                            hintText="password123"
                            floatingLabelText="Password"/>
                        <RaisedButton
                            href="/#/"
                            style={style.button}
                            label="Sign Up"
                            fullWidth={true}
                            secondary={true}/>
                        <p className="login">Already have an account?&nbsp;
                            <a href="/#/login">Login</a>
                        </p>
                    </Paper>
                </div>
            </div>
        )
    }
};
