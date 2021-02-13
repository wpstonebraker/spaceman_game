export default class Card {
  constructor(game, position) {
    this.height = 200;
    this.width = 100;
    this.game = game;
    this.energy;
  }

  check() {
    if (this.game.player.energy - this.cost < 0) {
      document.getElementById("card-description").innerText =
        "Not enough energy";
      return false;
    }

    return true;
  }
}
