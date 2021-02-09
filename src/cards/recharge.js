import Card from "../card";

export default class Recharge extends Card {
  constructor(game, position) {
    super(game);
    debugger;
    this.cost = 1;
    this.image = document.getElementById("img_recharge");
    this.position = position;
  }

  draw(ctx) {
    debugger;
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
