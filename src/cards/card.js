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

  draw(ctx) {
    ctx.drawImage(
      this.cardImg,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }

  collision(laser, card) {
    let laserRight = laser.position.x + laser.width;
    let laserY = laser.position.y;
    let topLeft = card.position.y;
    let bottomLeft = card.position.y + card.height;
    let cardX = card.position.x;

    if (laserRight >= cardX && laserY >= topLeft && laserY <= bottomLeft) {
      const cardIdx = this.game.startingChoices.indexOf(this);
      const card = this.game.startingChoices[cardIdx];
      this.game.startingChoices.splice(cardIdx, cardIdx + 1);
      debugger;
      this.game.startingCards.push(card);
      const laserIdx = this.game.projectiles.indexOf(laser);
      this.game.projectiles.splice(laserIdx, laserIdx + 1);
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
      // this.collision(
      //   this.game.projectiles[this.game.projectiles.length - 1],
      //   this
      // );
    }
  }
}
