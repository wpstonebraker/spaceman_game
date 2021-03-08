import Explosion from "../util/explosion";
import Card from "./card";

export default class StartGame extends Card {
  constructor(game) {
    super(game);
    this.y = 480;
    this.game = game;
    this.description = "Start game";

    this.image = "assets/dud.png";
    this.cardImg = document.getElementById("img_startGame");
  }

  collision(laser, card) {
    let laserRight = laser.position.x + laser.width;
    let laserY = laser.position.y;
    let topLeft = card.y;
    let bottomLeft = card.y + 60;
    let cardX = 1200;

    if (laserRight >= cardX && laserY >= topLeft && laserY <= bottomLeft) {
      const cardIdx = this.game.startingChoices.indexOf(this);
      this.game.startingChoices.splice(cardIdx, 1);
      const laserIdx = this.game.projectiles.indexOf(laser);
      this.game.projectiles.splice(laserIdx, 1);
      this.game.elements.push(
        new Explosion(laser.position.x, laser.position.y, this.game)
      );
      // this.game.endScreen();
      this.game.manageIntro(this.game.startingCards);
    }
  }
}
