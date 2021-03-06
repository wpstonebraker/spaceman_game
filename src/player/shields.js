export default class Shields {
  constructor(x, y, game) {
    this.image = document.getElementById("img_shields");
    this.position = {
      x,
      y,
    };
    this.width = 256;
    this.height = 256;
    this.loopIndex = 0;
    this.frames = 0;
    this.game = game;
  }

  // give it the image
  // fX (nth frame x cord starts here (top left))
  // fX (nth frame y cord starts here (top left))
  drawFrame(fX, fY, ctx) {
    ctx.drawImage(
      this.image,
      fX * this.width,
      fY * this.height,
      this.width,
      this.height,
      this.game.player.position.x - 5,
      this.game.player.position.y + 10,
      150,
      150
    );
  }

  draw(ctx) {
    if (this.frames > 1) {
      this.loopIndex += 1;
      this.frames = 0;
      this.drawFrame(this.loopIndex, 0, ctx);
    } else {
      this.drawFrame(this.loopIndex, 0, ctx);
      this.frames += 1;
    }

    if (this.loopIndex > 11) {
      this.game.elements.pop();
    }

    // this.drawFrame(3, 0, this.position.x, this.position.y, ctx);
    // this.drawFrame(4, 0, this.position.x, this.position.y, ctx);
  }

  update(dt) {}
}
