export default class Hand {
  constructor(game) {
    this.height = 300;
    this.width = game.gameWidth * 0.7;
    this.position = {
      x: 20,
      y: game.gameHeight - this.height - 20,
    };
  }

  draw(ctx) {
    // debugger;
    ctx.fillStyle = "red";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    // ctx.fillRect(this.position.x, this.position.y, 300, 300);
  }
}
