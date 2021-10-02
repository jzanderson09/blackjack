import React from 'react';
import '../styling/Score.scss';

const Score = props => {
    return (
        <div className="Score">
            <h3>Computer: {props.dealerScore}</h3>
            <h3>Player: {props.playerScore}</h3>
        </div>
    );
};

export default Score;