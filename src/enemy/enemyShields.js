export default class EnemyShields {
  constructor(x, y, game) {
    this.image = document.getElementById("img_npc1shields");
    this.position = {
      x: x,
      y: y,
    };
    this.width = 256;
    this.height = 256;
    this.loop = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    this.loopIndex = 0;
    this.frames = 0;
    this.game = game;
  }

  // give it the image
  // fX (nth frame x cord starts here (top left))
  // fX (nth frame y cord starts here (top left))
  drawFrame(fX, fY, ctx) {
    debugger;
    ctx.drawImage(
      this.image,
      fX * this.width,
      fY * this.height,
      this.width,
      this.height,
      this.game.enemy.position.x,
      this.game.enemy.position.y,
      256,
      256
    );
  }

  draw(ctx) {
    if (this.frames > 1) {
      this.loopIndex += 1;
      this.frames = 0;
      this.drawFrame(this.loopIndex, 0, ctx);
    } else {
      this.frames++;
      this.drawFrame(this.loopIndex, 0, ctx);
    }

    if (this.loopIndex > 11) {
      this.game.elements.pop();
    }

    // this.drawFrame(3, 0, this.position.x, this.position.y, ctx);
    // this.drawFrame(4, 0, this.position.x, this.position.y, ctx);
  }

  update(dt) {}
}
