import Card from "./card";
import Attack from "./cards/attack";
import Recharge from "./cards/recharge";

export default class Hand {
  constructor(game) {
    this.game = game;
    const STARTING_CARDS = [
      new Recharge(this.game),
      new Recharge(this.game),
      new Recharge(this.game),
      new Attack(this.game),
      new Attack(this.game),
      new Attack(this.game),
      new Attack(this.game),
    ];
    this.deck = STARTING_CARDS.slice();
    this.cardPile = this.deck.slice();
    this.playerCards = [];
    this.currentHand = [];
    this.discardPile = [];
    this.startTurn();
  }

  // takes the players complete deck and SHUFFLES it into
  // playerCards
  resetDeck() {
    this.cardPile = this.deck.slice();
    while (this.cardPile.length) {
      const rando = ~~(Math.random() * this.cardPile.length);
      this.playerCards.push(...this.cardPile.splice(rando, rando + 1));
    }
  }

  //
  startTurn() {
    debugger;
    this.game.playerTurn = true;
    for (let i = 0; i < 5; i++) {
      if (!this.playerCards.length) this.resetDeck();
      this.currentHand.push(this.playerCards.shift());
    }
    debugger;
    this.render();
  }

  endTurn() {
    debugger;

    // end the players turn
    this.game.playerTurn = false;

    // discard the players current hand
    this.discardHand();

    // have the computer play its turn
    this.game.computerTurn();
  }

  discardHand() {
    // take all the cards and put them in the discard pile
    while (this.currentHand.length) {
      this.discardPile.push(this.currentHand.pop());
    }
  }

  render() {
    // clear the hand before each re render
    document.getElementById("player-hand").innerHTML = "";

    // iterate through the current hand
    this.currentHand.forEach((card, i) => {
      // create an img element and set it to the cards image
      const cardImg = document.createElement("img");
      cardImg.src = card.image;

      // create an li and attach the img to it
      const listItem = document.createElement("li").appendChild(cardImg);

      // add a click listener to the li
      // if its the players turn, and the player has enough energy to play the card
      // play the card, add the card to the discard pile, delete the card from the hand, and re render
      listItem.addEventListener("click", () => {
        if (this.game.playerTurn && this.game.player.energy - card.cost >= 0) {
          card.action();
          this.discardPile.push(card);
          delete this.currentHand[i];
          this.render();
        }
      });

      //
      document.getElementById("player-hand").appendChild(listItem);
    });
  }
}
