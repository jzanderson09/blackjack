import React from 'react';

const ButtonMenu = props => {
    // if (props.play) {
    //     return (
    //         <div className='menu'>
    //             <button onClick={props.deal}>Hit</button>
    //             <button onClick={props.deal}>Stay</button>
    //             <button onClick={props.deal}>Split</button>
    //             <button onClick={props.deal}>Double Down</button>

    //         </div> 
    //     );
    // }
    return (
        <div className='menu'>
            <button onClick={props.deal}>Deal</button>
        </div>   
    );
};

export default ButtonMenu;