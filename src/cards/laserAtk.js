import Card from "./card";
import Projectile from "../player/projectile";

export default class LaserAttack extends Card {
  constructor(game) {
    super(game);
    this.cost = 1;
    this.image = "assets/laserAtk.png";
    this.description = `Fire your lasers. Lasers do full damage vs Shields and half damage vs Armor`;

    this.speed = 5;
    this.lastTime = 0;
    this.position = {
      x: this.game.player.laserPoint1,
      y: this.game.player.laserPoint1,
    };
    this.sprite = document.getElementById("img_laser");
    this.game = game;
    this.atkType = "laser";
  }

  action() {
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
        this.game,
        this.atkType
      )
    );
  }
}
