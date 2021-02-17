export default class Animation {
  constructor(image, x, y, width, height, loops, fps, game) {
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
    this.loops = loops;
    this.fps = fps;
  }

  drawFrame(fX, fY, ctx) {
    debugger;
    ctx.drawImage(
      this.image,
      fX * this.width,
      fY * this.height,
      this.width,
      this.height,
      this.game.player.position.x + this.position.x,
      this.game.player.position.y + this.position.y,
      100,
      100
    );
  }

  draw(ctx) {
    if (this.frames > this.fps) {
      this.loopIndex++;
      this.frames = 0;
      this.drawFrame(this.loopIndex, 0, ctx);
    } else {
      this.drawFrame(this.loopIndex, 0, ctx);
      this.frames++;
    }

    // if (this.loopIndex > this.loops) {
    //   this.game.elements.pop();
    // }

    // this.drawFrame(3, 0, this.position.x, this.position.y, ctx);
    // this.drawFrame(4, 0, this.position.x, this.position.y, ctx);
  }

  update(dt) {}
}
