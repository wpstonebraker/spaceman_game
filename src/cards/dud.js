import Card from "./card";

export default class Dud extends Card {
  constructor(game) {
    super(game);
    this.cost = 1;
    this.image = "assets/dud.png";
    this.description =
      "Malware. Not fatal, but annoying. Playing this card removes it from your deck";
  }

  action() {
    this.game.player.energy -= this.cost;
    const idx = this.game.hand.deck.indexOf(this);
    this.game.hand.deck.splice(idx, idx + 1);
  }
}
