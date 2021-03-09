import Explosion from "../util/explosion";

export default class Button {
  constructor(image, x, y, type, game, width, height) {
    this.image = image;
    this.x = x;
    this.y = y;
    this.game = game;
    this.type = type;
    this.width = width;
    this.height = height;
  }

  draw(ctx) {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }

  hideAll() {
    const btns = document.getElementsByClassName("start-screen-div");
    Array.from(btns).forEach((btn) => {
      btn.classList.add("hidden");
    });
  }

  collision(laser) {
    let laserRight = laser.position.x + laser.width;
    let laserY = laser.position.y;
    let topLeft = this.y;
    let bottomLeft = this.y + this.height;

    if (laserRight >= this.x && laserY >= topLeft && laserY <= bottomLeft) {
      const laserIdx = this.game.projectiles.indexOf(laser);
      this.game.projectiles.splice(laserIdx, 1);
      this.game.elements.push(
        new Explosion(laser.position.x, laser.position.y, this.game)
      );
      this.hideAll();
      switch (this.type) {
        case "start":
          this.game.selectCards();
          break;
        case "instructions":
          document.getElementById("ss-instructions").classList.remove("hidden");
          break;
        case "story":
          document.getElementById("ss-story").classList.remove("hidden");
          break;
        case "illustration":
          document.getElementById("rules-pic-box").classList.remove("hidden");
          document
            .getElementById("rules-pic-box")
            .addEventListener("click", () => {
              document.getElementById("rules-pic-box").classList.add("hidden");
            });
          break;
        case "credits":
          document.getElementById("ss-credits").classList.remove("hidden");
          break;
        case "reset":
          break;
        case "linked in":
          window.open("https://www.linkedin.com/in/paul-stonebraker", "_blank");
          break;
        case "angel list":
          window.open("https://angel.co/u/paul-stonebraker", "_blank");
          break;
        case "github":
          window.open("https://github.com/wpstonebraker", "_blank");
          break;
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
