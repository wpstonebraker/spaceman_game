import Card from "./card";
import Shields from "../player/newShields";

export default class Recharge extends Card {
  constructor(game) {
    super(game);
    this.cost = 1;
    this.image = "assets/recharge.png";
    this.description = `Charge your shields by 5`;
    this.game = game;
  }

  action() {
    this.game.player.shields += 5;
    this.game.player.energy -= this.cost;
    this.game.elements.push(
      new Shields(
        this.game.player.position.x,
        this.game.player.position.y,
        this.game
      )
    );
    this.game.playerStatus.render();
  }
}
