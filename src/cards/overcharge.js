import Card from "./card";

export default class Overcharge extends Card {
  constructor(game) {
    super(game);
    this.cost = 1;
    this.image = "assets/overcharge.png";
    this.description =
      "Sacrifice 20 shield points to boost your lasers by 20 for one attack";
  }

  action() {
    this.game.player.shields -= 20;
    if (this.game.enemy.shields > 0)
      this.game.enemy.shields -= this.game.player.lasers + 20;
    else this.game.enemy.armor -= (this.game.player.lasers + 20) / 2;
    if (this.game.enemy.shields < 0) this.game.enemy.shields = 0;
    this.game.player.energy -= this.cost;
    this.game.playerStatus.render();
  }
}
