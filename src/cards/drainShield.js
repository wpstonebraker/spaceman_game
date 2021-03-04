import Card from "./card";

export default class DrainShield extends Card {
  constructor(game) {
    super(game);
    this.cost = 1;
    this.image = "assets/drainShields.png";
    this.description =
      "Drain 10% of the enemies shield, adding to your shields";
  }

  action() {
    this.game.player.shields += this.game.enemy.shields * 0.1;
    this.game.player.energy -= this.cost;
  }
}
