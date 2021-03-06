import Animation from "../util/animation";
import Card from "./card";

export default class InstallUpdate extends Card {
  constructor(game) {
    super(game);
    this.game;
    this.cost = 3;
    this.image = "assets/installUpdateCard.png";
    this.cardImg = document.getElementById("img_updateCard");
    this.sprite = document.getElementById("img_updateAni");
    this.description =
      "Install the latest AI update, max energy + 1. Requires restart to take effect.";
    this.ssX = 1200;
    this.ssY = 160;
    this.ssWidth = 40;
    this.ssHeight = 60;
  }

  action() {
    this.game.player.maxEnergy++;
    this.game.player.energy.pop();
    this.game.player.energy.pop();
    this.game.player.energy.pop();
    this.game.elements.push(
      new Animation(this.sprite, 50, 0, 64, 64, 12, 20, this.game)
    );
    const idx = this.game.hand.deck.indexOf(this);
    this.game.hand.deck.splice(idx, idx + 1);
    // setTimeout(() => {
    //   this.game.hand.endTurn();
    // }, 1500);
  }
}
