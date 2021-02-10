import Card from "../card";

export default class Attack extends Card {
  constructor(game) {
    super(game);
    this.cost = 1;
    this.image = "assets/attack.png";
  }

  action() {
    if (this.game.enemy.shields > 0) this.game.enemy.shields -= 10;
    else this.game.enemy.armor -= 10;
    this.game.player.energy -= this.cost;
    this.game.playerStatus.render();
  }
}
