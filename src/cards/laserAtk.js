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
      x: this.game.player.laserPos.x,
      y: this.game.player.laserPos.y,
    };
    this.sprite = document.getElementById("img_laser");
    this.game = game;
    this.atkType = "laser";
  }

  action() {
    // document.addEventListener("click", (e) => {
    //   if (e.clientX <= )
    // });
    this.game.player.energy -= this.cost;
    this.game.playerStatus.render();
    this.game.projectiles.push(
      new Projectile(
        this.position.x,
        this.position.y,
        this.sprite,
        20,
        3,
        20,
        this.game,
        this.atkType
      )
    );
  }
}
