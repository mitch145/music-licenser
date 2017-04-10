import React from 'react'
import Chip from 'material-ui/Chip';
import RaisedButton from 'material-ui/RaisedButton';
import ShoppingCartIcon from 'material-ui/svg-icons/action/shopping-cart';
import LinearProgress from 'material-ui/LinearProgress';

export default class TrackCard extends React.Component {
    render() {
        const handleAddToCart = () => {
            console.log('Add to cart')
        }
        return (
            <div className="track-container">
                <div className="track-card">
                    <div className="left-container">
                        <img className="album-artwork" src="http://placehold.it/500x500" alt="Album"/>
                        <div>
                            <p className="track-name">Test 1234</p>
                            <p className="artist-name">Mitch Ball</p>
                        </div>
                    </div>
                    <div>
                        <RaisedButton
                            className="button"
                            label="Add To Cart"
                            labelPosition='before'
                            icon={< ShoppingCartIcon />}
                            secondary={true}/>
                    </div>
                </div>
                <LinearProgress mode="determinate" color='#8BC34A' value={50}/>
            </div>
        )
    }
};
