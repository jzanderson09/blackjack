import React, { useState } from 'react';
import '../styling/ButtonMenu.scss';

const ButtonMenu = props => {
    const [options, setOptions] = useState([]);
    console.log(props);
    // Evalutes player options based on hand,
    // Then provides button options:
    const evaluateOptions = () => {

    };

    if (props.play) {
        return (
            <div className='menu'>
                <button>Hit</button>
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