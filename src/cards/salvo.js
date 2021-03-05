import Card from "./card";
import Projectile from "../player/projectile";

export default class Salvo extends Card {
  constructor(game) {
    super(game);
    this.cost = 1;
    this.image = "assets/salvo.png";
    this.description = `Launch a 3 missle salvo`;
    this.position = {
      x: this.game.player.misslePos.x,
      y: this.game.player.misslePos.y,
    };
    this.sprite = document.getElementById("img_missle");
    this.game = game;
    this.atkType = "missle";
    this.y = 400;
    this.cardImg = document.getElementById("img_salvoCard");
    this.type = "salvo";
  }

  action() {
    this.game.player.energy.pop();
    this.game.projectiles.push(
      new Projectile(
        this.position.x,
        this.position.y,
        this.sprite,
        20,
        20,
        10,
        this.game,
        this.atkType
      )
    );
    setTimeout(() => {
      this.game.projectiles.push(
        new Projectile(
          this.position.x,
          this.position.y,
          this.sprite,
          20,
          20,
          10,
          this.game,
          this.atkType
        )
      );
    }, 1000);
    setTimeout(() => {
      this.game.projectiles.push(
        new Projectile(
          this.position.x,
          this.position.y,
          this.sprite,
          20,
          20,
          10,
          this.game,
          this.atkType
        )
      );
    }, 2000);
  }
}
