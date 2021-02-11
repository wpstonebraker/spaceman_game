import Card from "../card";

export default class LaserAttack extends Card {
  constructor(game) {
    super(game);
    this.cost = 1;
    this.image = "assets/laserAtk.png";
    this.description = `Fire your lasers. Lasers do ${
      this.game.player.lasers
    } damage vs Shields and half damage (${
      this.game.player.lasers / 2
    }) vs Armor`;
  }

  action() {
    if (this.game.enemy.shields > 0)
      this.game.enemy.shields -= this.game.player.lasers;
    else this.game.enemy.armor -= this.game.player.lasers / 2;
    this.game.player.energy -= this.cost;
    this.game.playerStatus.render();
  }
}
