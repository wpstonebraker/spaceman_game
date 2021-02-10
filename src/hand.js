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
    this.playerCards = [];
    this.currentHand = [];
    this.discardPile = [];
    this.startTurn();
  }

  // takes the players complete deck and SHUFFLES it into
  // playerCards
  resetDeck() {
    while (this.deck.length) {
      const rando = ~~(Math.random() * this.deck.length);
      this.playerCards.push(...this.deck.splice(rando, rando + 1));
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
    this.game.playerTurn = false;
    // this.discardPile += this.currentHand;
    this.discardHand();
    this.game.computerTurn();
  }

  discardHand() {
    while (this.currentHand.length) {
      this.discardPile.push(this.currentHand.pop());
    }
  }

  render() {
    debugger;
    this.currentHand.forEach((card, i) => {
      const cardImg = document.createElement("img");
      cardImg.src = card.image;
      const listItem = document.createElement("li").appendChild(cardImg);
      debugger;
      listItem.addEventListener("click", () => {
        debugger;
        if (this.game.playerTurn && this.game.player.energy - card.cost >= 0) {
          card.action();
          this.discardPile.push(card);
        }
      });
      document.getElementById("player-hand").appendChild(listItem);
    });
  }
}
