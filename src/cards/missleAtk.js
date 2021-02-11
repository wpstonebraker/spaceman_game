import Card from "../card";
import Projectile from "../projectile";

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
    this.position = {
      x: this.game.player.laserPoint1,
      y: this.game.player.laserPoint1,
    };
    this.sprite = document.getElementById("img_missle");
    this.game = game;
  }

  action() {
    if (this.game.enemy.shields > 0)
      this.game.enemy.shields -= this.game.player.missles / 2;
    else this.game.enemy.armor -= this.game.player.missles;
    this.game.player.energy -= this.cost;
    this.game.playerStatus.render();
    this.game.elements.push(
      new Projectile(
        this.position.x,
        this.position.y,
        this.sprite,
        20,
        3,
        this.game
      )
    );
  }
}
