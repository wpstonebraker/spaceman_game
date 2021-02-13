import Card from "./card";
import Projectile from "../player/projectile";

export default class MissleAttack extends Card {
  constructor(game) {
    super(game);
    this.cost = 1;
    this.image = "assets/missleAtk.png";
    this.description = `Fire your missles. Missles do full damage vs Armor and half damage vs Shields`;
    this.position = {
      x: this.game.player.laserPoint1,
      y: this.game.player.laserPoint1,
    };
    this.sprite = document.getElementById("img_missle");
    this.game = game;
    this.atkType = "missle";
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
        20,
        7,
        this.game,
        this.atkType
      )
    );
  }
}
