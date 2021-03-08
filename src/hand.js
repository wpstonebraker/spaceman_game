import Card from "./cards/card";
import DrainShield from "./cards/drainShield";
import InstallUpdate from "./cards/installUpdate";
import LaserAttack from "./cards/laserAtk";
import MissleAttack from "./cards/missleAtk";
import Overcharge from "./cards/overcharge";
import Recharge from "./cards/recharge";
import SyphonEnergy from "./cards/syphonEnergy";
import Salvo from "./cards/salvo";
import TuneUp from "./cards/tuneUp";

export default class Hand {
  constructor(game, startingCards) {
    this.game = game;
    const STARTING_CARDS = [
      new Recharge(this.game),
      new Recharge(this.game),
      new Recharge(this.game),

      new LaserAttack(this.game),
      new LaserAttack(this.game),
      new LaserAttack(this.game),

      new MissleAttack(this.game),
      new MissleAttack(this.game),
      new MissleAttack(this.game),
    ];
    this.deck = STARTING_CARDS.slice();
    this.cardPile = this.deck.slice();
    this.playerCards = [];
    this.currentHand = [];
    this.discardPile = [];
    this.disabled = false;
    this.initializeDeck(startingCards);
    this.startTurn();
    this.playCard = this.playCard.bind(this);
  }

  initializeDeck(startingCards) {
    startingCards.forEach((card) => {
      this.deck.push(card);
    });
    if (startingCards.length > 1) {
      // let extra = startingCards.length - 2;
      let extra = startingCards.length - 1;
      for (let i = 0; i < extra; i++) {
        this.deck.push(new MissleAttack(this.game));
        this.deck.push(new LaserAttack(this.game));
        this.deck.push(new Recharge(this.game));
      }
    }
  }

  // takes the players complete deck and SHUFFLES it into
  // playerCards
  resetDeck() {
    this.cardPile = this.deck.slice();
    this.currentHand.forEach((card) => {
      let idx = this.cardPile.indexOf(card);
      this.cardPile.splice(idx, 1);
    });
    while (this.cardPile.length) {
      const rando = ~~(Math.random() * this.cardPile.length);
      this.playerCards.push(...this.cardPile.splice(rando, rando + 1));
    }
  }

  //
  startTurn() {
    this.game.playerTurn = true;
    this.disabled = false;
    this.game.player.initializeEnergy();
    for (let i = 0; i < 5; i++) {
      if (!this.playerCards.length) {
        this.resetDeck();
        this.discardPile = [];
      }
      this.currentHand.push(this.playerCards.shift());
    }
    this.render();
  }

  playCard(card, i) {
    return () => {
      if (this.game.playerTurn && card.check() && this.disabled === false) {
        this.disabled = true;
        setTimeout(() => {
          this.disabled = false;
        }, 2500);
        card.action();
        this.discardPile.push(card);
        document.getElementById(`card-${i}`).classList.add("playCard");
        let idx = this.currentHand.indexOf(this);
        this.currentHand.splice(idx, 1);

        setTimeout(() => {
          document.getElementById(`card-${i}`).remove();
        }, 1450);
        // delete this.currentHand[i];
        // this.render();
      }
    };
  }

  endTurn() {
    debugger;
    let discards = Array.from(document.getElementsByClassName("card"));
    // let discards = document.getElementById("player-hand").childNodes;
    // for (card of discards) {
    //   card.classList.add("discardCard");
    // }
    discards.forEach((card, i) => {
      card.classList.add("discardCard");
    });

    // document
    //   .getElementById("cb-0")
    //   .removeEventListener("click", this.playcard, true);

    // Array.from(document.getElementsByClassName("card-button")).forEach(
    //   (button) => {
    //     debugger;
    //     button.removeEventListener("click", this.playCard, true);
    //   }
    // );
    // Array.from(document.getElementsByClassName("card-button")).forEach(
    //   (button) => {
    //     debugger;
    //     button.removeEventListener("click", playCard);
    //   }
    // );

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
    let discards = Array.from(document.getElementsByClassName("no-card"));
    discards.forEach((card) => {
      setTimeout(() => {
        card.innerHTML = "";
      }, 1500);
    });
  }

  endGame() {
    this.deck = null;
    this.currentHand = null;
  }

  render() {
    if (this.currentHand === null) return;
    // clear the hand before each re render
    // document.getElementById("player-hand").innerHTML = "";

    // iterate through the current hand

    this.currentHand.forEach((card, i) => {
      // create an img element and set it to the cards image
      const cardImg = document.createElement("img");
      cardImg.src = card.image;
      cardImg.classList.add("card");
      cardImg.id = `card-${i}`;
      document.getElementById(`nc-${i}`).appendChild(cardImg);

      // create an li and attach the img to it

      // const listItem = document.createElement("li").appendChild(cardImg);
      // add a click listener to the li
      // if its the players turn, and the player has enough energy to play the card
      // play the card, add the card to the discard pile, delete the card from the hand, and re render
      cardImg.addEventListener("click", this.playCard(card, i), true);
      // if a player doesnt have the energy to play the card
      // display error message in error box
      // if (this.game.player.energy - card.cost < 0) {
      //   document.getElementById("card-errors").innerText =
      //     "Not enough energy";
      //   setInterval(() => {
      //     document.getElementById("card-errors").innerText = "";
      //   }, 5000);
      // }
      // if (this.game.player.energy - card.cost < 0) {
      //   document.getElementById("card-description").innerText =
      //     "Not enough energy";
      // }
      // if a player does
      cardImg.addEventListener("mouseover", () => {
        document.getElementById("card-description").classList.remove("hidden");
        document.getElementById(
          "card-description-span"
        ).innerText = `${card.description}`;
      });
      cardImg.addEventListener("mouseout", () => {
        document.getElementById("card-description").classList.add("hidden");
        document.getElementById("card-description-span").innerText = ``;
      });

      // document.getElementById("player-hand").appendChild(listItem);
    });
  }
}
