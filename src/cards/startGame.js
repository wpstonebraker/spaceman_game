import Explosion from "../util/explosion";
import Card from "./card";

export default class StartGame extends Card {
  constructor(game) {
    super(game);
    this.position = {
      x: 1200,
      y: 300,
    };
    this.width = 40;
    this.height = 60;

    this.image = "assets/dud.png";
    this.cardImg = document.getElementById("img_startGame");
  }

  collision(laser, card) {
    let laserRight = laser.position.x + laser.width;
    let laserY = laser.position.y;
    let topLeft = card.position.y;
    let bottomLeft = card.position.y + card.height;
    let cardX = card.position.x;

    if (laserRight >= cardX && laserY >= topLeft && laserY <= bottomLeft) {
      const cardIdx = this.game.startingChoices.indexOf(this);
      this.game.startingChoices.splice(cardIdx, cardIdx + 1);
      const laserIdx = this.game.projectiles.indexOf(laser);
      this.game.projectiles.splice(laserIdx, laserIdx + 1);
      this.game.elements.push(
        new Explosion(laser.position.x, laser.position.y, this.game)
      );
      setTimeout(() => {
        this.game.start(this.game.startingCards);
      }, 1000);
    }
  }
}
