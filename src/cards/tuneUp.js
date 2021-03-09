import Card from "./card";

export default class TuneUp extends Card {
  constructor(game) {
    super(game);
    this.cost = 2;
    this.image = "assets/tuneUp.png";
    this.power = 5;
    this.description = `Calibrate your laser to permanently increase damage by ${this.power}`;
    this.game = game;
    this.ssX = 1200;
    this.ssY = 400;
    this.ssWidth = 40;
    this.ssHeight = 60;
    this.cardImg = document.getElementById("img_tuneUpCard");
  }

  action() {
    this.game.player.lasers += this.power;
    this.game.player.energy.pop();
  }
}
