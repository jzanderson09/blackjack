import React, { Component } from 'react';

import PlayerCard from './PlayerCard';
import ComputerCard from './ComputerCard';

class CardTable extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div className="card-table" 
                style={{ 
                    border: "1px solid black",
                    margin: "auto",
                    width: "80%",
                    height: "80vh",
                    display: "flex",
                    flexFlow: "row wrap"
            }}>
                <div className="computer-card-container"
                    style={{ 
                        width: "60%",
                        height: "40%",
                        margin: "auto",
                        border: "3px solid purple"
                }}>
                <ComputerCard />
                </div>
                <div className="player-card-container"
                    style={{ 
                        width: "60%",
                        height: "40%",
                        margin: "auto",
                        border: "3px solid brown" 
                }}>
                <PlayerCard />
                </div>
            </div>        
        );
    }
}

export default CardTable;