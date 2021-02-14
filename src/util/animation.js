export default class Animation {
  constructor(image, x, y, width, height, game) {
    this.image = image;
    this.position = {
      x,
      y,
    };
    this.width = width;
    this.height = height;
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
      this.game.elements.pop();
    }

    // this.drawFrame(3, 0, this.position.x, this.position.y, ctx);
    // this.drawFrame(4, 0, this.position.x, this.position.y, ctx);
  }

  update(dt) {}
}
