import Card from "./card";

export default class LinkedIn extends Card {
  constructor(game) {
    super(game);
    this.image = "assets/laserAtk.png";
    this.description = `Check out my Linked in!`;

    this.speed = 5;
    this.lastTime = 0;
    this.position = {
      x: this.game.player.laserPos.x,
      y: this.game.player.laserPos.y,
    };
    this.sprite = document.getElementById("img_linkedIn");
    this.game = game;
  }

  action() {
    // document.addEventListener("click", (e) => {
    //   if (e.clientX <= )
    // });
    this.game.player.energy -= this.cost;
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
