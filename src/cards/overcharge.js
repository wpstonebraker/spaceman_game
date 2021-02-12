import Projectile from "../player/projectile";
import Card from "./card";

export default class Overcharge extends Card {
  constructor(game) {
    super(game);
    this.cost = 1;
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

  action() {
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
