import Card from "../card";

export default class Recharge extends Card {
  constructor(game) {
    super(game);
    this.cost = 2;
    this.image = "assets/recharge.png";
  }

  action() {
    this.game.player.shields += 10;
    this.game.player.energy -= this.cost;
    this.game.playerStatus.render();
  }
}
