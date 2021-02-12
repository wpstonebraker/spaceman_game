import Card from "./card";

export default class SyphonEnergy extends Card {
  constructor(game) {
    super(game);
    this.cost = 0;
    this.image = "assets/syphonEnergy.png";
    this.description = "Double laser damage at cost of -1 max energy";
  }

  action() {
    this.game.player.maxEnergy -= 1;
    this.game.player.lasers *= 2;
    this.game.playerStatus.render();
  }
}
