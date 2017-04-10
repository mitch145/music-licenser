import React from 'react'
import Paper from 'material-ui/Paper';
import TrackCard from './components/TrackCard';

export default class HomePage extends React.Component {
    render() {
        return (
            <div className="page home-page">
                <div zDepth={1} className="container">
                    <TrackCard/>
                    <TrackCard/>
                    <TrackCard/>
                </div>
            </div>
        )
    }
};
