import React, { Component } from 'react';

import PlayerCard from './PlayerCard';
import ComputerCard from './ComputerCard';

class CardTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cardDeck: [ ],
            playerHand: [ ],
            computerHand: [ ],
            numberOfPlayers: 2
        };
    }

    componentDidMount() {
        this.buildDeck();
        this.deal();
    }

    //Builds full 52 card deck and sets to state:
    buildDeck() {
        let suitDeck = [ ];
        let completeDeck = [ ];
        let suits = ['Clubs', 'Spades', 'Diamonds', 'Hearts'];
        for (let x = 0; x < suits.length; x++) {
            let currentSuit = suits[x];
            suitDeck = this.buildSuit(currentSuit);
            completeDeck.push(...suitDeck);
            suitDeck = [ ];
        }
        // completeDeck.sort(() => Math.random() - 0.5);
        this.setState({ cardDeck: completeDeck });
    }

    //Builds suit of 13 cards, adding suit passed in:
    buildSuit(suit) {
        let deckArr = [ ];
        for (let i = 0; i < 13; i++) {
            let card = { };
            switch (i) {
                case 0:
                    card = {
                        id: this.generateRandomIndex(),
                        label: "A",
                        name: "Ace",
                        suit,
                        value: 10
                    };
                    deckArr.push(card);
                    break;
                case 1:
                    card = {
                        id: this.generateRandomIndex(),
                        label: "2",
                        name: "Two",
                        suit,
                        value: 2
                    };
                    deckArr.push(card);
                    break;
                case 2:
                    card = {
                        id: this.generateRandomIndex(),
                        label: "3",
                        name: "Three",
                        suit,
                        value: 3
                    };
                    deckArr.push(card);
                    break;
                case 3:
                    card = {
                        id: this.generateRandomIndex(),
                        label: "4",
                        name: "Four",
                        suit,
                        value: 4
                    };
                    deckArr.push(card);
                    break;
                case 4:
                    card = {
                        id: this.generateRandomIndex(),
                        label: "5",
                        name: "Five",
                        suit,
                        value: 5
                    };
                    deckArr.push(card);
                    break;
                case 5:
                    card = {
                        id: this.generateRandomIndex(),
                        label: "6",
                        name: "Six",
                        suit,
                        value: 6
                    };
                    deckArr.push(card);
                    break;
                case 6:
                    card = {
                        id: this.generateRandomIndex(),
                        label: "7",
                        name: "Seven",
                        suit,
                        value: 7
                    };
                    deckArr.push(card);
                    break;
                case 7:
                    card = {
                        id: this.generateRandomIndex(),
                        label: "8",
                        name: "Eight",
                        suit,
                        value: 8
                    };
                    deckArr.push(card);
                    break;
                case 8:
                    card = {
                        id: this.generateRandomIndex(),
                        label: "9",
                        name: "Nine",
                        suit,
                        value: 9
                    };
                    deckArr.push(card);
                    break;
                case 9:
                    card = {
                        id: this.generateRandomIndex(),
                        label: "10",
                        name: "Ten",
                        suit,
                        value: 10
                    };
                    deckArr.push(card);
                    break;
                case 10:
                    card = {
                        id: this.generateRandomIndex(),
                        label: "J",
                        name: "Jack",
                        suit,
                        value: 10
                    };
                    deckArr.push(card);
                    break;
                case 11:
                    card = {
                        id: this.generateRandomIndex(),
                        label: "Q",
                        name: "Queen",
                        suit,
                        value: 10
                    };
                    deckArr.push(card);
                    break;
                case 12:
                    card = {
                        id: this.generateRandomIndex(),
                        label: "K",
                        name: "King",
                        suit,
                        value: 10
                    };
                    deckArr.push(card);
                    break;
                default:
                    break;
            }
        }
        return deckArr;
    }

    //Generates random index of 1,000,000 number range:
    generateRandomIndex() {
        return Math.floor(Math.random() * 1000000);
    }


    //deals cards, alternating draw to player then computer:
    deal() {
        if (this.state.cardDeck.length > 1) {
            console.log(this.state.cardDeck);
            const playerHand = [this.state.cardDeck.splice(0, 1), this.state.cardDeck.splice(2, 3)];
            const computerHand = [this.state.cardDeck.splice(1, 2), this.state.cardDeck.splice(3, 4)];
            this.setState({ playerHand, computerHand });
        }
        else {
            setTimeout(() => { 
                console.log(this.state.cardDeck);
                const playerHand = [this.state.cardDeck.splice(0, 1)];
                const computerHand = [this.state.cardDeck.splice(0, 1)];
                playerHand.push(this.state.cardDeck.splice(0, 1));
                computerHand.push(this.state.cardDeck.splice(0, 1));
                this.setState({ playerHand, computerHand });
        }, 1000);
        }
        // const playerHand = [this.state.cardDeck[0], this.state.cardDeck[2]];
        // const computerHand = [this.state.cardDeck[1], this.state.cardDeck[3]];
        // this.setState({ playerHand, computerHand });
    }

    // setTimeout(() => {console.log("this is the first message")}, 5000);



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
                <ComputerCard 
                    computerHand={this.state.computerHand}
                />
                </div>
                <div className="player-card-container"
                    style={{ 
                        width: "60%",
                        height: "40%",
                        margin: "auto",
                        border: "3px solid brown" 
                }}>
                <PlayerCard 
                    playerHand={this.state.playerHand}
                />
                </div>
            </div>        
        );
    }
}

export default CardTable;