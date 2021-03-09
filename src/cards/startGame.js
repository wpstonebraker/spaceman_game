import Explosion from "../util/explosion";
import Card from "./card";

export default class StartGame extends Card {
  constructor(game) {
    super(game);
    this.ssX = 1155;
    this.ssY = 560;
    this.ssWidth = 128;
    this.ssHeight = 64;

    this.game = game;
    this.description = "Start game";

    this.image = "assets/dud.png";
    this.cardImg = document.getElementById("btn-start");
  }

  collision(laser, card) {
    let laserRight = laser.position.x + laser.width;
    let laserY = laser.position.y;
    let topLeft = card.ssY;
    let bottomLeft = card.ssY + 60;
    let cardX = this.ssX;

    if (laserRight >= cardX && laserY >= topLeft && laserY <= bottomLeft) {
      const cardIdx = this.game.elements.indexOf(this);
      this.game.elements.splice(cardIdx, 1);
      const laserIdx = this.game.projectiles.indexOf(laser);
      this.game.projectiles.splice(laserIdx, 1);
      this.game.elements.push(
        new Explosion(laser.position.x, laser.position.y, this.game)
      );
      // this.game.endScreen();
      this.game.initIntro(this.game.startingCards);
    }
  }
}
