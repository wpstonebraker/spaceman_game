export default class Energy {
  constructor(x, y) {
    this.position = {
      x: x,
      y: y,
    };
    this.width = 32;
    this.height = 32;
    this.loopIndex = 0;
    this.frames = 0;
    this.image = document.getElementById("img_energyBall");
  }

  drawFrame(fX, fY, ctx) {
    debugger;
    ctx.drawImage(
      this.image,
      fX * this.width,
      fY * this.height,
      this.width,
      this.height,
      this.position.x,
      this.position.y,
      32,
      32
    );
  }

  draw(ctx) {
    if (this.frames > 3) {
      this.loopIndex += 1;
      this.frames = 0;
      this.drawFrame(this.loopIndex, 0, ctx);
    } else {
      this.drawFrame(this.loopIndex, 0, ctx);
      this.frames += 1;
    }

    if (this.loopIndex === 12) {
      this.loopIndex = 0;
    }

    // this.drawFrame(3, 0, this.position.x, this.position.y, ctx);
    // this.drawFrame(4, 0, this.position.x, this.position.y, ctx);
  }
}
