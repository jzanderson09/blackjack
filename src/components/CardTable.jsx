import React, { Component } from 'react';
import { Clubs, Spades, Diamonds, Hearts } from '../CardImageCompiler.js';
import cardBack from '../playing-cards/CardBack.png';
import '../styling/CardTable.scss';


//Components:
import Player from './Player';
import Computer from './Dealer';
import ButtonMenu from './ButtonMenu';
import Score from './Score';

class CardTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cardBack,
            cardDeck: [ ],
            dealerHand: [ ],
            dealerScore: 0,
            numberOfPlayers: 2,
            play: false,
            playerHand: [ ],
            playerScore: 0,
            Clubs,
            Spades,
            Diamonds,
            Hearts
        };
        this.buildDeck = this.buildDeck.bind(this);
        this.buildSuit = this.buildSuit.bind(this);
        this.deal = this.deal.bind(this);
        this.calculateScores = this.calculateScores.bind(this);
        this.shuffleDeck = this.shuffleDeck.bind(this);
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
        setTimeout(this.calculateScores, 1);
        // Returns new shuffled deck at end of draws:
        if (this.state.cardDeck.length < 4) {
            window.alert('Reshuffling!');
            this.buildDeck();
        }
        const playerHand = [...this.state.cardDeck.splice(0, 1)];
        const dealerHand = [...this.state.cardDeck.splice(0, 1)];
        playerHand.push(...this.state.cardDeck.splice(0, 1));
        dealerHand.push(...this.state.cardDeck.splice(0, 1));
        // Toggles finite state (playing, not playing):
        this.setState({ play: !this.state.play, 
            dealerHand,playerHand });
    }

    // Evaluates hand and calculates scores:
    calculateScores() {
        let dealerScore = 0;
        let playerScore = 0;
        this.state.dealerHand.forEach(card => dealerScore += card.value);
        this.state.playerHand.forEach(card => playerScore += card.value);
        this.setState({ dealerScore, playerScore });
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
                <Computer
                    cardBack={this.state.cardBack} 
                    dealerHand={this.state.dealerHand}
                    generateRandomIndex={this.generateRandomIndex}
                />
                <Player
                    cardBack={this.state.cardBack}
                    playerHand={this.state.playerHand} 
                    generateRandomIndex={this.generateRandomIndex}               
                />
                <ButtonMenu
                    deal={this.deal}
                    evaluate={this.evaluate}
                    play={this.state.play}
                />
                <Score 
                    dealerScore={this.state.dealerScore}
                    playerScore={this.state.playerScore}
                />
            </div>        
        );
    }
}

export default CardTable;