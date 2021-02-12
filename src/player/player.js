export default class Player {
  constructor(game) {
    this.image = document.getElementById("img_player");
    this.gameHeight = game.gameHeight;
    this.position = {
      x: 200,
      //   y: game.gameHeight / 2 - this.height / 2,
      y: 200,
    };
    this.width = 100;
    this.height = 100;
    this.shields = 100;
    this.armor = 100;
    this.maxEnergy = 3;
    this.energy = this.maxEnergy;
    this.lasers = 10;
    this.missles = 10;
    this.laserPoint1 = 250;
    this.receiveAttack = 250;
    // this.shieldX = this.position.x;
    // this.shieldY = this.position.y;
    this.speed = 0.1;
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

  update(dt) {
    if (this.position.y < 220) {
      this.position.y += this.speed;
    } else {
      this.speed = -this.speed;
      this.position.y += this.speed;
    }
    if (this.position.y > 180) {
      this.position.y += this.speed;
    } else {
      this.speed = -this.speed;
      this.position.y += this.speed;
    }
  }
}
