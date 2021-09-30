import React from 'react';
import '../styling/PlayerCard.scss';

const PlayerCard = props => {
    if (props.playerHand.length > 1) {
        return (
            <div className="player-card">
            <h5>Player Card</h5>
            <p>Card: {props.playerHand[0].value}</p>
            <p>Card: {props.playerHand[1].value}</p>
            </div>  
        );
    }
    else {
        return (
            <div className="player-card">
            <h5>Player Card</h5>
            </div>  
        ); 
    }
};

export default PlayerCard;