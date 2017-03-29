import React from 'react'
import Paper from 'material-ui/Paper';
import TrackCard from './components/TrackCard';
import HeaderCard from './components/HeaderCard';

export default class HomePage extends React.Component {
    render() {
        return (
            <div className="page home-page">
                <Paper zDepth={1} className="container">
                    <TrackCard/>
                    <TrackCard/>
                    <TrackCard/>
                </Paper>
            </div>
        )
    }
};
