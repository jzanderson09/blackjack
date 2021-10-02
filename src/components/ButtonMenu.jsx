import React from 'react';
import '../styling/ButtonMenu.scss';

const ButtonMenu = props => {
    if (props.play) {
        return (
            <div className='menu'>
                <button onClick={() => props.evaluate()}>Hit</button>
                <button>Stay</button>
                <button>Split</button>
                <button>Double Down</button>

            </div> 
        );
    }
    return (
        <div className='menu'>
            <button onClick={props.deal}>Deal</button>
        </div>   
    );
};

export default ButtonMenu;