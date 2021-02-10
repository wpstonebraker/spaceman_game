export default class Card {
  constructor(game, position) {
    this.height = 200;
    this.width = 100;
    this.game = game;
  }

  action() {
    this.game.player.shields -= 10;
  }
}
