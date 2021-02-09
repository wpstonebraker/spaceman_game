export default class Card {
  constructor(game, position) {
    this.height = 200;
    this.width = 100;
    // this.position = {
    //   x: game.hand.position.x + 10,
    //   y: game.hand.position.y + 10,
    // };
    this.game = game;
  }

  // draw(ctx) {
  //   ctx.fillStyle = "white";
  //   ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  // }

  action() {
    this.game.player.shields -= 10;
  }
}
