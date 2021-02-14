import Card from "./card";

export default class InstallUpdate extends Card {
  constructor(game) {
    super(game);
    this.cost = 0;
    this.image = "assets/installUpdate.png";
    this.description =
      "Install the latest AI update, max energy + 1. Restarts automatically (ends turn)";
  }

  action() {
    this.game.player.maxEnergy++;
    this.game.player.energy -= this.cost;
    this.game.playerStatus.render();
    debugger;
    const idx = this.game.hand.deck.indexOf(this);
    this.game.hand.deck.splice(idx, idx + 1);
    this.game.hand.endTurn();
  }
}
