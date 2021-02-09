import Card from "../card";

export default class Recharge extends Card {
  constructor(game) {
    super(game);
    this.cost = 1;
    this.image = document.getElementById("img_player");
  }

  draw(ctx) {
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }

  action() {
    this.game.player.shields += 10;
    this.game.player.energy -= this.cost;
  }
}
