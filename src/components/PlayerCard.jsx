import React from 'react';
import '../styling/PlayerCard.scss';

const PlayerCard = props => {
    if (props.playerHand.length > 1) {
        return (
            <div className="player-card">
            {props.playerHand.map(card => <img className='cards player' key={card.id} src={card.image} alt={card.value} />)}
            </div>  
        );
    }
    else {
        return (
            <div className="player-card">
                <img
                    alt='card'
                    className='cards player'
                    key={Math.random()} 
                    src={props.cardBack} 
                />
                <img
                    alt='card'
                    className='cards player' 
                    key={Math.random()} 
                    src={props.cardBack} 
                />
            </div>  
        ); 
    }
};

export default PlayerCard;