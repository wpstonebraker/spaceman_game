import Explosion from "../util/explosion";

export default class Card {
  constructor(game, position) {
    this.height = 200;
    this.width = 100;
    this.game = game;
    this.energy;
  }

  check() {
    if (this.game.player.energy - this.cost < 0) {
      document.getElementById("card-description-span").innerText =
        "Not enough energy";
      return false;
    }

    return true;
  }

  checkPos(ctx) {
    let playerPosY = this.game.player.position.y + 100;
    if (playerPosY >= this.ssY && playerPosY <= this.ssY + 60) {
      ctx.font = "25px VT323";
      ctx.fillStyle = "white";
      ctx.textAlign = "right";
      ctx.fillText(this.description, 1150, this.ssY + 35);
    }
  }

  // draw the select screen icon, hence the "ss"
  draw(ctx) {
    ctx.drawImage(
      this.cardImg,
      this.ssX,
      this.ssY,
      this.ssWidth,
      this.ssHeight
    );
    this.checkPos(ctx);
  }

  findCardIdx() {
    return this.game.elements.indexOf(this);
  }

  findCard(idx) {
    return this.game.elements[idx];
  }

  removeAndAddCard(idx, card) {
    this.game.elements.splice(idx, 1);
    this.game.startingCards.push(card);
  }

  collision(laser, card) {
    let laserRight = laser.position.x + laser.width;
    let laserY = laser.position.y;
    let topLeft = card.ssY;
    let bottomLeft = card.ssY + 60;
    let cardX = 1200;

    if (laserRight >= cardX && laserY >= topLeft && laserY <= bottomLeft) {
      const cardIdx = this.findCardIdx();
      const card = this.findCard(cardIdx);
      this.removeAndAddCard(cardIdx, card);
      const laserIdx = this.game.projectiles.indexOf(laser);
      this.game.projectiles.splice(laserIdx, 1);
      this.game.elements.push(
        new Explosion(laser.position.x, laser.position.y, this.game)
      );
    }
  }

  update(dt) {
    if (this.game.projectiles.length >= 1) {
      this.game.projectiles.forEach((projectile) => {
        this.collision(projectile, this);
      });
    }
  }
}
