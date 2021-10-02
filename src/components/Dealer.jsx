import React from 'react';
import '../styling/Dealer.scss';

const Dealer = props => {
    if (props.dealerHand.length > 1) {
        return (
            <div className="computer-card">
                {props.dealerHand.map(card => <img className='cards computer' key={card.id} src={card.image} alt={card.value} />)}
        </div>  
        );
    }
    else {
        return (
            <div className="computer-card">
                <img
                    alt='card'
                    className='cards computer'
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

export default Dealer;