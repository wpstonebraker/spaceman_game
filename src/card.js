export default class Card {
  constructor(game) {
    this.height = 40;
    this.width = 40;
    this.position = {
      x: game.hand.position.x + 10,
      y: game.hand.position.y + 10,
    };
    this.game = game;
  }

  draw(ctx) {
    ctx.fillStyle = "white";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  action() {
    debugger;
    this.game.player.shields -= 10;
  }
}
