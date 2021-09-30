import React from 'react';
import '../styling/ComputerCard.scss';

const ComputerCard = props => {
    if (props.computerHand.length > 1) {
        return (
            <div className="computer-card">
            <h5>Computer Card</h5>
            <p>Card: {props.computerHand[0].value}</p>
            <p>Card: {props.computerHand[1].value}</p>
        </div>  
        );
    }
    else {
        return (
            <div className="computer-card"
                style={{ 
                    border: "3px solid red",
                    margin: "auto",
                    marginTop: "2%",
                    width: "40%"
            }}>
            <h5>Computer Card</h5>
        </div>  
        );
    }
};

export default ComputerCard;