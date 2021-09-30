import React from 'react';

const PlayerCard = props => {
    if (props.playerHand.length > 1) {
        return (
            <div className="player-card"
                style={{ 
                    border: "3px solid green",
                    margin: "auto",
                    marginTop: "2%",
                    width: "40%"
            }}>
            <h5>Player Card</h5>
            <p>Card: {props.playerHand[0].value}</p>
            <p>Card: {props.playerHand[1].value}</p>
            </div>  
        );
    }
    else {
        return (
            <div className="player-card"
                style={{ 
                    border: "3px solid green",
                    margin: "auto",
                    marginTop: "2%",
                    width: "40%"
            }}>
            <h5>Player Card</h5>
            </div>  
        ); 
    }
};

export default PlayerCard;