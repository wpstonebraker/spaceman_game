export default class Fire {
  constructor(game) {
    this.position = {
      x: game.player.position.x + game.player.laserPos.x,
      y: game.player.position.y + game.player.laserPos.y,
    };
    this.sprite = document.getElementById("img_laser");
    this.game = game;
    this.speed = 10;
    this.width = 20;
    this.height = 3;
  }

  draw(ctx) {
    ctx.drawImage(
      this.sprite,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }

  update(dt) {
    this.position.x += this.speed;

    if (this.position.x >= this.game.gameWidth) {
      this.game.projectiles.splice(this.game.projectiles.indexOf(this), 1);
    }
  }
}
