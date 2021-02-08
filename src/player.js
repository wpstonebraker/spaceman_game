export default class Player {
  constructor(game) {
    this.image = document.getElementById("img_player");
    this.gameHeight = game.gameHeight;
    this.position = {
      x: 100,
      //   y: game.gameHeight / 2 - this.height / 2,
      y: 100,
    };
    this.width = 256;
    this.height = 256;
    this.shields = 100;
    this.armor = 100;
    this.energy = 3;
    this.lasers = 10;
    this.missles = 10;
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
}
