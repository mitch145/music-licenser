import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as actions from '../actions';

// Material UI Components
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';

class Navbar extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            open: null,
            docked: null,
            mobile: null
        }
    }
    handleLogout = () => {
        this
            .props
            .actions
            .logout()
    }
    toggleOpenDrawer = () => {
        if (!this.state.mobile) {
            return;
        }
        this.setState({
            open: !this.state.open
        })
    }
    setSmall = () => {
        this.setState({open: false, docked: false, mobile: true})
    }
    setLarge = () => {
        this.setState({open: true, docked: true, mobile: false})
    }
    componentWillMount() {
        // Make navbar responsive
        const mediaQuery = window.matchMedia('(min-width: 650px)');
        if (mediaQuery.matches) {
            this.setLarge()
        } else {
            this.setSmall()
        }
        mediaQuery.addListener((mq) => {
            if (mq.matches) {
                this.setLarge()
            } else {
                this.setSmall()
            }
        });
    }

    render() {

        const style = {
            appbar: {
                position: 'fixed'
            },
            drawer: {
                paddingTop: '64px',
                zIndex: 1000
            },
            overlay: {
                zIndex: 900
            },
            imageContainer: {
                padding: '20px'
            },
            image: {
                width: '100%'
            },
            title: {
                textAlign: 'center',
                marginTop: 0
            }
        }
        return (
            <div>
                <AppBar
                    className="appbar"
                    title="Music-Licenser"
                    style={style.appbar}
                    showMenuIconButton={false}>
                    <FlatButton
                        className="button"
                        label="Artist Profile (T)"
                        href="/#/profile/artist"/>
                    <FlatButton className="button" label="Track (T)" href="/#/track"/>
                    <FlatButton className="button" label="All Tracks" href="/#/"/>
                    <FlatButton
                        className="button"
                        label="My Tracks"
                        href="/#/profile/artist/tracks"/>
                    <FlatButton className="button" label="My Profile" href="/#/profile/user"/>
                    <Badge className="badge" badgeContent={4} secondary={true} badgeStyle={{top: 10, right: 10}}>
                        <NotificationsIcon/>
                    </Badge>
                    {this.props.token
                        ? <FlatButton className="button" label="Logout" onTouchTap={this.handleLogout}/>
                        : <FlatButton className="button" label="Login" href="/#/login"/>}
                </AppBar>
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
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);