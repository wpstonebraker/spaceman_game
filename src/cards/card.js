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
    if (playerPosY >= this.y && playerPosY <= this.y + 60) {
      ctx.font = "25px VT323";
      ctx.fillStyle = "white";
      ctx.textAlign = "right";
      ctx.fillText(this.description, 1150, this.y + 35);
    }
  }

  draw(ctx, x, y, width, height) {
    ctx.drawImage(this.cardImg, x, y, width, height);
  }

  findCardIdx() {
    return this.game.startingChoices.indexOf(this);
  }

  findCard(idx) {
    return this.game.startingChoices[idx];
  }

  removeAndAddCard(idx, card) {
    this.game.startingChoices.splice(idx, 1);
    this.game.startingCards.push(card);
  }

  collision(laser, card) {
    let laserRight = laser.position.x + laser.width;
    let laserY = laser.position.y;
    let topLeft = card.y;
    let bottomLeft = card.y + 60;
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
    if (this.game.projectiles.length >= 1 && this.game.gameState === 1) {
      this.game.projectiles.forEach((projectile) => {
        this.collision(projectile, this);
      });
    }
  }
}
