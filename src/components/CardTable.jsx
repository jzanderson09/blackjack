import React, { Component } from 'react';

class CardTable extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div className="CardTable" 
            style={{ 
                border: "1px solid black",
                margin: "auto"}}>
                <h3>Card Table</h3>
            </div>        
        );
    }
}

export default CardTable;