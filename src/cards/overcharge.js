import Projectile from "../player/projectile";
import Card from "./card";

export default class Overcharge extends Card {
  constructor(game) {
    super(game);
    this.cost = 1;
    this.power = 20;
    this.image = "assets/overcharge.png";
    this.description =
      "Sacrifice 20 shield points to boost your lasers by 20 for one attack";
    this.position = {
      x: this.game.player.laserPos.x,
      y: this.game.player.laserPos.y,
    };
    this.y = 240;
    this.sprite = document.getElementById("img_laser");
    this.cardImg = document.getElementById("img_overchargeCard");
    this.atkType = "overcharge";
    this.type = "overcharge";
  }

  check() {
    if (this.game.player.energy - this.cost < 0) {
      document.getElementById("card-description-span").innerText =
        "Not enough energy";
      return false;
    }

    if (this.game.player.shields - this.power < 0) {
      document.getElementById("card-description-span").innerText =
        "Need at least 20 shields";
      return false;
    }

    return true;
  }

  action() {
    this.game.player.shields -= 20;
    this.game.player.energy.pop();
    this.game.projectiles.push(
      new Projectile(
        this.position.x,
        this.position.y,
        this.sprite,
        20,
        6,
        20,
        this.game,
        this.atkType
      )
    );
  }
}
