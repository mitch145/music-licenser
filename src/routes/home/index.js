import React from 'react'
import Paper from 'material-ui/Paper';

export default class HomePage extends React.Component {
    render() {
        return (
            <div className="page home-page">
                <Paper zDepth={1} className="container">
                    <div className="header">
                    Header goes here
                    </div>
                    <div className="track">
                        Card thngo goes here
                    </div>
                    <div className="track">
                        Card thngo goes here
                    </div>
                    <div className="track">
                        Card thngo goes here
                    </div>
                </Paper>
            </div>
        )
    }
};
