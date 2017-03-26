import React from 'react'
import Paper from 'material-ui/Paper';

export default class UserProfilePage extends React.Component {
    render() {
        return (
            <div className="page user-profile-page">
                <Paper className="profile-card">
                    <div className="left-container">
                        <img className="profile-picture" src="http://placehold.it/500x500" alt="Profile"/>
                        <div className="text-container">
                            <p className="artist-name">Mitch Ball</p>
                            <p className="artist-bio">Lorem ipsum dolor sit amet, consectetur adipisicing
                                elit. Perferendis provident, quasi natus accusantium, ut, at autem ullam totam
                                fugit nam porro earum, dolorem recusandae! Unde temporibus sunt ratione.
                                Tenetur, autem? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Itaque, beatae, explicabo.</p>
                        </div>
                    </div>
                </Paper>
            </div>
        )
    }
};
