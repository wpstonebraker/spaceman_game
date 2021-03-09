import Card from "./card";

export default class SyphonEnergy extends Card {
  constructor(game) {
    super(game);
    this.cost = 0;
    this.image = "assets/syphonEnergy.png";
    this.description = "Double laser damage at cost of -1 max energy";
    this.ssX = 1200;
    this.ssY = 320;
    this.ssWidth = 40;
    this.ssHeight = 60;
    this.cardImg = document.getElementById("img_syphonCard");
  }

  action() {
    this.game.player.syphonEnergy();
    this.game.player.maxEnergy -= 1;
    this.game.player.lasers *= 2;
  }
}
