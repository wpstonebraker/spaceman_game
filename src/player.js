export default class Player {
  constructor(game) {
    this.image = document.getElementById("img_player");
    this.gameHeight = game.gameHeight;
    this.position = {
      x: 200,
      //   y: game.gameHeight / 2 - this.height / 2,
      y: 200,
    };
    this.width = 128;
    this.height = 128;
    this.shields = 100;
    this.armor = 100;
    this.maxEnergy = 3;
    this.energy = this.maxEnergy;
    this.lasers = 10;
    this.missles = 10;
    this.laserPoint1 = 250;
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
