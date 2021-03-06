export default class Explosion {
  constructor(x, y, game) {
    this.image = document.getElementById("img_explosion");
    this.position = {
      x,
      y,
    };
    this.width = 96;
    this.height = 96;
    this.loop = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    this.loopIndex = 0;
    this.frames = 0;
    this.game = game;
  }

  drawFrame(fX, fY, ctx) {
    ctx.drawImage(
      this.image,
      fX * this.width,
      fY * this.height,
      this.width,
      this.height,
      this.position.x - 50,
      this.position.y - 50,
      100,
      100
    );
  }

  draw(ctx) {
    if (this.frames > 1) {
      this.loopIndex++;
      this.frames = 0;
      this.drawFrame(this.loopIndex, 0, ctx);
    } else {
      this.drawFrame(this.loopIndex, 0, ctx);
      this.frames++;
    }

    if (this.loopIndex > 11) {
      const idx = this.game.elements.indexOf(this);
      this.game.elements.splice(idx, 1);
    }

    // this.drawFrame(3, 0, this.position.x, this.position.y, ctx);
    // this.drawFrame(4, 0, this.position.x, this.position.y, ctx);
  }

  update(dt) {}
}
