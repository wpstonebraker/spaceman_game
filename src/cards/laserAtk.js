import Card from "../card";
import Projectile from "../projectile";

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
    this.speed = 5;
    this.lastTime = 0;
    this.position = {
      x: this.game.player.laserPoint1,
      y: this.game.player.laserPoint1,
    };
    this.sprite = document.getElementById("img_laser");
    this.game = game;
  }

  action() {
    if (this.game.enemy.shields > 0)
      this.game.enemy.shields -= this.game.player.lasers;
    else this.game.enemy.armor -= this.game.player.lasers / 2;
    this.game.player.energy -= this.cost;
    this.game.playerStatus.render();
    this.game.elements.push(
      new Projectile(
        this.position.x,
        this.position.y,
        this.sprite,
        20,
        3,
        7,
        this.game
      )
    );
  }
}
