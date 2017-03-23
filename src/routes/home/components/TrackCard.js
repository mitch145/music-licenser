import React from 'react'
import Chip from 'material-ui/Chip';

export default class TrackCard extends React.Component {
    render() {
        return (
            <div className="track-card">
                <div className="left-container">
                    <img className="album-artwork" src="http://placehold.it/500x500"/>
                    <div>
                        <p className="track-name">Test 1234</p>
                        <p className="artist-name">Mitch Ball</p>
                    </div>
                </div>
                <p className="bpm">120bpm</p>
                <div>
                    <div className="tag-container">
                        <Chip className="tag">West Coast Rap</Chip>
                        <Chip className="tag">Latin Rap</Chip>
                        <Chip className="tag">Text Chip</Chip>
                    </div>
                    <div className="tag-container">
                        <Chip className="tag">Gangsta Rap</Chip>
                        <Chip className="tag">Alternative Rap</Chip>
                        <Chip className="tag">Hardcore Rap</Chip>
                    </div>
                </div>
            </div>
        )
    }
};
