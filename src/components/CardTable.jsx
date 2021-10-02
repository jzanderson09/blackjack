import React, { Component } from 'react';
import { Clubs, Spades, Diamonds, Hearts } from '../CardImageCompiler.js';
import cardBack from '../playing-cards/CardBack.png';
import '../styling/CardTable.scss';


//Components:
import PlayerCard from './PlayerCard';
import ComputerCard from './ComputerCard';
import ButtonMenu from './ButtonMenu';

class CardTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cardBack,
            cardDeck: [ ],
            computerHand: [ ],
            numberOfPlayers: 2,
            play: false,
            playerHand: [ ],
            Clubs,
            Spades,
            Diamonds,
            Hearts
        };
        this.buildDeck = this.buildDeck.bind(this);
        this.buildSuit = this.buildSuit.bind(this);
        this.deal = this.deal.bind(this);
    }

    componentDidMount() {
        this.buildDeck();
    }

    //Builds full 52 card deck (numerically by suit) and sets to state:
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
        completeDeck = this.shuffleDeck(completeDeck);
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
                        name: "ace",
                        suit,
                        value: 10,
                        image: this.state[suit][0]
                    };
                    deckArr.push(card);
                    break;
                case 1:
                    card = {
                        id: this.generateRandomIndex(),
                        label: "2",
                        name: "two",
                        suit,
                        value: 2,
                        image: this.state[suit][1]
                    };
                    deckArr.push(card);
                    break;
                case 2:
                    card = {
                        id: this.generateRandomIndex(),
                        label: "3",
                        name: "three",
                        suit,
                        value: 3,
                        image: this.state[suit][2]
                    };
                    deckArr.push(card);
                    break;
                case 3:
                    card = {
                        id: this.generateRandomIndex(),
                        label: "4",
                        name: "four",
                        suit,
                        value: 4,
                        image: this.state[suit][3]
                    };
                    deckArr.push(card);
                    break;
                case 4:
                    card = {
                        id: this.generateRandomIndex(),
                        label: "5",
                        name: "five",
                        suit,
                        value: 5,
                        image: this.state[suit][4]
                    };
                    deckArr.push(card);
                    break;
                case 5:
                    card = {
                        id: this.generateRandomIndex(),
                        label: "6",
                        name: "six",
                        suit,
                        value: 6,
                        image: this.state[suit][5]
                    };
                    deckArr.push(card);
                    break;
                case 6:
                    card = {
                        id: this.generateRandomIndex(),
                        label: "7",
                        name: "seven",
                        suit,
                        value: 7,
                        image: this.state[suit][6]
                    };
                    deckArr.push(card);
                    break;
                case 7:
                    card = {
                        id: this.generateRandomIndex(),
                        label: "8",
                        name: "eight",
                        suit,
                        value: 8,
                        image: this.state[suit][7]
                    };
                    deckArr.push(card);
                    break;
                case 8:
                    card = {
                        id: this.generateRandomIndex(),
                        label: "9",
                        name: "nine",
                        suit,
                        value: 9,
                        image: this.state[suit][8]
                    };
                    deckArr.push(card);
                    break;
                case 9:
                    card = {
                        id: this.generateRandomIndex(),
                        label: "10",
                        name: "ten",
                        suit,
                        value: 10,
                        image: this.state[suit][9]
                    };
                    deckArr.push(card);
                    break;
                case 10:
                    card = {
                        id: this.generateRandomIndex(),
                        label: "J",
                        name: "Jack",
                        suit,
                        value: 10,
                        image: this.state[suit][10]
                    };
                    deckArr.push(card);
                    break;
                case 11:
                    card = {
                        id: this.generateRandomIndex(),
                        label: "Q",
                        name: "Queen",
                        suit,
                        value: 10,
                        image: this.state[suit][11]
                    };
                    deckArr.push(card);
                    break;
                case 12:
                    card = {
                        id: this.generateRandomIndex(),
                        label: "K",
                        name: "King",
                        suit,
                        value: 10,
                        image: this.state[suit][12]
                    };
                    deckArr.push(card);
                    break;
                default:
                    break;
            }
        }
        return deckArr;
    }

    // Draws to player and computer, alternating draws (casino style):
    deal() {
        if (this.state.cardDeck.length < 4) {
            window.alert('Reshuffling!');
            this.buildDeck();
        }
        const playerHand = [...this.state.cardDeck.splice(0, 1)];
        const computerHand = [...this.state.cardDeck.splice(0, 1)];
        playerHand.push(...this.state.cardDeck.splice(0, 1));
        computerHand.push(...this.state.cardDeck.splice(0, 1));
        this.setState({ playerHand, computerHand });
    }

    //Generates random index of 1,000,000 number range:
    generateRandomIndex() {
        return Math.floor(Math.random() * 1000000);
    }

    //Returns shuffled deck:
    shuffleDeck(deck) {
        return deck.sort(() => Math.random() - 0.5);
    }

    render() {
        return (
            <div className="card-table">
                <ComputerCard
                    cardBack={this.state.cardBack} 
                    computerHand={this.state.computerHand}
                    generateRandomIndex={this.generateRandomIndex}
                />
                <PlayerCard
                    cardBack={this.state.cardBack}
                    playerHand={this.state.playerHand} 
                    generateRandomIndex={this.generateRandomIndex}               
                />
                <ButtonMenu
                    deal={this.deal}
                    play={this.state.play}
                />
            </div>        
        );
    }
}

export default CardTable;