import Card from "../card";

export default class InstallUpdate extends Card {
  constructor(game) {
    super(game);
    this.cost = 3;
    this.image = "assets/drainShields.png";
    this.description =
      "Install the latest AI update. Incease max energy by 1. Requires Restart";
  }

  action() {
    this.game.player.shields += this.game.enemy.shields * 0.1;
    this.game.player.energy -= this.cost;
    this.game.playerStatus.render();
  }
}
