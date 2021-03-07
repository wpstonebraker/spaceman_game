export default class Coffee {
  constructor(game) {
    this.image = document.getElementById("img_coffeeMug");
    this.position = {
      x: 1500,
      y: 800,
    };
    this.width = 64;
    this.height = 64;
    this.loopIndex = 0;
    this.frames = 0;
    this.game = game;
    // this.loops = loops;
    this.fps = 5;
  }

  drawFrame(fX, fY, ctx) {
    ctx.drawImage(
      this.image,
      fX * this.width,
      fY * this.height,
      this.width,
      this.height,
      this.position.x,
      this.position.y,
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

    if (this.loopIndex === 5) {
      this.loopIndex = 0;
    }

    // if (this.loopIndex > this.loops) {
    //   this.game.elements.pop();
    // }

    // this.drawFrame(3, 0, this.position.x, this.position.y, ctx);
    // this.drawFrame(4, 0, this.position.x, this.position.y, ctx);
  }

  update(dt) {}
}
