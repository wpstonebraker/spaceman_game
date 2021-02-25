import Explosion from "../util/explosion";

export default class Button {
  constructor(image, x, y, type, game) {
    this.image = image;
    this.x = x;
    this.y = y;
    this.game = game;
    this.type = type;
  }

  draw(ctx) {
    ctx.drawImage(this.image, this.x, this.y);
  }

  collision(laser) {
    let laserRight = laser.position.x + laser.width;
    let laserY = laser.position.y;
    let topLeft = this.y;
    let bottomLeft = this.y + 64;

    if (laserRight >= this.x && laserY >= topLeft && laserY <= bottomLeft) {
      const laserIdx = this.game.projectiles.indexOf(laser);
      this.game.projectiles.splice(laserIdx, 1);
      this.game.elements.push(
        new Explosion(laser.position.x, laser.position.y, this.game)
      );
      switch (this.type) {
        case "start":
          this.game.selectCards();
          break;
        case "instructions":
          document.getElementById("rules").classList.remove("hidden");
          document.getElementById("rules").classList.add("visible");
        default:
          break;
      }
    }
  }

  update(dt) {
    if (this.game.projectiles.length >= 1) {
      this.game.projectiles.forEach((projectile) => {
        this.collision(projectile);
      });
    }
  }
}
