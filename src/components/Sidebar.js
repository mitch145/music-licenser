import React from 'react';

// Material UI Components
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import MenuItem from 'material-ui/MenuItem';

// Nav Icons
import ActionHome from 'material-ui/svg-icons/action/home';

export default class Sidebar extends React.Component {

    constructor() {
        super()
        this.state = {
            open: null,
            docked: null,
            mobile: null
        }
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
                {this.state.mobile
                    ? <AppBar
                            title="Material UI Boilerplate"
                            style={style.appbar}
                            onLeftIconButtonTouchTap={this.toggleOpenDrawer}
                            iconClassNameRight="muidocs-icon-navigation-expand-more"/>
                    : <AppBar
                        title="Material UI Boilerplate"
                        style={style.appbar}
                        showMenuIconButton={false}/>}
                <Drawer
                    containerStyle={style.drawer}
                    overlayStyle={style.overlay}
                    open={this.state.open}
                    onRequestChange={(open) => this.setState({open})}
                    width={200}
                    docked={this.state.docked}>
                    <Divider/>
                    <MenuItem href="/#/" leftIcon={< ActionHome />}>Home</MenuItem>
                    <MenuItem href="/#/test" leftIcon={< ActionHome />}>Test</MenuItem>
                </Drawer>
            </div>
        )
    }
};