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
      x: this.game.player.laserPoint1,
      y: this.game.player.laserPoint1,
    };
    this.sprite = document.getElementById("img_laser");
    this.atkType = "overcharge";
  }

  check() {
    if (this.game.player.energy - this.cost < 0) {
      document.getElementById("card-description").innerText =
        "Not enough energy";
      return false;
    }

    if (this.game.player.shields - this.power < 0) {
      document.getElementById("card-description").innerText =
        "Need at least 20 shields";
      return false;
    }

    return true;
  }

  action() {
    debugger;
    this.game.player.shields -= 20;
    this.game.player.energy -= this.cost;
    this.game.playerStatus.render();
    this.game.elements.push(
      new Projectile(
        this.position.x,
        this.position.y,
        this.sprite,
        20,
        6,
        7,
        this.game,
        this.atkType
      )
    );
  }
}
