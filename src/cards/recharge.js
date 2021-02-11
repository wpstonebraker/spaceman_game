import Card from "../card";

export default class Recharge extends Card {
  constructor(game) {
    super(game);
    this.cost = 1;
    this.image = "assets/recharge.png";
    this.description = `Charge your shields by 5`;
  }

  action() {
    this.game.player.shields += 5;
    this.game.player.energy -= this.cost;
    this.game.playerStatus.render();
  }
}
