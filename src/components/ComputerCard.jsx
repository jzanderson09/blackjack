import React from 'react';
import '../styling/ComputerCard.scss';

const ComputerCard = props => {
    if (props.computerHand.length > 1) {
        return (
            <div className="computer-card">
                {props.computerHand.map(card => <img className='cards' key={card.id} src={card.image} alt={card.value} />)}
        </div>  
        );
    }
    else {
        return (
            <div className="computer-card">
                <img
                    alt='card'
                    className='cards'
                    key={Math.random()} 
                    src={props.cardBack} 
                />
                <img
                    alt='card'
                    className='cards' 
                    key={Math.random()} 
                    src={props.cardBack} 
                />
            </div>  
        ); 
    }
};

export default ComputerCard;