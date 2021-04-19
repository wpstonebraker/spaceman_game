import Card from "./card";
import Shields from "../player/newShields";

export default class Recharge extends Card {
  constructor(game) {
    super(game);
    this.cost = 1;
    this.image = "assets/recharge.png";
    this.power = 10;
    this.description = `Charge your shields by ${this.power}, up to a max of 30`;
    this.game = game;
  }

  action() {
    this.game.player.shields += this.power;
    if (this.game.player.shields > 30) this.game.player.shields = 30;
    this.game.player.energy.pop();
    this.game.elements.push(
      new Shields(
        this.game.player.position.x,
        this.game.player.position.y,
        this.game
      )
    );
  }
}
