import Card from "../card";

export default class MissleAttack extends Card {
  constructor(game) {
    super(game);
    this.cost = 1;
    this.image = "assets/missleAtk.png";
    this.description = `Fire your missles. Missles do ${
      this.game.player.missles
    } damage vs Shields and half damage (${
      this.game.player.missles / 2
    }) vs Armor`;
  }

  action() {
    if (this.game.enemy.shields > 0)
      this.game.enemy.shields -= this.game.player.missles / 2;
    else this.game.enemy.armor -= this.game.player.missles;
    this.game.player.energy -= this.cost;
    this.game.playerStatus.render();
  }
}
